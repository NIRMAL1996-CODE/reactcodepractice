import {useForm} from "react-hook-form";
import  z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  firstname: z.string().min(3,"Minimum length should be 3").max(10,"Maximum length should be 10"),
  secondname: z.string().min(3,"Minimum length should be 3").max(10,"Maximum length should be 10"),
  age: z.coerce.number().min(10,"Minimum length should be 1").max(80,"Maximum length should be 2"),
});

const App = () => {

 const {register, handleSubmit, formState: { errors },} = useForm({
  resolver: zodResolver(formSchema)
 });

 const onSubmit= (data) => console.log(data);
 console.log("render")

  return (
    <div className="main">
     <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstname">FirstName:</label>
      <input id="firstname" {...register("firstname")} />
      {errors.firstname && <span>{errors.firstname.message}</span>}

      <label htmlFor="secondname">SecondName:</label>
      <input id="secondname" {...register("secondname")} />
      {errors.secondname && <span>{errors.secondname.message}</span>}

      <label htmlFor="age">Age:</label>
      <input id="age" {...register("age")} />
      {errors.age && <span>{errors.age.message}</span>}
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App;