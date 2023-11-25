import React from "react";
import styles from "./Card.module.css";
import { Image } from "antd";

const Card = ({ product }) => {
  return (
    <div className={styles.card}>
      <p>{product?.title}</p>
      <Image src={product?.imageUrl} />
      <div className={styles.container_1}>
        <p>${product?.price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
