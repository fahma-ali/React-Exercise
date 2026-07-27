import { useContext } from "react";
import CartContext from "./CartContext";

const CartSummary = () => {
  const { cart,setCart } = useContext(CartContext);
   const removeItem =(id)=>{
  setCart(cart.filter((item)=>item.id !==id))
 }
  return (
    <div>
      <h1>Cart Summary</h1>

      <h3>Total Items: {cart.length}</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span> - <span>{item.price}</span>
            <span>
        
              <button onClick={() => removeItem(item.id)}> Remove</button>
            </span>
          </li>
        ))}
      </ul>

      <ul></ul>
    </div>
  );
};

export default CartSummary;
