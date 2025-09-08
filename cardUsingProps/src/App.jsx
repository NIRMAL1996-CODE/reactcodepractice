import React from 'react'
import UserCard from './components/userCard';
import image1 from './assets/image1.jpeg';
import image2 from './assets/image2.jpeg';
import image3 from './assets/image3.jpeg';
import image4 from './assets/image4.jpeg';


const App = () => {
  return (
  
    <div className='flex flex-row justify-center items-center h-screen'>       <UserCard name="Jordan" description="Hello Hello" image={image1} />
      <UserCard name="Mark" description="Hello Hello" image={image2} />
      <UserCard name="John" description="Hello Hello" image={image3} />
      <UserCard name="Alex" description="Hello Hello" image={image4} />
    </div>
  
  )
}

export default App;