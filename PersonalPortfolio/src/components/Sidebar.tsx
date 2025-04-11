import { FaHome, FaSearch, FaUser } from "react-icons/fa"
import { MdSettings } from "react-icons/md"

const Sidebar = () => {
  return (
    <div> 
      <div className="fixed h-screen w-[200px] bg-[#070706] flex flex-col items-center">
        <div className="text-center text-3xl font-bold text-[#f5f5f8]">MyApp</div>
         <div className="top  flex flex-col items-center space-y-4 ">
           <FaHome className="size-[30px] m-[10px] text-white hover:text-[#9279d7]"/>
           <FaUser className="size-[30px] m-[10px] text-white hover:text-[#9279d7]"/>
           <FaSearch className="size-[30px] m-[10px] text-white hover:text-[hsl(236,54%,66%)]"/>
         </div>
         <div className="bottom  flex flex-col items-center space-y-4 mt-auto">
          <MdSettings className="size-[30px] m-[10px] text-white hover:text-[#9279d7]"/>
          <FaUser className="size-[30px] m-[10px] text-white hover:text-[#9279d7]"/>
         </div>
      </div>
    </div>
  )
}

export default Sidebar