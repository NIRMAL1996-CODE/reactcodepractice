import {motion} from "framer-motion"
const itemVariants ={
  hidden:{opacity:0, scale:0.5, rotate:180},
  visible:{opacity:1, scale:1, rotate:0}
};

const ComplexAnimatedButton = () => {
  return (
    <motion.div className="flex items-center "
    initial="hidden"
    whileInView="visible"
    transition={{staggerChildren:0.5  }}>
      {[1,2,3].map((item)=>(
      <motion.div variants={itemVariants} key={item} className="p-2 m-2 bg-amber-300 rounded-lg shadow-lg text-2xl">
        Item{item}
    </motion.div>))}
    </motion.div>
  )
}

export default ComplexAnimatedButton