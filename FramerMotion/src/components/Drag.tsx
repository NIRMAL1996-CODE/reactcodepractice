import {motion} from "framer-motion";
const Drag = () => {
  return (
    <div>
      <motion.div className="box bg-amber-500"
       drag
       whileDrag={{scale:1}} 
      /* scale increases or decreases the size of the element (like zoom in/out)*/
      dragConstraints={{
        left:0,
        top:50,
        right:1000,
        bottom:0,
        
      }}
      dragDirectionLock={true}// use curly braces for boolean: dragDirectionLock={true}
      />
      </div>
      // drag                // makes the element draggable
      // drag="x"            // allows dragging only horizontally
      // drag="y"            // allows dragging only vertically
      // dragConstraints={{ left: 0, right: 100 }}  // limits drag area
      // dragElastic={0.5}   // controls drag stretch (0 = stiff, 1 = bouncy)
      // dragMomentum={false} // stops element from moving after drag
      // dragDirectionLock={true} // locks to x or y after drag starts
  )
}

export default Drag;