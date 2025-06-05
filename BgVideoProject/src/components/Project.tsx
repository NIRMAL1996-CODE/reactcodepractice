// import myVideo from './assets/myVideo.mp4';
import myVideo from '../assets/myVideo.mp4'; 

const Project = () => {
  return (
    <div>
      <div className='relative'>
        <video loop autoPlay muted className="w-full h-screen object-cover">
          <source src={myVideo} type="video/mp4" />
        </video>
        <div className='absolute inset-0 flex flex-col justify-center items-center text-white hover:'>
          <h1 className="text-5xl font-bold hover:text-green-800">Journey</h1>
          <a href="#" className="mt-4 px-6 py-2 bg-yellow-600 hover:bg-yellow-400 rounded">Explore</a>
        </div>
      </div>
    </div>
  )
};
export default Project;