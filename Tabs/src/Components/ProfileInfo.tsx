//Image Upload using URL or File Input/"Image Preview Upload" or "Image Picker"

import { useState } from "react";
import { FaBell } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";
const ProfileInfo = () => {
  const [imageBanner, setImageBanner] =useState<string>("");
  const [profileImage, setProfileImage] =useState<string>("");
  
  const handleBannerImage =(e :any)=>{
    const file = e.target.files ?e.target.files[0]:null;
    if(file){
      setImageBanner(URL.createObjectURL(file));
    }
    console.log(file);
  };
  const handleProfileImage =(e: any)=>{
    const file = e.target.files? e.target.files[0]:null;
    if(file){
      setProfileImage(URL.createObjectURL(file));
    }
  }
  return (
  <div className="p-[10px] m-[10px] bg-white h-[583px]">
    {/* background cover "flex justify-center item-center" */}
     <div className="h-[200px] bg-gray-300 flex flex-col justify-center items-center">
        {/* Display the selected image */}
        {imageBanner && (
          <img src={imageBanner} alt="Selected" className="object-cover w-full h-[200px] " />
        )}
        <div className="flex flex-col items-center ">
          <label>
          <input type="file" accept="image/*" className=" hidden max-w-full" onChange={handleBannerImage}/>
          <MdAddAPhoto className="absolute text-[20px] hover:text-blue-500 cursor-pointer"/>
          </label>
        </div>
     </div>
     
      {/* Profile-Photo */}
      <div className="flex m-[10px]">
        <div className="h-[200px] w-[200px] bg-gray-300 flex flex-col justify-center items-center rounded-[100px]">
              {/* Display the selected image */}
              {profileImage && (
          <img src={profileImage} alt="Selected" className="w-[200px] h-[200px] rounded-[100px]" />
        )}
         <label>
         <input type="file" accept="image/*" className=" hidden max-w-full" onChange={handleProfileImage}/>
         <MdAddAPhoto className="absolute text-[20px] hover:text-blue-500 cursor-pointer"/>
         </label>
        </div>

        {/* description */}
        <div className="h-[200px] p-[10px] flex flex-col justify-center items-start">
          <h1 className="font-bold text-2xl">Nirmal</h1>
          <p>Frontend Developer | Building clean UIs with React, Tailwind & TypeScript | Learning & Growing Daily.</p>
          <button className="flex justify-center items-center gap-2 cursor-pointer border-black bg-red-500 text-white hover:text-black p-[5px] m-[5px] rounded-[5px] w-[130px]"><FaBell/>Subscribe</button>
        </div>
      </div>
  </div>
  )
};
export default ProfileInfo;