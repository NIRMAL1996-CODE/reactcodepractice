import {motion, useScroll, useTransform} from "framer-motion"

const UseTransformScroll = () => {
  const {scrollY} =useScroll();
  const scale =useTransform(scrollY ,[0,300], [1,1.5]);
  const opacity= useTransform(scrollY, [0,300],[1,0]);
  return (
    <div className="h-screen flex  justify-center items-center">
    <motion.div
    className="bg-blue-400 w-32 h-32 rounded-lg shadow-lg"
    style={{opacity, scale}}></motion.div>
    <div className="w-full h-[180vh]"></div>
    </div>
  )
};
export default UseTransformScroll;