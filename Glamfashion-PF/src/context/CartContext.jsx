import { createContext, useState } from "react";
export const CartContext = createContext();
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems(prev => {
      const exist = prev.find(p => p.id === product.id);
      if (exist) {
        return prev.map(p => p.id === product.id
          ? { ...p, qty: p.qty + product.qty }
          : p
        );
      }
      return [...prev, product];
    });
  };
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(p => p.id !== id));
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
