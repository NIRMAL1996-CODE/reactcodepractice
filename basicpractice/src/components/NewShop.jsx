import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import newProduct from '../data/newProduct'
const NewShop = () => {
const { cart, addToCart } = useContext(ShopContext)
  return (
  <div>
      {newProduct.map((item) =>(
    <div key={item.id}>
    <h1>{item.name}</h1>
    <h3>${item.price}</h3>
    <button onClick={() => addToCart(item)}>Add To Cart</button>
  </div>
))}
   
   <div>
     {cart.map((item)=>(
      <div key={item.id}>
        <h1>cart: {item.name}</h1>
      </div>
    ))}
   </div>

    </div>
  )
}

export default NewShop