"use client";
import React, { useContext } from "react";
import styles from "./Card.module.css";
import { Image } from "antd";
import { CartContext } from "@/store/Cart/CartContext";

const Card = ({ product }) => {
  const { addItem } = useContext(CartContext);
  return (
    <div className={styles.card}>
      <p>{product?.title}</p>
      <Image src={product?.imageUrl} alt="" />
      <div className={styles.container_1}>
        <p>${product?.price}</p>
        <button onClick={() => addItem(product)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
