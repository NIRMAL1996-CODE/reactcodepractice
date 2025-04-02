import { type Info } from "../usercomponent/user";
type AdminInfo = Info & {admin:string;}
const Admin = ({userName, age, location, admin}:AdminInfo) => {
  return (
    <div>
      <h1>Admin</h1>
      <ul>
        <li>{userName}</li>
        <li>{age}</li>
        <li>{JSON.stringify(location)}</li>
        <li>{admin}</li>
      </ul>
    </div>
  )
};

export default Admin;