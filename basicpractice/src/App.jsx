import React from 'react'
import Shop from './components/shop'
import NewShop from './components/NewShop'
import ShopContextProvider, { ShopContext } from './context/ShopContext'

const App = () => {
  return (
    <div>
      {/* <Shop/> */}
      <ShopContextProvider>
        <NewShop/>
      </ShopContextProvider>
      
    </div>
  )
}

export default App