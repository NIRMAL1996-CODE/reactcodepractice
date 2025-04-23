import {motion} from "framer-motion"
import { useState } from "react";
const boxVariant ={hidden: {opacity:0},
visible:{opacity:1}};
//put this into another file.

const Variants = () => {
 const [isVisible, setIsVisible]=useState(true);
  return (
    <div>
      <motion.div className="box"
      variants={boxVariant}
      initial="hidden"
      animate={isVisible? "visible": "hidden"}
      exit="hidden"
      transition={{duration:1}}
      onClick={()=>setIsVisible(!isVisible)}></motion.div>
    </div>
  )
};
export default Variants;