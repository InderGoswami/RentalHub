import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (car) => {
    setCart((prevCart) => [...prevCart, car]);
  };

  const removeFromCart = (carName) => {
    setCart((prevCart) => prevCart.filter((car) => car.carName !== carName));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
