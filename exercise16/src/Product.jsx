import React from 'react'
import CartContext from './CartContext'
import { useContext } from 'react'
const Product = () => {
  const {cart,setCart}=useContext(CartContext)
 const products = [
 {
   id: 1,
   name: "Widget",
   price: 19.99
 },
 {
   id: 2,
   name: "Gadget",
   price: 29.99
 }
]
 const addCart=(product)=>{
  setCart([...cart,product])

 }

  return (
    <div>
        {
            products.map((item)=>(
                <div key={item.id}>
                      <span>{item.name}</span><br></br>
                <span>{item.price}</span><br></br>
                      <button onClick={()=>addCart(item)}>Add To Cart</button>

                    </div>
              
            ))
        }
    </div>
  )
}

export default Product