"use client";
import React, { useContext, useEffect } from "react";
import styles from "./Store.module.css";
import Card from "@/components/Card/Card";
import ProductsContext from "@/store/Products/ProductsContext";
import { AuthContext } from "@/store/Auth/AuthContext";
import { useRouter } from "next/navigation";

const Store = () => {
  const router = useRouter();
  const { token } = useContext(AuthContext);

  const { products } = useContext(ProductsContext);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }
  }, []);

  return token ? (
    <div className={styles.container}>
      <p className={styles.music}>Music</p>
      <div className={styles.products}>
        {products.map((product) => (
          <Card key={product?.id} product={product} />
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Store;
