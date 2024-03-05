import { Link, useNavigate } from "react-router-dom"
import { FaFacebook } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoPeopleOutline, IoPeopleSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";

import { useEffect, useState } from "react";

const Navbar = () => {
    const [pressNavIndex, setPressNavIndex] = useState(0);
    const navTo = useNavigate();
    
    useEffect(() => {

    }, []);
    return (
        <div className="bg-white shadow-md flex p-4 justify-between">
            <div className="flex">
            <FaFacebook className="text-4xl text-blue-500"/>
            <input type="text" name="" placeholder="Search" className="rounded-full outline-none bg-[#F0F2F5] px-5 mx-5" id="" />
            </div>
                <div className="flex space-x-12 items-center">
                    { pressNavIndex != 0 ? <GoHomeFill className="text-3xl" onClick={() => {setPressNavIndex(0); navTo("/Facebook-Status/")}}/> : <GoHomeFill className="text-3xl text-blue-700" onClick={() => navTo("/Facebook-Status/")}/>}
                    { pressNavIndex != 1 ? <IoPeopleOutline className="text-3xl" onClick={() => {setPressNavIndex(1); navTo("/Facebook-Status/")}}/> : <IoPeopleSharp className="text-3xl text-blue-700" onClick={() => navTo("/Facebook-Status/")}/>}
                    { pressNavIndex != 2 ? <FaPeopleGroup className="text-3xl" onClick={() => {setPressNavIndex(2); navTo("/Facebook-Status/")}}/> : <FaPeopleGroup className="text-3xl text-blue-700" onClick={() => navTo("/Facebook-Status/")}/>}
                </div>
            <div className="flex space-x-3">
                <button type="button" className="rounded-full bg-[#F0F2F5] px-5">Find Friend</button>
                <CgMenuGridO className="text-4xl rounded-full bg-[#F0F2F5] p-2"/>
                <IoMdNotifications className="text-4xl rounded-full bg-[#F0F2F5] p-2"/>
                <IoPeopleOutline className="text-4xl rounded-full bg-[#F0F2F5] p-2" onClick={() => navTo("/Facebook-Status/Login")}/>                
                
            </div>
        </div>
    )
}

export default Navbar