import {motion} from "framer-motion"

const ImageGallery = () => {
  return (
    <div>
      <motion.div className="flex">
        <motion.div className="group relative flex justify-center items-center">
         <motion.img className="image" 
          whileHover={{scale:1.2,opacity:0.6}}
          src="https://images.unsplash.com/photo-1743710426934-89887ca897d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D" alt="galaxy" />
          <p className="absolute opacity-0 group-hover:opacity-100 transition duration-300 text-2xl text-white">hello</p>
          </motion.div>
        
          <motion.div className="group relative flex justify-center items-center">
          <motion.img className="image"
           whileHover={{scale:1.2,opacity:0.6}}
           src="https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="mountains" />
          <p className="absolute opacity-0 group-hover:opacity-100 transition duration-300 text-2xl text-white">hello</p>
          </motion.div>

          <motion.div className="group relative flex justify-center items-center">
          <motion.img className="image"
           whileHover={{scale:1.2,opacity:0.6}}
           src="https://images.unsplash.com/photo-1745173036546-c56551790fb8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D" alt="street" />
          <p className="absolute opacity-0 group-hover:opacity-100 transition duration-300 text-2xl text-white">hello</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ImageGallery