import { FormEvent, useRef, useState } from "react";
type FormData= {
  name: string;
  email:string;
  password:string;
};
const Form = () => {
  const [submittedData, setSubmittedData] =useState<FormData>({
    name:"",
    email:"",
    password:""
  });

  const name =useRef<HTMLInputElement>(null);
  const email =useRef<HTMLInputElement>(null);
  const password= useRef<HTMLInputElement>(null);
  
  const handleSubmit =(event:FormEvent<HTMLFormElement>)=>{
   event.preventDefault()
   const nameValue =name.current!.value;
   const emailValue =email.current!.value;
   const passwordValue =password.current!.value;
   setSubmittedData({
    name : nameValue,
    email: emailValue,
    password:passwordValue,
   });
   console.log(nameValue);
   console.log(emailValue);
   console.log(passwordValue);
 
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Your Name" ref={name}/>
      <input type="email" placeholder="Enter your Email" ref={email}/>
      <input type="password" placeholder="Enter your Password" ref={password}/>
      <button type="submit">Submit</button>

      <section>
        <h1>Name:{submittedData.name}</h1>
        <h1>Email:{submittedData.email}</h1>
        <h1>Password:{submittedData.password}</h1>
      </section>
    </form>
  );
};

export default Form;