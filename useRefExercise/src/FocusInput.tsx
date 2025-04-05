import { useRef} from "react";

const FocusInput = () => {
  // const [inputVariable, setInputVariable]=useState("");
  const inputval = useRef<HTMLInputElement>(null);
  const handleClick =()=>{
    inputval.current?.focus();
  }
  return (
    <div>
      <h1>FocusInput using useRef</h1>
      <input type="text" placeholder="Enter name" ref={inputval}/>
      <br/>
      <button onClick={handleClick}>Click</button>
    </div>
  )
};

export default FocusInput;