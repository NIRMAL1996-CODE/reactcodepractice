import {motion, spring} from "framer-motion"

const Animatedcard = () => {
return (
  <div>
    <motion.div className="bg-gray-300 rounded-[20px] overflow-hidden p-4 m-4"
    initial={{scale:1, rotate:0}}
     whileHover={{scale:1.05, rotate:3}}
     whileTap={{scale:0.95}}
     drag
     dragConstraints={{top:-50,left:-50, right:50, bottom:50}}
     dragElastic={0.2}
     transition={{type:spring, stiffness:300}}> 
     <div>
        <img className="w-[400px] rounded" src="https://images.unsplash.com/photo-1743885143645-b28cdaacf8b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" alt="Street" /></div>
       <div className="flex flex-col justify-center items-center gap-2 p-2"> 
        <p className="font-bold font-serif text-2xl text-black">Conversation with Coffee.</p>
        <button className="border-0 bg-gray-500 cursor-pointer text-black text-2xl hover:bg-gray-400 font-serif rounded w-[200px] p-2 m-2">Learn More</button>
     </div>
    </motion.div>
  </div>
  )
};
export default Animatedcard;