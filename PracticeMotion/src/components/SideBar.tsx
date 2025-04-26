import {motion} from "framer-motion";

import { useState } from "react";
import { FaFile, FaHome, FaPhone, FaSearch, FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const SideBar = () => {
  const [side, setSide] =useState(false);
  const handleClick=()=>{
    setSide(!side);
  };
  return (
    <div className="flex">
      
    <motion.div
    initial={{x:"-100%"}}
    animate={{x:side? "0%" : "-100%"}}
    transition={{duration:0.5}}
    className="bg-gradient-to-r from-pink-300 to-amber-200 w-[200px] h-screen flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Sidebar</h1>
        <div className="mb-10 p-2 text-2xl"><FaHome/></div>
        <div className="mb-10 p-2 text-2xl"><FaUser/></div>
        <div className="mb-10 p-2 text-2xl"><FaPhone/></div>
        <div className="mb-10 p-2 text-2xl"><FaGear/></div>
        <div className="mb-10 p-2 text-2xl"><FaSearch/></div>
        <div className="mb-10 p-2 text-2xl"><FaFile/></div>
      </motion.div>
      <div className="flex justify-center items-center">
      <button onClick={handleClick} className="text-1xl font-bold cursor-pointer w-[100px] hover:bg-amber-200 m-2 p-2 rounded-lg shadow-lg bg-amber-300">{!side? "Open" : "Close"}</button></div>
    </div>
  )
};
export default SideBar;