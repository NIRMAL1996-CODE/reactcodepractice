//Imports useContext hook to access shared context values in this component.
import { FC, useContext } from "react";
// import our context box (MyContext) so we can get count, increment, decrement from it.
import { MyContext } from "./MyContext";
const Counter :FC= () => {

// use useContext(MyContext) to get values:count → number, increment, decrement → functions
  const{count, increment , decrement} =useContext(MyContext);
  //Displays the count and buttons that call increment and decrement functions from context.
  return (
    <div>
      <h1>Counter</h1>
      <p>Count:{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter;

// Create context → createContext() in MyContext.tsx

// Make provider → MyProvider shares count, increment, decrement

// Wrap App → Use <MyProvider> in main.tsx to give access

// Use context → In Counter.tsx, use useContext(MyContext) to get values

