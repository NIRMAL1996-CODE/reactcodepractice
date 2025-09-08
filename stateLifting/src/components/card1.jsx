import React from 'react'

const Card1= (props) => {
  return (
    <div className='flex flex-col justify-center items-center text-2xl h-screen m-20'>
      <input className='border-2' type="text" onChange={(e)=>props.setName(e.target.value)} />
      <h1>Changed Name in {props.title}-: {props.name}</h1>
    </div>
  )
}

export default Card1