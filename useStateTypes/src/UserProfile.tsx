import { useState } from "react"

interface UserInfo {name:string ; age:number; email:string;};
const UserProfile = () => {
  const [profile, setProfile] =useState<UserInfo>({name :"", age: 0, email: ""});

  const updateName =(name:string)=>{
    setProfile((prevProfile)=>({...prevProfile, name}));
  };
  const updateAge =(age:string)=>{
    setProfile((prevProfile)=>({...prevProfile, age: Number(age)}));
  };
  const updateEmail =(email:string)=>{
    setProfile((prevProfile)=>({...prevProfile, email}));
  };
  return (
    <div>
      
      <input type="text"
        name="inputUserName"
        value={profile.name} 
        onChange={(e)=>updateName(e.target.value)}
        placeholder="Enter Name"/>

      <input type="number"
        name="inputUserAge"
        value={profile.age > 0? profile.age : ""} 
        onChange={(e)=>updateAge(e.target.value)}
        placeholder="Enter Age"/>

      <input type="email"
        name="inputUserEmail"
        value={profile.email} 
        onChange={(e)=>updateEmail(e.target.value)}
        placeholder="Enter Email"/> 

      <h1>User Profile</h1>
      <p>NAME:{profile.name}</p>
      <p>AGE:{profile.age}</p>
      <p>EMAIL:{profile.email}</p>
      

    </div>
  )
}

export default UserProfile