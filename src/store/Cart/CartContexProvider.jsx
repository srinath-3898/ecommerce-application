"use client";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import axios from "axios";
import { AuthContext } from "../Auth/AuthContext";

const CartContexProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [open, setOepn] = useState(false);
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const onOpen = () => {
    setOepn(true);
  };

  const onClose = () => {
    setOepn(false);
  };

  const addItem = async (item) => {
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

  const removeItem = (item) => {
    if (item.quantity === 1) {
      setItems((prevState) =>
        prevState.filter((cartItem) => cartItem.id !== item.id)
      );
    } else {
      setItems((prevState) =>
        prevState.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return cartItem;
          }
        })
      );
      setTotalAmount((prevTotalAmount) => prevTotalAmount + item.price);
    }
  };

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
