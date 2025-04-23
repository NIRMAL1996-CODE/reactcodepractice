import {motion} from "framer-motion"
const Gesture = () => {
  return (
    <div>
      <motion.div className="box"
       whileHover={{scale:1.2, rotate:20}}
        transition={{type:"spring", stiffness:300}}>
      </motion.div>
      <motion.div className="box"
       whileTap={{scale:1.2, rotate:20, backgroundColor:"crimson"}}
        transition={{type:"spring", stiffness:300,duration:2}}>
      </motion.div>
      <motion.div className="box"
      //  drag="x"
      drag
       dragConstraints={{top:-30, bottom:30, right:30 ,left:-30}}
       //   dragConstraints set boundaries for box to drag.
        transition={{type:"spring", stiffness:300}}>
      </motion.div>
    </div>
  )
}

export default Gesture;