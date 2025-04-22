import {motion} from "framer-motion"
const PulsingButton = () => {
  return (
    <div className="mt-6 h-[130px] w-[400px] flex justify-center items-center ">
      <motion.button className="bg-amber-300 text-white rounded h-[50px] w-[120px] mb-4 "
       animate={{
        scale:[1,1.2,1],backgroundColor:["#60a5fa", "#3b82f6", "#60a5fa"],
      }}
      transition={{repeat:Infinity, duration:1, }}>
        PulsingButton
        </motion.button> 
    </div>
  )
}

export default PulsingButton;