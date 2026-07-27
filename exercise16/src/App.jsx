import Product from "./Product";
import cartContext from "./CartContext";
import CartSummary from "./CartSummary";
import { useState } from "react";

function App() {
  const [cart,setCart]=useState([]);
  return (
    <cartContext.Provider value={{cart,setCart}}>
      <Product />
      <CartSummary/>
    </cartContext.Provider>
  );
}

export default App;