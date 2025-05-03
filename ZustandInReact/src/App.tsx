// how to use data in other components

import Component from "./Component";
import { useCounter } from "./store";
const App = () => {
  const {count} =useCounter();
  return (  
    <div>
      <h1>count:{count}</h1>
      <Component/>
    </div>
  )
}
export default App;

//1st way to access data
// import { useCounter } from "./store";
// const App = () => {
//   //state.count: This is the count from the Zustand store.
//   // count: This is just the variable you created to hold the value of state.count from the store.(any name)
//   const count =useCounter((state)=>state.count);
//   return (
//     <div>
//       <h1>count:{count}</h1>
//     </div>
//   )
// }
// export default App;

//2nd way to access data (via destructuring).
// import { useCounter } from "./store";
// const App = () => {
//   const {count , increment, decrement} =useCounter((state)=>state);
//   return (
//     <div>
//        <h1>count:{count}</h1>
//        <button onClick={increment}>Increment</button>
//        <button onClick={decrement}>Decrement</button>
//     </div>
//   )
// };
// export default App;

 //3rd way to access data. No need the arrow function in hook, it still works
// import { useCounter } from "./store";
// const App = () => {
//   const {count , increment, decrement} =useCounter();
//   return (
//     <div>
//        <h1>count:{count}</h1>
//        <button onClick={increment}>Increment</button>
//        <button onClick={decrement}>Decrement</button>
//     </div>
//   )
// };
// export default App;