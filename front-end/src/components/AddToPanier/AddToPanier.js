import React from 'react';
import './AddToPanier.css';
import { useCart } from './CartContext';

function AddToPanier({ product }) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  return (
    <button className="add-to-panier-button" onClick={handleAddToCart}>
      Add to Panier
    </button>
  );
}

export default AddToPanier;
