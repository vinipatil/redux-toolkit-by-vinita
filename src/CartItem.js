import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, incrementQuantity, decrementQuantity } from './cartSlice';
import './App.css'; 

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, price, quantity, image } = item;

  const handleRemove = () => {
    dispatch(removeItem({ id }));
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ id }));
  };

  const handleBuy = () => {
    console.log('Buying:', item);
  };

  return (
    <div className="cart-item-container">
      <img src={image} alt={name} className="cart-item-img" />
      <div className="cart-item-details">
        <h3>{name}</h3>
        <p>₹{price}</p>
        <p>Quantity: {quantity}</p>
        <div className="cart-item-buttons">
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
      <button onClick={handleBuy} className='buy'>Buy</button>
    </div>
  );
};

export default CartItem;
