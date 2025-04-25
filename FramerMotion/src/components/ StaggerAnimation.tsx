import {motion} from "framer-motion"
const straggerVariants={
  hidden: { opacity: 0 },
  visible: {opacity: 1, transition: {staggerChildren: 0.8, }},
  //staggerChildren adds a small delay between the animations of each child element.
}
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const  StaggerAnimation = () => {
  return (
       <motion.div variants={straggerVariants} initial="hidden" animate="visible">
      {[...Array(5)].map((_, index )=>(
        <motion.div className="box flex flex-col justify-center items-center text-2xl text-white" key={index} variants={childVariants}>{index+1}</motion.div>

      ))}
      </motion.div>
  )
};
export default  StaggerAnimation;