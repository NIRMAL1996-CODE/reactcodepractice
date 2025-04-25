import { FaImage } from "react-icons/fa";
import {motion} from "framer-motion"
import { useState } from "react";

const images=["https://plus.unsplash.com/premium_photo-1744991859949-6297ee4b8f96?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1745172366995-a55968e94797?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D", 
  "https://images.unsplash.com/photo-1743653537429-a94889a6fd47?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1744024450738-b040cffc7ff9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
];

const imgVariant={
  hidden:{opacity:0},
  visible:{opacity:1, transition:{staggerChildren:0.5} }
};
const childImgVariant={
  hidden:{opacity:0, y:20},
  visible:{opacity:1, y:0}
};
const AnimatedGallery = () => {
  
  const [show, setShow] =useState(false);
  const handleClick =()=>{
    setShow((x)=>!x);
  };
  return (
  <div className="flex flex-col justify-center items-center gap-2 relative">
      <button onClick={handleClick}
       className="absolute left-1 top-[10px] p-2 m-2 text-white text-1xl bg-amber-400 rounded cursor-pointer hover:bg-amber-300 flex justify-center items-center">
      <FaImage className="m-2"/>
      {show ? "Hide Images":"Show Images"}
      </button>

   <motion.div 
     variants={imgVariant}
     initial="hidden"
      animate={!show ?  "hidden" : "visible"}
       className=" flex justify-center items-center h-[300px] m-1 p-2 gap-4">
        
        {images.map((image, index)=>(
            <motion.img
             key={index}
             variants={childImgVariant}
             className="w-[200px] h-[160px] rounded"
             src={image} alt="image"></motion.img>
        ))}
    </motion.div>
  </div>
  );
};

export default AnimatedGallery;