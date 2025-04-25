import { motion} from "framer-motion"
import { useState } from "react";

const SkewedTransition = () => {
  const [isSkew, setIsSkew] =useState(false);
  return (
    <motion.div 
    animate={{skewX: isSkew? 30: 0}}
    transition={{duration:0.5}}
    onClick={()=>setIsSkew(!isSkew)}
    className="w-[200px] h-[100px] bg-gradient-to-r from-yellow-300 to-blue-500 m-2 flex justify-center items-center font-bold">Rectangle</motion.div>
  )
};
export default SkewedTransition;