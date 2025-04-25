import {motion, useMotionValue, useSpring} from "framer-motion"
import { ChangeEvent } from "react";
const RangeSlider = () => {
  const scale =useMotionValue(1);
  //useMotionValue(1) → Creates a dynamic, animatable value starting at 1.
  const spring =useSpring(scale);
  //useSpring(scale, { stiffness: 100 }) → Smoothly animates scale using spring physics (bouncy effect).
  const changeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
  scale.set(parseFloat(e.target.value));
  };
  return (
    <div>
      <motion.div className="box" style={{scale:spring}}></motion.div>
          <input type="range"
          min={0.5}
          max={5}
          step={0.01}
          defaultValue={1}
          onChange={changeHandler} />
    </div>
  )
}

export default RangeSlider;