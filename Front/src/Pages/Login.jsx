import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async () => {
        try{
            const response = await axios.post("http://localhost:5000/login", {
                email,
                password
            });

            localStorage.setItem("token", response.data.token);
            response.status === 200 && window.location.replace("/Facebook-Status/");
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white shadow-lg rounded-xl w-1/5 p-4 flex flex-col items-center space-y-12">
                <h1 className="text-3xl font-bold">Login</h1>
                <div className="mb-4 w-full px-11">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input id="email" name="email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="mb-4 w-full px-11">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input id="password" name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="mb-4 w-full flex justify-center">
                    <button type="button" className="bg-blue-700 text-white p-2 rounded-2xl w-3/4" onClick={() => handleLogin()}>Login</button>
                </div>
                <div>
                    <Link to={'/Facebook-Status/Register'} className="text-blue-700 hover:underline">Not have an Account? Create Account!</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
