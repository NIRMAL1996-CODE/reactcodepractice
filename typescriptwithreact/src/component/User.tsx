
import {FC} from "react";
// create type
type UserShape= {name:string; age:number; isStudent:boolean};

// Create interface
// interface UserShape {name:string; age:number; isStudent:boolean};

//this is the other way to provide props to a component using FC
const User: FC<UserShape> =({name ,age, isStudent})=>{
  return(
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{isStudent}</h1>
    </div>
  )
};
export default User;