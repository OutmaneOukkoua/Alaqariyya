// components/AddToPanier/AddToPanier.jsx
import React from "react";
import "./AddToPanier.css";
import { useCart } from "../../contexts/CartContext";

function AddToPanier({ product }) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    const id = product?.property_id ?? product?.id;
    if (!id) return;

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        productId: id,
        image_url: product?.image_url,
        price: product?.price,
      },
    });
  };

  return (
    <button className="add-to-panier-button" onClick={handleAddToCart}>
      Add to Panier
    </button>
  );
}

export default AddToPanier;
