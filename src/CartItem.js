import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, incrementQuantity, decrementQuantity } from './cartSlice'; 

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
    <div className="cart-item">
      <img src={image} alt={name} className="cart-item-img" />
      <div>
        <h3>{name}</h3>
        <p>₹{price}</p>
        <p>Quantity: {quantity}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleRemove}>Remove</button>
        <button onClick={handleBuy} className='buy'>Buy</button>
      </div>
    </div>
  );
};

export default CartItem;
