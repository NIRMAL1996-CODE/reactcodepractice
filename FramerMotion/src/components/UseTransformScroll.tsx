import {motion, useScroll, useTransform} from "framer-motion"

const UseTransformScroll = () => {
  const {scrollY} =useScroll();
  //You can animate scroll without useScroll(), but it won't be as dynamic or tied to the actual scroll position.scale is not just a regular variable.It's holding the transformed value based on the scroll position.It's telling Framer Motion: "Use this to control the scale (size)."React and Framer Motion don't guess your mind, they just follow the property you use (like scale or opacity)."When scrollY is 0 → scale = 1" (normal size)"When scrollY is 300 → scale = 1.5" (50% bigger).
  const scale =useTransform(scrollY ,[0,300], [1,1.5]);
  const opacity= useTransform(scrollY, [0,300],[1,0]);
  return (
    <div className="h-screen flex  justify-center items-center">
      {/* h-screen means:Set the height of an element to 100% of the screen height. */}
    <motion.div
    className="bg-blue-400 w-32 h-32 rounded-lg shadow-lg"
    style={{opacity, scale}}></motion.div>
    {/* By putting opacity and scale inside style={{}}, you're telling React to apply those changing values to the element's style. */}
    <div className="w-full h-[180vh]"></div>
    {/* if you want an element that is full width and bigger than the screen in height, use both of them together! */}
    </div>
  )
};
export default UseTransformScroll;