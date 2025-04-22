import {motion} from "framer-motion"
const LoadingSpinner = () => {
  let arr = [1,2,3]; 
  console.log(arr);
  return (
    <div className="flex justify-center items-center ">
    {arr.map((index)=>
         <motion.div key={index}
         className="w-4 h-4 bg-teal-500 rounded-full"
         animate={{ y: [0, -15, 0] }}
         transition={{
           duration: 0.6,
           ease: "easeInOut",
          repeat: Infinity,
            repeatDelay: index * 0.2,}}>
     
         </motion.div>
      
    )}
  </div>
  )
}

export default LoadingSpinner;
