import AdminInfo from "./AdminComponent/AdminInfo";
import UserInfo from "./UserComponent/UserInfo";
import { Info, AdminInfoList } from "./type";

const App = () => {

  const user : Info={
    id: 1,
    name: "Alex",
    email: "Alex@gmail.com" 
  };

  const admin : AdminInfoList ={
    id: 2,
    name: "Joe",
    email: "Joe@gmail.com",
    role: "Admin",
    lastLogin: new Date(),

  };
  return (
    <div>
      <UserInfo user= {user} />
      <AdminInfo admin= {admin}/>
      
    </div>
  )
};

export default App;