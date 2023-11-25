"use client";
import React, { useState } from "react";
import { CartContext } from "./CartContext";

const CartContexProvider = ({ children }) => {
  const [open, setOepn] = useState(false);
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const onOpen = () => {
    setOepn(true);
  };
  const onClose = () => {
    setOepn(false);
  };
  const addItem = (item) => {
    const alreadyPresetItemIndex = items.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (alreadyPresetItemIndex === -1) {
      setItems((prevState) => [...prevState, { ...item, quantity: 1 }]);
      setTotalAmount((prevTotalAmount) => prevTotalAmount + item.price);
    } else {
      setItems((prevState) =>
        prevState.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else {
            return cartItem;
          }
        })
      );
      setTotalAmount((prevTotalAmount) => prevTotalAmount + item.price);
    }
  };
  const removeItem = () => {};
  return (
    <CartContext.Provider
      value={{
        open: open,
        onOpen: onOpen,
        onClose: onClose,
        items: items,
        addItem: addItem,
        removeItem: removeItem,
        totalAmount: totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContexProvider;
