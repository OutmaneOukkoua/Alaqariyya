// import React, { createContext, useReducer, useContext } from 'react';

// const CartContext = createContext();

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       const isProductInCart = state.some(product => product.id === action.product.id);
//       if (!isProductInCart) {
//         return [...state, action.product];
//       }
//       return state;
//     case 'REMOVE_FROM_CART':
//       return state.filter(product => product.id !== action.id);
//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [cart, dispatch] = useReducer(cartReducer, []);

//   return (
//     <CartContext.Provider value={{ cart, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);


import React, { createContext, useReducer, useContext, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const isProductInCart = state.some(product => product.id === action.product.id);
      if (!isProductInCart) {
        return [...state, action.product];
      }
      return state;
    case 'REMOVE_FROM_CART':
      return state.filter(product => product.id !== action.id);
    default:
      return state;
  }
};

const getInitialCartState = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, getInitialCartState());

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
