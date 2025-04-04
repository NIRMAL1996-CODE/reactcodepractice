import { useState } from "react";

const UseState = () => {
  const [count, setcount] =useState<number>(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>{setcount(count+1)}}>Increment</button>
    </div>
  )
}

export default UseState;