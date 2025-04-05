import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
//We import MyProvider so we can wrap our <App /> and give it access to count, increment, decrement.
import MyProvider from "./MyContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
{/* children = anything between <MyProvider>...</MyProvider> 
Wraps <App /> with <MyProvider> to give access to context values using React Context API.*/}
  <MyProvider>
    <App />
  </MyProvider>
  </StrictMode>,
)
