import React, { createContext, useState, useContext, useMemo } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    setCartItems(prev => {
      const idx = prev.findIndex(p => p._id === product._id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx].quantity += 1;
        return copy;
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = id => {
    setCartItems(prev => prev.filter(p => p._id !== id));
  };

  const clearCart = () => setCartItems([]);

  const total = useMemo(
    () => cartItems.reduce((sum, p) => sum + p.price * p.quantity, 0),
    [cartItems]
  );

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      total
    }}>
      {children}
    </CartContext.Provider>
  );
}
                       