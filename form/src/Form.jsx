import { useForm } from "react-hook-form";

const Form = () => {
  const { 
     register,
     handleSubmit,
     formState:{errors, isSubmitting},
     } = useForm();

 const  onSubmit = async (data) => {
  await new Promise((resolve)=>
    setTimeout(resolve,5000));
    console.log("Submitting the form",data);
  };

  return (
    <div>
      <h1>Youtube Form</h1>

      <div className="main">
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <label>UserName:</label>
          <input type="text" placeholder="UserName" {...register("username", {
            required: true,
            minLength: {value:3 , message: "min length atleast 3"},
            maxLength: {value: 6, message: "max length atleast 6"}
          })} />
          {errors.username && <p>{errors.username.message}</p>}

          <label>LastName:</label>
          <input type="text" placeholder="LastName" {...register("lastname", {
            required: true,
            minLength: {value:3 , message: "min length atleast 3"},
            maxLength: {value: 6, message: "max length atleast 6"}
          })} />
          {errors.lastname && <p>{errors.lastname.message}</p>}

          <label>Channel:</label>
          <input type="text" placeholder="Channel Name" {...register("channel", {
            required: true,
            minLength: {value:3 , message: "min length atleast 3"},
            maxLength: {value: 6, message: "max length atleast 6"}
          })} />
          {errors.channel && <p>{errors.channel.message}</p>}

          <input className="inputbtn" type="submit" disabled={isSubmitting} value={isSubmitting ? "submitting" : "submit"} />
        </form>
      </div>
    </div>
  );
};

export default Form;
