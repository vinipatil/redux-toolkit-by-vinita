import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GroceryCard from './GroceryCard';
import CartItem from './CartItem';
import { addItem, incrementQuantity } from './cartSlice'; 
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  const groceryItems = [
    { id: 1, name: 'Apple', price: 30, image: 'https://m.media-amazon.com/images/I/418r5a8VZ9L._SX300_SY300_QL70_FMwebp_.jpg' },
    { id: 2, name: 'Banana', price: 30, image: 'https://m.media-amazon.com/images/I/313UDz7oAhL._SX342_SY445_.jpg' },
    { id: 3, name: 'Orange', price: 50, image: 'https://m.media-amazon.com/images/I/41tRTl-dSjL.jpg' },
    { id: 4, name: 'Grapes', price: 50, image: 'https://m.media-amazon.com/images/I/518Ce251n1L._SX300_SY300_QL70_FMwebp_.jpg' },
    { id: 5, name: 'Strawberry', price: 40, image: 'https://m.media-amazon.com/images/I/519zzF0Rs8L._SY300_SX300_QL70_FMwebp_.jpg' },
    { id: 6, name: 'Watermelon', price: 50, image: 'https://m.media-amazon.com/images/I/41uGoDhVWVL._SX300_SY300_QL70_FMwebp_.jpg' },
    { id: 7, name: 'Pineapple', price: 30, image: 'https://m.media-amazon.com/images/I/41XubsgLveL._SY300_SX300_QL70_FMwebp_.jpg' },
    { id: 8, name: 'Kiwi', price: 30, image: 'https://m.media-amazon.com/images/I/41hBhaVhNtL._SY300_SX300_QL70_FMwebp_.jpg' },
    { id: 9, name: 'Mango', price: 50, image: 'https://m.media-amazon.com/images/I/51FRr8EcA8L._SX679_.jpg' },
    { id: 10, name: 'Pear', price: 30, image: 'https://m.media-amazon.com/images/I/41YYLKLwOFL._SX679_.jpg' },
    { id: 11, name: 'Lemon', price: 60, image: 'https://m.media-amazon.com/images/I/31Mc9SQs9AL._SY300_SX300_QL70_FMwebp_.jpg' },
    { id: 12, name: 'Cherry', price: 50, image: 'https://m.media-amazon.com/images/I/51VOp8IduZL._SX300_SY300_QL70_FMwebp_.jpg' },
    { id: 13, name: 'Peach', price: 40, image: 'https://m.media-amazon.com/images/I/41w5AsmdIcL.jpg' },
    { id: 14, name: 'Pomegranate', price: 50, image: 'https://m.media-amazon.com/images/I/4175wQ0LTgL._SY300_SX300_QL70_FMwebp_.jpg' },
    { id: 15, name: 'Guava', price: 50, image: 'https://m.media-amazon.com/images/I/41S4xXyjIzL._SX300_SY300_QL70_FMwebp_.jpg' },
  ];

  // Your cart items from the Redux store
  const cartItems = useSelector(state => state.cart.items);

  // Calculate total cost of all items in the cart
  const totalCost = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      // If the item already exists, dispatch incrementQuantity action
      dispatch(incrementQuantity({ id: item.id }));
    } else {
      // If the item doesn't exist, dispatch addItem action
      dispatch(addItem(item));
    }
  };

  return (
    <div className="container">
      <h2>Grocery Store</h2>
      <div className="item-list">
        <div className="card-container">
          {groceryItems.map(item => (
            <GroceryCard key={item.id} item={item} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
      <div className="cart">
        <h1>Cart</h1>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
        <p>Total Cost: <b className='cost'>₹{totalCost}</b></p> 
      </div>
    </div>
  );
};

export default App;
