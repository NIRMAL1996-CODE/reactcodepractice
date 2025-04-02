import Button from "./component/Button";
import User from "./component/User"
const App = () => {
  return (
    <div>
      <User name="Alex" age= {20} isStudent = {true}/>
      <Button label="click" onClick={()=>console.log("clicked")} disabled ={false}/>
    </div>
  )
}

export default App;