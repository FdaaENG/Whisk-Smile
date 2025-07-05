import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find(item => item.id === newItem.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        return [...prevItems, newItem];
      }
    });
  };
  const removeFromCart = (id) => {
  setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
};
const clearCart = () => {
  setCartItems([]);
};
  

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
