import {motion} from "framer-motion"

const CircleBounce = () => {
  return (

    <div className="flex justify-center items-center m-2">
      < motion.div className="w-[100px] h-[100px] bg-amber-300 m-2 rounded-full shadow-lg flex justify-center items-center font-bold"
      animate={{y:[0,100, 0]}}
      transition={{repeat:Infinity, duration:2 ,ease:"easeInOut" }}>circle
      </motion.div>
    </div>
  )
};
export default CircleBounce;