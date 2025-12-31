import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "./CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // ✅ Calculate total cart amount
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              {/* Thumbnail */}
              <img
                src={item.img}
                alt={item.name}
                className="cart-item-image"
              />

              {/* Item Details */}
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Unit Price: ${item.price}</p>
                <p>Total: ${item.price * item.quantity}</p>

                {/* Quantity Controls */}
                <div className="quantity-controls">
                  <button onClick={() => dispatch(decreaseQty(item.id))}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQty(item.id))}>
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Cart Amount */}
          <h3>Total Cart Amount: ${calculateTotalAmount()}</h3>

          {/* Action Buttons */}
          <div className="cart-actions">
            <button onClick={() => alert("Coming Soon")}>
              Checkout
            </button>

            <Link to="/plants">
              <button>Continue Shopping</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
