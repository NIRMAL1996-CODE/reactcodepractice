import React, { useState } from 'react'
import Card1 from './components/card1'
import Login from './components/login';
import Logout from './components/logout';

const App = () => {
  // const[name, setName]= useState('');
  const [islogged, setIsLogged]= useState('');
  return (
    <div className='flex flex-row justify-center items-center text-2xl h-screen m-20'>
      {/* <Card1 title="card1" name={name} setName={setName}/>
      <Card1 title="card2" name={name} setName={setName}/> */}
      {islogged ?<Logout setIsLogged= {setIsLogged}/> : <Login setIsLogged= {setIsLogged}/>}
      
      
      
    </div>
  )
}

export default App