import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Youtube Form</h1>

      <div className="main">
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <label>UserName</label>
          <input type="text" {...register("username")} />

          <label>Email</label>
          <input type="email" {...register("email")} />

          <label>Channel</label>
          <input type="text" {...register("channel")} />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
