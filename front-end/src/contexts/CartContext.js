// contexts/CartContext.js
import React, { createContext, useReducer, useContext, useEffect } from "react";

const CartContext = createContext();

const normalizeItem = (payload) => {
  // يدعم الشكلين: { productId, image_url, price } أو { id, image_url, price }
  const id = String(payload?.productId ?? payload?.id ?? payload?.property_id ?? "");
  return {
    id, // نخزن دائما كسلسلة لتفادي اختلاف الأنواع
    image_url: payload?.image_url || payload?.image || "",
    price: payload?.price ?? null,
  };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const item = normalizeItem(action.payload);
      if (!item.id) return state;

      const exists = state.some((x) => String(x.id) === String(item.id));
      if (exists) return state;

      return [...state, item];
    }

    case "REMOVE_FROM_CART":
      return state.filter((x) => String(x.id) !== String(action.id));

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

const getInitialCartState = () => {
  const storedCart = localStorage.getItem("cart");
  try {
    const parsed = storedCart ? JSON.parse(storedCart) : [];
    // تأكد من الشكل الموحد
    return Array.isArray(parsed)
      ? parsed
          .map((x) => ({
            id: String(x?.id ?? x?.productId ?? x?.property_id ?? ""),
            image_url: x?.image_url || "",
            price: x?.price ?? null,
            // قد يوجد title قديم من النظام السابق، نتركه كـ fallback فقط
            title: x?.title,
          }))
          .filter((x) => x.id)
      : [];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, undefined, getInitialCartState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);