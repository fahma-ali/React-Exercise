import { useState } from "react";
const ShoppingCart = () => {
  const [listCart, setListCart] = useState([]);
  const [cartInput, setCartInput] = useState({ name: "", price: "" });
  const handleAddCart = () => {
    if (cartInput.name.trim() !== "" && cartInput.price.trim() !== "") {
      const newShoppingCart = {
        id: crypto.randomUUID(),
        name: cartInput.name,
        price: cartInput.price,
        qty: 1,
      };
        setListCart([...listCart, newShoppingCart]);
    setCartInput({ name: "", price: "" });
    }
  
  };
  const handleChange = (event) => {
    setCartInput({ ...cartInput, [event.target.name]: event.target.value });
  };
  const handleAddQty = (id) => {
    setListCart(
      listCart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };
  const handleDecreaseQty = (id) => {
    setListCart(
      listCart.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item,
      ),
    );
  };
  const handleRemove = (id) => {
    setListCart(listCart.filter((item) => item.id !== id));
  };
  const TotalPrice = listCart.reduce(
    (total, item) => total + Number(item.price) * item.qty,
    0,
  );
  return (
    <div>
      <h1>Simple Shopping Cart</h1>
      <div>
        <h2>Add Product</h2>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={cartInput.name}
          placeholder="Enter Product"
        />
        <input
          type="number"
          name="price"
          id="price"
          onChange={handleChange}
          value={cartInput.price}
          placeholder="Enter Product Price"
        />
        <button onClick={handleAddCart}>Add To Cart</button>
        {listCart.length === 0 ? (
          <h6>this cart is empty</h6>
        ) : (
          <>
            <h4>Product In Cart</h4>
            <ul>
              {listCart.map((item) => (
                <li key={item.id}>
                  {item.name}-${item.price}
                  <p>
                    Quantity:{" "}
                    <button onClick={() => handleDecreaseQty(item.id)}>
                      -
                    </button>
                    {item.qty}
                    <button onClick={() => handleAddQty(item.id)}>+</button>
                    <button onClick={() => handleRemove(item.id)}>
                      Remove
                    </button>
                  </p>
                </li>
              ))}
            </ul>
            <h1>Total Price :{TotalPrice}</h1>
          </>
        )}
      </div>
    </div>
  );
};
export default ShoppingCart;
