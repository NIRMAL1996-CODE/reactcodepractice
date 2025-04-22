// import Animate from "./components/Animate"
// import Drag from "./components/Drag"
// import Transition from "./components/transition"
// import KeyFrames from "./components/KeyFrames"
 import LoadingSpinner from "./components/LoadingSpinner"
import PulsingButton from "./components/PulsingButton"
const App = () => {
  return (
    <div className="border-1 flex flex-col justify-center items-center">
       {/* <Animate/>
      <Transition/>
      <Drag/> 
      <KeyFrames/> */}
      <PulsingButton/>
      <LoadingSpinner/>
    </div>
  )
};
export default App;