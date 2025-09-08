import React from 'react'

const UserCard = (props) => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='flex flex-col justify-center items-center hover:scale-120 hover:shadow-2xl h-[350px] w-[300px] m-[10px] p-[10px] gap-4 bg-gradient-to-b from-white to-blue-900 rounded-2xl'>
        <h1 className='text-2xl w-[200px] text-center bg-gray-300 shadow-xl rounded p-[5px] font-bold'>{props.name}</h1>
        <img className="hover:brightness-110 h-[250px] w-[250px] object-cover rounded-2xl" src={props.image}/>
        <p className='text-xl text-center w-[200px] font-semibold bg-amber-200 shadow-xl rounded p-[5px]'>{props.description}</p>
      </div>
    </div>
  )
}

export default UserCard;