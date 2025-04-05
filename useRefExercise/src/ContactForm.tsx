import { useState } from "react";
interface ContactFormState {
  name:string;
  email:string;
};

const ContactForm = () => {
  const [FormData ,setFormData] =useState<ContactFormState>({
    name:"",
    email:"",
  });

  //(e) = event object (it carries input details). e: React.ChangeEvent<HTMLInputElement> = tells TypeScript this event is from an <input>
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    //name becomes "name" or "email" (from the input's name attribute).value becomes the text user typed. If typing in name input → name = "name", value = "Nirmal" ,If typing in email input → name = "email", value = "abc@email.com"
    const{name , value}= e.target;

    //Use push for simple array updates,Use ...spreadOperator in React for safe updates.This line updates one field in the form while keeping the rest of the old data safe.
    //Use arrow when updating part of state. No arrow if replacing entire state
    setFormData(prevState =>({...prevState,[name]:value}))
  }; 

 const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
  //Stops page reload on form submit.
 e.preventDefault()
 console.log("Form Submitted",FormData);
 }
  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
           Name:
          <input type="text" name="name" onChange={handleChange} value={FormData.name}/>
          </label>
        </div>
        <br/>
        <div>
          <label>
            Email:
            <input type="email" name="email" onChange={handleChange} value={FormData.email}/>
          </label>
        </div>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

export default ContactForm;