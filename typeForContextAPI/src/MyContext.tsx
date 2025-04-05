//We import "createContext" to make a new context. This context will help share data between components without props.We import:FC (FunctionComponent) → to define component, ReactNode → to accept children inside, useState → to manage the count.
import { createContext, FC, ReactNode, useState } from "react";

// We create a type rule (interface) to tell what data our context will share: count → number, increment, decrement → functions.
interface MyContextProps{
  count: number;
  increment:()=>void;
  decrement:()=>void;
}

//We create the context and give it some default values (just dummy, not real).This context will later hold real count, increment, decrement.
export const MyContext =createContext<MyContextProps>({
  count : 0,
  increment:()=>{},
  decrement:()=>{},
});
//Defines the expected prop type for MyProvider, allowing it to wrap and render child components.
interface MyProviderProps{
  children:ReactNode;
}

// FC means React function component that can get props like children.
// It helps TypeScript know: this is a component + it accepts children.
const MyProvider :FC<MyProviderProps>=({children})=>{
  //Creates a count state with default value 0, and a function setCount to update it.
  const [count, setCount] =useState(0);
  //Defines increment function to increase the count state by 1.
  const increment=()=>{
    setCount(count+1);
  }
  //Defines decrement function to decrease the count state by 1.
  const decrement=()=>{
    setCount(count-1);
  }
  return(
    //We use MyContext.Provider to share count, increment, decrement with all children inside.
    <MyContext.Provider value={{count, increment, decrement}}>{children}</MyContext.Provider>
  )
}
//Exports MyProvider component so it can be imported and used elsewhere.
export default MyProvider;