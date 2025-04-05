//Imports useReducer hook from React to manage state using a reducer function.
import { useReducer } from "react";

// Define types for state and actions.You can combine State and Action under one type, but typically, keeping them separate makes the code more readable and easier to manage.We use type because it handles union types and is more flexible for actions.
type State = {
  count: number;
};
type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

// Reducer function with types. The reducer function takes state and action as inputs, processes the action, and returns the updated state. It handles two actions: INCREMENT and DECREMENT.
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  //useReducer hook initializes state with { count: 0 } and returns state (current state) and dispatch (a function to send actions to the reducer).
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    //The JSX renders the current count and buttons that trigger dispatch to send INCREMENT or DECREMENT actions to the reducer.
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default Counter;