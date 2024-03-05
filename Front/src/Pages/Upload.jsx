import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useRef, useState } from "react";


const UploadPage = () => {
  
    const fileInputRef = useRef(null);

    const handleFileClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const formData = new FormData();
        formData.append('konten', file);
        formData.append('token', token);
        console.log(token);
        try {
            const response = await axios.post('http://localhost:5000/uploadStory', formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `${token}`
                }
            }
            );
            response.status === 200 && window.location.replace("/Facebook-Status/");
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    };
    
    return (
        <div className="flex container justify-center items-center">
            <div className="p-0 rounded-md shadow-md mx-4 flex flex-col justify-center items-center hover:cursor-pointer" style={{ height: '400px', width: '250px', background: 'linear-gradient(45deg, #0B6E4F, #21D375)' }} 
            onClick={handleFileClick}>
                <input type="file" ref={fileInputRef} style={{ display: 'none' }} 
                onChange={handleFileChange} accept="image/*, video/*"/>
                <p className="text-white text-xl">Foto/Video</p>
            </div>
            <div className="p-0 rounded-md shadow-md mx-4 flex flex-col justify-center items-center" style={{ height: '400px', width: '250px', background: 'linear-gradient(45deg, #797EF6, #F66D9B, #F66D9B)' }} >
                <p className="text-white text-xl">Teks Kata-kata</p>
            </div>
        </div>
    );
}

export default UploadPage;
