
const Button = ({label , onClick, disabled}
  :{label:string; onClick:()=>void; disabled:boolean}) =>{
    
  return (
    <div>
      <h1>Button</h1>
      <button onClick={onClick} disabled= {disabled}>
        {label}
        
       
      </button>
    </div>
  )
};

export default Button;