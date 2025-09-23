import React, { Children, createContext, useState } from 'react'
import NewShop from '../components/NewShop';
//Contextek: global box jisme tum data aur functions rakho aur sab components use kar saken.
// Provider wo box ka cover hai jo data sabko deta hai.
// Tum cart aur add/remove functions Provider ke andar rakhte ho.
// Jo components Provider ke andar wrap hote hain, wo box ko access kar sakte hain.
// Consumer = component jo box me se data kholta hai.
// React me ye useContext hook se hota hai.
// value = wo cheezein jo tum share karna chahti ho sab components ke saath.
export const ShopContext= createContext();

const ShopContextProvider = ({children}) => {
  const [cart, setCart]= useState([]);
  const addToCart =(product)=>{
    setCart([...cart,product])
  }
  return (
  <ShopContext.Provider value={{cart, addToCart}}>
    {children}
  </ShopContext.Provider>
  )
}
export default ShopContextProvider