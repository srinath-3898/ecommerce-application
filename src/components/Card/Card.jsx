"use client";
import React, { useContext } from "react";
import styles from "./Card.module.css";
import { CartContext } from "@/store/Cart/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Card = ({ product }) => {
  const router = useRouter();
  const { addItem } = useContext(CartContext);

  return (
    <div className={styles.card}>
      <p>{product?.title}</p>
      <Image
        src={product?.imageUrl}
        alt=""
        width={100}
        height={100}
        onClick={() => router.push(`/store/${product?.id}`)}
      />
      <div className={styles.container_1}>
        <p>${product?.price}</p>
        <button onClick={() => addItem(product)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
