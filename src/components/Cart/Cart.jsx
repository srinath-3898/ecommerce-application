"use client";
import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { Drawer, Image } from "antd";
import { CartContext } from "@/store/Cart/CartContext";

const Cart = () => {
  const { open, onClose, items, addItem, removeItem, totalAmount } =
    useContext(CartContext);
  return (
    <Drawer open={open} title="Cart" onClose={onClose} size="large">
      <div className={styles.cart_header}>
        <p>Item</p>
        <p>Price</p>
        <p>Quantity</p>
      </div>
      <div className={styles.cart_items}>
        {items.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.title}>
              <Image
                src={item.imageUrl}
                alt=""
                width={100}
                height={100}
                style={{ borderRadius: "5px" }}
              />
              <p>{item.title}</p>
            </div>
            <p>${item.price}</p>
            <div className={styles.quantity}>
              <p>X {item.quantity}</p>
              <button className={styles.plus_btn} onClick={() => addItem(item)}>
                +
              </button>
              <button className={styles.minus_btn}>-</button>
            </div>
          </div>
        ))}
      </div>
      {items?.length > 0 ? (
        <p className={styles.total_amount}>Total Amount: ${totalAmount}</p>
      ) : (
        <></>
      )}
    </Drawer>
  );
};

export default Cart;
