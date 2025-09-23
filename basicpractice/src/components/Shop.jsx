
import {  useEffect, useState } from "react";
import products from "../data/product.js";
import "./Shop.css";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const handleClick=(product)=>{
    setCart([...cart, product])
    // console.log(cart);
  }
  useEffect(() => {
  console.log(cart);
}, [cart]);

const remove=(productid)=>{
  setCart(cart.filter(item => item.id !== productid))
}
  return (
    <div className="container">
    <div className="product-div">
      {products.map((item,i)=>{
        return <div className="main-div" key={i}>
         <h1>{item.name}</h1>
         <h4>${item.price}</h4>
         <img src={item.image} alt="image" />
         <button onClick={()=>{handleClick(item)}}>Add To Cart</button>
        </div>
      })}
    </div>
    <div className="cart">
      <h1>CART:</h1>
      {cart.map((items)=>(
        <div className="remove-div">
        <h3>{items.name}</h3>
        <button onClick={()=>{remove(items.id)}}>remove</button>
        </div>
      ))}
    </div>

    <div>
      
    </div>
    
    </div>
  )
}
export default Shop;