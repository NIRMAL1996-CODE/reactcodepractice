import React from "react";
import { AdminInfoList } from "../type";
type AdminInfoProp = {admin:AdminInfoList};
const AdminInfo: React.FC<AdminInfoProp> = ({admin}) => {
  return (
    <div>
      <h1>Admin Information</h1>
      <p>ID:{admin.id}</p>
      <p>NAME:{admin.name}</p>
      <p>EMAIL:{admin.email}</p>
      <p>ROLE:{admin.role}</p>
      <p>LAST  LOGIN:{admin.lastLogin.toLocaleString()}</p>
    </div>
  )
};

export default AdminInfo;