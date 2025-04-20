import {motion} from "framer-motion";
const Transition = () => {
  return (
    <div>
      <h1>Transition</h1>
      {/* <motion.div className="box" animate={{x:1000, rotate:180}} transition={{delay:0.5, duration:3}}/>
// tilts box 60° both sideways and up-down (X and Y)
<motion.div className="box" animate={{x:1000, rotate:360}} transition={{delay:1, duration:3}}/>
//moves 1000px right & rotates 360° after 1s delay in 3s time */}
{/* <motion.h1 className="font-bold text-5xl text-blue-400 " initial={{x:0}} animate={{x:'100vw'}} transition={{duration:4 ,repeat:Infinity, ease:"anticipate"}}>Hello World</motion.h1> */}
 <motion.div className="box bg-gray-700"
 animate={{
    x: [0, 800, 800, 0, 0],  // right → stay → left → back
    y: [0, 0, 300, 300, 0], // stay → down → stay → up → back
    rotate:[0,360,0,-360,0] // rotates full clockwise → back → full counter-clockwise → back
  }}
 transition={{
  delay:1, duration:5, repeat:Infinity
  }}></motion.div> 
    </div>
  )
}

export default Transition;