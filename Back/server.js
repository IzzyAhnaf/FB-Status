const fastify = require('fastify')({
    logger: true
});
const cors = require('@fastify/cors');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const multipart = require('@fastify/multipart');
const fs = require('fs');
const path = require('path');
const pipeline = require('stream/promises').pipeline;

fastify.register(cors);
fastify.register(multipart);

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'facebook-status'
});


// koneksi ke db
db.connect((err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    } else {    
        
    }
})


// Fungsi
let generatedStrings = [];
function generateString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateUniqueString(length) {
    let newString;
    do {
        newString = generateString(length);
    } while (generatedStrings.includes(newString));

    // Tambahkan string baru ke dalam array
    generatedStrings.push(newString);

    return newString;
}

// routes

// Register
fastify.post('/register', async (request, reply) => {
    const { email, username, password } = request.body;
    const id = generateUniqueString(12);
    try{
        const ExistAccount = await new Promise((resolve, reject) => {
            db.query('INSERT INTO user (id, email, username, password) VALUES (?, ?, ?, ?)', [id, email, username, password], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        if(ExistAccount){
            return reply.status(200).send({ message: 'Register Success' });
        }
    }catch(err){
        console.log(err);
        return reply.status(500).send({ message: 'Internal Server Error' });
    }
})

// login
fastify.post('/login', async (request, reply) => {
    const { email, password } = request.body;
    try{
        const ExistAccount = await new Promise((resolve, reject) => {
            db.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password], (err, result) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });
        if(ExistAccount){
            const token = jwt.sign({ id: ExistAccount[0].id }, 'secret', { expiresIn: '1d' });
            return reply.status(200).send({ token });
        }
    }catch(err){
        console.log(err);
        return reply.status(500).send({ message: 'Internal Server Error' });
    }
})

// sessionLogin
fastify.get('/sessionLogin', async (request, reply) => {
    const token = request.headers.authorization;
    const decodedToken = jwt.verify(token, 'secret');
    try{
        const resp = await new Promise((resolve, reject) => {
            db.query('SELECT * FROM user WHERE id = ?', [decodedToken.id], (err, result) => {
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });

        if(resp){
            return reply.status(200).send(resp);
        }
    }catch(err){
        console.log(err);
        return reply.status(500).send({ message: 'Internal Server Error' });
    }
})

// get Story
fastify.get('/:limit', async (request, reply) => {
    try{
        const resp = await new Promise((resolve, reject) => {
            db.query('SELECT * FROM `feed-user` LIMIT ?',[limit], (err, result) => {
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });

        if(resp){
            // Ubah struktur data menjadi array objek
            const responseData = resp.map(row => ({
                id: row.id,
                userid: row.userid,
                tipe: row.tipe,
                data: row.data
            }));

            return reply.status(200).send(responseData);
        }
    }catch(err){
        console.log(err);
        return reply.status(500).send({ message: 'Internal Server Error' });
    }

})

// uploadStory
fastify.post('/uploadStory', async (request, reply) => {
    const StoryId = generateUniqueString(12);
    const Token = request.headers.authorization;
    const file = await request.file();

    const decodedToken = jwt.verify(Token, 'secret');
    const timestamp = Date.now();

    const tipe = () => {
        if(file.mimetype == ('image/png' || 'image/jpg' || 'image/jpeg')){
            return 'Foto'
        }else if(file.mimetype == 'video/mp4'){
            return 'Video'
        }
    }

    // Menyimpan file di folder uploads
    const uploadDir = path.join(__dirname, 'uploads');
    const filePath = path.join(uploadDir, timestamp + '-' + file.filename);
    try{

        if(!fs.existsSync(uploadDir)){
            fs.mkdirSync(uploadDir);
        }

        const resp = await new Promise((resolve, reject) => {
            db.query('INSERT INTO `feed_user` (id, userid, tipe, data) VALUES (?, ?, ?, ?)', [StoryId, decodedToken.id, tipe(), timestamp + '-' + file.filename], (err, result) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            })
        })
        if(resp){
            await pipeline(file.file, fs.createWriteStream(filePath));
            return reply.status(200).send({ message: 'Upload Success' });
        }
    }catch(err){
        console.log(err);
        return reply.status(500).send({message: err});
    }
})


// start
const start = async () => {
    try {
        await fastify.listen({ port: 5000, host: '0.0.0.0' });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();