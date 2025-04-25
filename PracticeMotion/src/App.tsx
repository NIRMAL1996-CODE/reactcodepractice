import BoxAnimation from "./components/BoxAnimation"
import CircleBounce from "./components/CircleBounce"
import RotationAnimation from "./components/RotationAnimation"
import SkewedTransition from "./components/SkewedTransition"

const App = () => {
  return (
    <div>
      <BoxAnimation/>
      <CircleBounce/>
      <RotationAnimation/>
      <SkewedTransition/>
    </div>
  )
}

export default App