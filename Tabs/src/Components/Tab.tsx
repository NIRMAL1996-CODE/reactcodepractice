import { FaFolder, FaHome, FaPhone, FaUserCircle, } from "react-icons/fa";
import Home from "./Home";
import { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import Project from "./Project";
import Contact from "./Contact";


const Tab = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleHome=()=>{
    setActiveTab("Home");
  };
  const handleProfileInfo =()=>{
    setActiveTab("Profile");
  };
  const handleContact=()=>{
    setActiveTab("Contact");
  };
  const handleProject =()=>{
    setActiveTab("Project");
  }
  return (
    <div>
      <div className="text-center bg-[#102E50] p-[5px]">
        <h1 className="font-bold text-2xl underline text-white">Tabs</h1>
        <div className="flex justify-center items-center">
        <button onClick={handleHome} className={`border-[1px] p-[10px] m-[10px] text-white hover:bg-[#A0C878] text-2xl ${activeTab === "Home" ? "bg-[#A0C878]" : ""}`}><FaHome/></button>

        <button onClick={handleProfileInfo} className={`border-[1px] p-[10px] m-[10px] text-white hover:bg-[#A0C878] text-2xl ${activeTab === "Profile" ? "bg-[#A0C878]" : ""}`}><FaUserCircle/></button>

        <button onClick={handleContact} className={`border-[1px] p-[10px] m-[10px] text-white hover:bg-[#A0C878] text-2xl ${activeTab === "Contact" ? "bg-[#A0C878]" : ""}`}><FaPhone/></button>

        <button onClick={handleProject} className={`border-[1px] p-[10px] m-[10px] text-white hover:bg-[#A0C878] text-2xl ${activeTab === "Project" ? "bg-[#A0C878]" : ""}`}><FaFolder/></button>
      </div>

      {activeTab==="Home" && <Home/>}
      {activeTab==="Profile" && <ProfileInfo/>}
      {activeTab==="Contact" && <Contact/>}
      {activeTab==="Project" && <Project/>}
    </div>
    </div>
  )
};

export default Tab;