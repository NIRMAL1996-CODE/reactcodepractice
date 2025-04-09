// It's not working because use() only works in React Server Components, not in Client Components like Vite + React.It works with Next.js (App Router) or React’s experimental Server Components setup.
// import {use} from 'react'
// const fetchData= async()=>{
//  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//  return res.json();
// };
// const FetchTodo = () => {
//   const data =use(fetchData());
//   return (
//     <div>
//       <h1>Fetch Todo</h1>
//       <div>{data.title}</div>
//     </div>
//   )};
// export default FetchTodo;

import { useEffect, useState } from 'react';
type Todo = {
  title: string;
};
const FetchTodo = () => {
  const [data, setData] = useState<Todo| null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch Todo</h1>
      <div>{data?.title}</div>
    </div>
  );
};

export default FetchTodo;
