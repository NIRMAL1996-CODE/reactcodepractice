import {motion} from "framer-motion"
import { useState } from "react";
const FlipVariant={front:{rotateY:0}, back:{rotateY:180}};

const FlipCard = () => {
  const[flipped, setFlipped] =useState(false);

  return (
  <div className=" perspective-[1000px]">
    <motion.div className=" relative w-[200px] h-[100px] cursor-pointer"
      variants={FlipVariant}
      animate={flipped? "back":"front"}
      transition={{duration:1}}
      onClick={()=>setFlipped(!flipped)}
      >
     <div className="front text-2xl absolute w-full h-full border-1 bg-blue-400 rounded flex justify-center items-center">
      Front
     </div>
     <div className="back text-2xl absolute w-full h-full  border-1 bg-green-400 rounded flex justify-center items-center ">
      Back
     </div>
    </motion.div>
  </div>
  )
};
export default FlipCard;

