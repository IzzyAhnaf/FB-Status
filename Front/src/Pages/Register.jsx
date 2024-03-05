import { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios"

const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

        const handleRegister = async () => {
            
    
            try {
                const response = await axios.post ("http://localhost:5000/register", {
                    email,
                    username,
                    password
                });
                
                // Handle response if needed
                console.log(response.data);
                response.status === 200 && window.location.replace("/Facebook-Status/Login");
            } catch (error) {
                console.error("Error registering user:", error);
            }
        };
    
    return(
        <>
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white shadow-lg rounded-xl w-1/4 p-4 flex flex-col items-center space-y-8">
                <h1 className="text-3xl font-bold">Register</h1>
                <div className="mb-4 w-full px-14">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input id="email" name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="mb-4 w-full px-14">
                    <label htmlFor="username" className="block text-gray-700">Username</label>
                    <input id="username" name="username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="mb-4 w-full px-14">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input id="password" name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="mb-4 w-full flex justify-center">
                    <button type="button" className="bg-blue-700 text-white p-2 rounded-2xl w-3/4" onClick={() => handleRegister()}>Register</button>
                </div>
                <div>
                    <Link to={'/Facebook-Status/Login'} className="text-blue-700 hover:underline">Already have an Account? Login!</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register