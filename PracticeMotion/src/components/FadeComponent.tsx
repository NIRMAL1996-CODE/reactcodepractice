import {AnimatePresence, motion} from "framer-motion"
import { useState } from "react"
const FadeComponent = () => {
  const [visible, setVisible] =useState(false);

  const handleClick =()=>{
    setVisible(!visible);
  }
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <button onClick={handleClick} className="w-[80px] h-[50px] font-bold cursor-pointer hover:bg-amber-100 bg-amber-400 m-2 p-2 rounded-lg">{!visible ? "Show" : "Hide"}</button>
      <AnimatePresence>
      {visible &&
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    className="w-[400px] h-[200px] bg-amber-300 rounded-lg p-2 m-2 font-bold text-2xl flex flex-col justify-center items-center">
    <h1>Hello!</h1>
    <p> Im a fading component</p></motion.div>}
    </AnimatePresence>
    </div>
  )
}

export default FadeComponent;