import Admin from "./admincomponent/admin";
import User from "./usercomponent/user";

const App = () => {
  return (
    <div>
      <User userName ="Alex" age={20} location= {["Earth", "USA"]} />
      <Admin userName ="John" age={29} location= {["Earth", "UAE"]} admin="yes"/>
    </div>
  )
}

export default App;