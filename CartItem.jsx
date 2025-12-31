import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeItem } from "./CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // 🔹 Calculate total cart amount
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // 🔹 Increase quantity
  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  // 🔹 Decrease quantity
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  // 🔹 Remove item
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                width="100"
                height="100"
              />

              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Unit Price: ₹{item.price}</p>
                <p>
                  Total Price: ₹{item.price * item.quantity}
                </p>

                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <h3>Total Cart Amount: ₹{calculateTotalAmount()}</h3>

          <div className="cart-actions">
            <button onClick={() => alert("Coming Soon")}>
              Checkout
            </button>

            <Link to="/products">
              <button>Continue Shopping</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;
