import React from 'react'

const Logout = (props) => {
  return (
    <div>
      <button onClick={()=>props.setIsLogged(false)}>Logout</button>

    </div>
  )
}

export default Logout