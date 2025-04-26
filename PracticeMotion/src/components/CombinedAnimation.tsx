import {motion} from "framer-motion"

const CombinedAnimation = () => {
  return (
    <motion.div
    className="w-[100px] h-[100px] bg-amber-300 m-2 rounded-lg flex justify-center items-center font-bold"
    animate={{x:1000, y:-500,scale:2, rotate:360}}
    transition={{ duration:2}}>box
    </motion.div>
  )
};
export default CombinedAnimation;