//useState is a function  from React. It helps us store(todos) and change(setTodo) data in our component (like a memory box).React will re-render (refresh) the UI when the box changes.
import { useState } from "react";

/*Interfaces are open to declaration merging; types are closed and can’t be redefined.Thats why we use interface here and most of the time for objects we use interfaces only.
interface can be modified or extended later, but can't with type.A TypeScript interface Todo to strictly type each todo item with id, task, and completed properties.*/
interface Todo{
  id: number;
  task:string;
  completed :boolean;
}

/*creating a React component called Todo.
  It’s like a mini-app or building block that shows and manages the todo list.
  a functional React component named Todo.*/
const Todo = () => {
  //Initializes a state variable todos as an array of Todo objects using useState.
  //Todo[] defines the state as an array of objects based on the Todo interface.
  const [todos, setTodo] =useState<Todo[]>([]);

/*a function addTodo that takes a task string as input to add a new todo.
  Arguments are always the values passed to a function’s parameters.*/
const addnewTodo=(task:string)=>{

 /*   we use Todo without [] to show it's a single todo item. To create a valid object from an interface, you must define all required key-value pairs using {}, but creating object dynamically then, Start with a default empty object, then update its fields dynamically based on user input.
   const [todo, setTodo] = useState<Todo>({
     id: 0,
     task: "",
     completed: false,
   }); */
  const newTodo:Todo ={
    //Generates a unique ID by adding 1 to the current length of the todos array.
    id:  todos.length+1,
    //Assigns the task value received from the function parameter to the new todo object. 
    task,
    //Marks the new todo as incomplete by default.
    completed:false,
  }
  //Updates state by appending newTodo to the existing todos array.
  setTodo(prevTodos=>[...prevTodos , newTodo])
};
//We are starting to show (return) what will be seen on the screen — the UI. Starts the JSX code that tells React what to display on the screen.
  return (
    //Opens a JSX <div> element to wrap and structure the component’s content.
    <div>
        <h1>To DO List</h1>
        {/* Adds a button that calls addTodo with a default string when clicked. */}
        <button onClick={()=>addnewTodo("new todo")}>Add todo</button>
        {/* Begins an unordered list (<ul>) to display todo items. */}
        <ul>
          {/* Uses .map() to loop through each todo and render it in JSX.Render means converting data into visible UI elements. */}
           {todos.map(todo=>
          //  Gives each list item a unique ID to help React update it.Displays task text and adds "(completed)" if true.
             <li key={todo.id }>{todo.task} {todo.completed ? "(completed)" : "" } </li>
           )}
        </ul>
    </div>
  )
}

export default Todo;