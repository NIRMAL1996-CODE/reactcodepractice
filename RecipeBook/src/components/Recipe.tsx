import { useState } from "react"

const Recipe = () => {
  const [name, setName] =useState("");
  const [ingredients, setIngredients] =useState("");
  const [instructions, setInstruction] =useState("");
  
  return (
    <>
      <div className="w-[500px] h-[380px] gap-1 flex flex-col items-center m-1 p-1 rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl text-green-700 font-bold m-1 p-1 mt-4">Recipe book</h1>

        <div className="flex flex-col justify-center gap-1">

        <input type="text"
         value={name}
         onChange={(e)=>setName(e.target.value)} 
         placeholder="Recipe Name" 
         className="cursor-pointer text-sm border border-gray-200 w-[450px] rounded p-2  placeholder:text-gray-400 placeholder:opacity-70"/>

        <input type="text"
          value={ingredients}
          onChange={(e)=>setIngredients(e.target.value)}
         placeholder="Ingredients(comma separated)" 
         className="cursor-pointer text-sm border border-gray-200 w-[450px] rounded p-2  placeholder:text-gray-400 placeholder:opacity-70"/>

        <input type="text"
          value={instructions}
          onChange={(e)=>setInstruction(e.target.value)}
         placeholder="Instructions" 
         className="cursor-pointer text-sm border border-gray-200 w-[450px] rounded p-2  placeholder:text-gray-400 placeholder:opacity-70"/>

        </div>

        <div className="w-[450px] flex justify-start">

        <button
         className="text-1xl rounded shadow-lg text-white m-1 p-1 bg-green-500 hover:bg-red-400 cursor-pointer">Add Recipe</button>

        </div>

        <div className="flex justify-end items-center m-1 p-1 w-[450px] h-[100px] rounded bg-green-100">

        <button className="rounded shadow-lg text-sm text-white m-1 mt-15 p-1 bg-blue-600 hover:bg-blue-400 cursor-pointer">Edit</button>

        <button className="rounded shadow-lg text-sm text-white m-1 mt-15 p-1 bg-red-600 hover:bg-red-400 cursor-pointer">Delete</button>

        </div>
      </div> 
    </>
  )
}

export default Recipe