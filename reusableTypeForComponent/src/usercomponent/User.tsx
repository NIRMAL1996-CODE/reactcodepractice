
export type Info ={userName:string; age:number; location:string[];}

const User = ({userName, age, location}:Info) => {
  return (
    <div>
      <h1>User</h1>
      <ul>
        <li>{userName}</li>
        <li>{age}</li>
        <li>{JSON.stringify(location)}</li>
      </ul>
    </div>
  )
}

export default User;