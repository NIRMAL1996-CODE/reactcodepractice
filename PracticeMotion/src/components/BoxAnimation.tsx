import {motion} from "framer-motion"

const BoxAnimation = () => {
  return (
    <div>
      <motion.div
      initial={{x:0}}
      animate={{x:1000}}
      transition={{delay:1,duration:5}}>
        <div className="w-[100px] h-[100px] border-1 bg-amber-300 m-2 rounded-lg flex justify-center items-center font-bold">Box</div>
      </motion.div>
    </div>
  )
};
export default BoxAnimation;