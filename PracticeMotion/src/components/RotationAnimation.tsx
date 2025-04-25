import {motion} from "framer-motion"

const RotationAnimation = () => {
  return (
      <motion.img 
       animate={{rotate:360}}
       transition={{repeat:Infinity, duration:3,ease:"linear"}}
       //linear means the animation progresses at a constant speed from start to finish. There's no slow start or slow end — it moves evenly throughout.
      src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnRvb258ZW58MHx8MHx8fDA%3D" alt="image"
      className="w-[200px] h-[200px] m-2 shadow-lg rounded-full" />

  )
}
export default RotationAnimation;