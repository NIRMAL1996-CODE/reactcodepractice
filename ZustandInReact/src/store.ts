//check notes in readme file
import { create } from "zustand";

type CounterStore ={
  count:number;        
  increment: ()=>void; 
  decrement: ()=>void; 
};
 //zustand always return a custom hook, name would be anything.
export const useCounter = create<CounterStore>((set)=>({  // <- start the store If you don't provide set inside the create() function, you won't be able to use it for updating the state inside actions.
  
  count: 0,  //Initial value of the count state is 0.this is the state
  increment : ()=> set(state=>({count:state.count + 1})), 
  decrement : ()=> set(state=>({count:state.count - 1}))
}));

