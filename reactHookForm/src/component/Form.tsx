import { SubmitHandler, useForm } from "react-hook-form";

interface FormData{
  name: string;
  email: string;
  password:string;
}
const Form = () => {
  {/*register is used to connect input fields to the form.
    handlesubmit is a function to handle submissions and errors contains validation errors for the form 
    1. register – required (to connect input)
    2. handleSubmit – required (to submit form)
    3. errors – optional (only if you want to show error)
    4. isSubmitting – optional (only if you want to show loading)
    5. <FormData> – optional but good if using TypeScript*/}

  const {register,handleSubmit,formState: {errors ,isSubmitting}} = useForm<FormData>();
 
  //If all required fields are filled correctly, then handleSubmit(onSubmit) runs your function.If something is missing or wrong, it shows error and stops.
  //SubmitHandler only checks if the submitted data matches the FormData type.It helps with type safety, not validation.
    const SubmitForm: SubmitHandler<FormData> =(data)=>{
      console.log(data);
    }
  return (
     <div>
     <h1>Hook Form in React</h1>
     {/*handleSubmit() runs validation rules before calling your submit function.
     onSubmit here is the HTML event that runs when you click the submit button.
      1.You click submit → onSubmit event runs
      2.handleSubmit checks all inputs (validation)
      3.If all good → it runs SubmitForm()
      4.If any error → it stops and shows errors*/}
     <form onSubmit={handleSubmit(SubmitForm)}>
       <div>
        <label htmlFor="name">Name : </label>
        <input type="text" id="name" placeholder="Name"
        //register is a function from useForm() that connects inputs to the form system and handles validation rules.This tells the form:“Track this input called name.”
         {...register("name" , {required: "Name is required"})} />
         
       {/*When you use required: "Custom message" in register, React Hook Form automatically uses that       message in errors.So, if there's a problem with the field (like it's missing), React Hook Form will automatically place the custom message you gave into errors.name.message. */}
        {errors.name && <div style={{color: "red"}}>{errors.name.message}</div>}
       </div> <br />

       <div>
        <label htmlFor="email">Email : </label>
        <input type="email" id="email" placeholder="Email"
        {...register("email" ,
            {required: "Email is required" ,
             pattern:{ value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                       message: "Invalid Email Address"}})
        }/>

        {errors.email && <div style={{color: "red"}}> {errors.email.message}</div>}
       </div><br />

       <div>
        <label htmlFor="password">Password : </label>
        <input type="password" id="password" placeholder="Password"
         {...register("password" , 
          {
              minLength:{
                value:8,
                message: "Password must be atleast 8 character"
              }
           })} />

        {errors.password && <div style={{color: "red"}}> {errors.password.message}</div>}
       </div><br />
       {/* When the user clicks Submit, isSubmitting becomes true (form starts submitting), so the button will show "Loading...".After the form finishes submitting, isSubmitting becomes false again, and the button goes back to "Submit".*/}
       <button disabled={isSubmitting}>{isSubmitting ? "Loading...": "Submit"}</button>
     </form>
     </div>
  ) 
}

export default Form;