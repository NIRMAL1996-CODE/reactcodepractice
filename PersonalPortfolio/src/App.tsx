import Home from './components/Home';
import Sidebar from './components/Sidebar';
const App = () => {
  return (
    <div>
    <Sidebar/>
      <div className="ml-[200px]">
        <Home/>
      </div> 
    </div>
  )
};
export default App;