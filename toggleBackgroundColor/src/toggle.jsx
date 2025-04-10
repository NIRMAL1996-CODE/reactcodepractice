import { useState } from "react";
const Toggle = () => {
  const [backgroundcolor,setBackGroundcolor] =useState("white");
  const [textColor, setTextColor] =useState("black");
 
 const handleclick=()=>{
    setBackGroundcolor(backgroundcolor=== "white"? "skyblue" : "lightgreen");
    setTextColor(textColor==="black"? "green": "blue")
  };
  return (
    <div id="toggle" style={{ backgroundColor:backgroundcolor, color: textColor }}>
      <h1>ToggleBackgroundColor</h1>
       <button id="changebutton" onClick={handleclick}>Change BackGround Color</button>
    </div>
  )
}

export default Toggle;

