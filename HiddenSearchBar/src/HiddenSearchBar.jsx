import { useState } from "react";

const HiddenSearchBar =()=>{
  const [showInput, setShowInput]= useState(false);
  
  const handleSearchBar=(e)=>{
    if (e.target.className === "container")
    setShowInput(false);
  };

return(
  <section
    className="container"
    onClick={handleSearchBar}>

      {showInput? (<input type="Search" placeholder="Search" />) 
      :( <button onClick={()=>{setShowInput(true)}}>Show Search Bar</button>)}
  </section>
)
};
export default HiddenSearchBar;