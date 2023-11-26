"use client";
import React, { useContext } from "react";
import styles from "./Store.module.css";
import Card from "@/components/Card/Card";
import ProductsContext from "@/store/Products/ProductsContext";

const Store = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className={styles.container}>
      <p className={styles.music}>Music</p>
      <div className={styles.products}>
        {products.map((product) => (
          <Card key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Store;
