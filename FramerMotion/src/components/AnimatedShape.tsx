import {motion} from "framer-motion"
const boxVariants={
  initial: {
    scale:1,
    rotate:0,
    skew:0,
  },
  hover:{
    scale:1.2,
    rotate:20,
    skew:"10deg",
    transition:{durtion:0.3},
    backgroundColor:"yellow",
  },
  click:{
    backgroundColor:"#93C5FD",
    scale:0.9,
    rotate:-20,
    transition:{duratuion:0.3}
  }
}
const AnimatedShape = () => {
  return (
    <motion.div className="box" variants={boxVariants}
    initial="initial"
    whileHover="hover"
    whileTap="click"
   >
    </motion.div>
  )
};
export default AnimatedShape;