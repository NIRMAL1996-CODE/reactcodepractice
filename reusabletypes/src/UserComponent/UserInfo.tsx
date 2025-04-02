import React from "react";
import { Info } from "../type";

type UserInfoProp ={user :Info;};

const UserInfo : React.FC<UserInfoProp>= ({user}) => {
  return (
    <div>
      <h1>User Information</h1>
      <p>ID: {user.id}</p>
      <p>NAME:{user.name}</p>
      <p>EMAIL:{user.email}</p>
    </div>
  )
}

export default UserInfo;