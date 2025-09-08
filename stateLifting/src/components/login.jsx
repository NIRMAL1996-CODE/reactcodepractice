import React from 'react'

const Login = (props) => {
  return (
    <div>
      <button onClick={()=>props.setIsLogged(true)}>Login</button>
    </div>
  )
}

export default Login