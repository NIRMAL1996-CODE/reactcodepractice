import {motion} from "framer-motion"

const BoxAnimation = () => {
  return (
    <div>
      <motion.div
      initial={{x:0}}
      animate={{x:1000}}
      transition={{delay:1,duration:5}}>
        <div className="w-[200px] h-[200px] border-1 bg-amber-300 m-2"></div>
      </motion.div>
    </div>
  )
};
export default BoxAnimation;