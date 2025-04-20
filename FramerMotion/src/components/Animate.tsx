import {motion} from "framer-motion";
const Animate = () => {
  return (
    <div>
      <h1>Animate</h1>
      {/* //<motion.div className="box" animate={{x:100}}/>
// moves the box 100px to the right (left to right)

//<motion.div className="box" animate={{y:100}}/>
// moves the box 100px down (top to bottom)

//<motion.div className="box" animate={{rotateX:100}}/>
// rotates box on X-axis (3D flip forward/backward)

//<motion.div className="box" animate={{rotateY:100}}/>
// rotates box on Y-axis (3D flip left/right)

//<motion.div className="box" animate={{rotate:20 }}/>
// rotates the box 20° flat (like spinning paper)

//<motion.div className="box" animate={{scaleY:20 }}/>
// makes box 20x taller (stretch up-down)

//<motion.div className="box" animate={{scaleX:20 }}/>
// makes box 20x wider (stretch side-to-side)

//<motion.div className="box" animate={{scale:2 }}/>
// makes box 2x bigger (both height and width)*/}

<motion.div className="box bg-amber-950" animate={{skewX:10 }}/>
{/* // tilts box 20° sideways (X-axis slant)  */}
    </div>
  )
}

export default Animate;