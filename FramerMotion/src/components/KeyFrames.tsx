import { motion} from "framer-motion";
const KeyFrames = () => {
  return (
    <div>
      <motion.div className="box"
      //  animate={{x:[0,1000,1000,0,0],
      //             y:[0,0,400,400,0]
      //  }}
      // in animate we create a square path 

      // animate={{scale:[1,2,2,3,2,2,1]}}
     // zoom in zoom out

     //rotate
    //  animate={{rotate:[90,180,90]}}

    //Border-radius
    // animate={{borderRadius: ["0px", "50px", "0px"]}}
     animate={{borderRadius: ["0%", "50%", "0%"]}}

    transition={{repeat:Infinity, duration:8}} ></motion.div>
    </div>
  )
}

export default KeyFrames;