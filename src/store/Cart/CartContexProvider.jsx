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

  const getCartItems = async () => {
    try {
      const response = await axios.get(
        `https://crudcrud.com/api/cd9a3fcdff764394a9d252f807d5172f/cart${
          user.email.split("@")[0]
        }`
      );
      setItems(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = async (item) => {
    try {
      await axios.post(
        `https://crudcrud.com/api/cd9a3fcdff764394a9d252f807d5172f/cart${
          user.email.split("@")[0]
        }`,
        item
      );
      getCartItems();
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (id) => {
    try {
      await axios.delete(
        `https://crudcrud.com/api/cd9a3fcdff764394a9d252f807d5172f/cart${
          user.email.split("@")[0]
        }/${id}`
      );
      getCartItems();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCartItems();
  }, []);
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
