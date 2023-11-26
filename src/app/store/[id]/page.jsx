"use client";
import React, { useContext, useEffect } from "react";
import styles from "./Product.module.css";
import { useParams, useRouter } from "next/navigation";
import ProductsContext from "@/store/Products/ProductsContext";
import Image from "next/image";
import { CartContext } from "@/store/Cart/CartContext";
import { AuthContext } from "@/store/Auth/AuthContext";

const Product = () => {
  const router = useRouter();
  const { token } = useContext(AuthContext);
  const { products } = useContext(ProductsContext);
  const { addItem } = useContext(CartContext);
  const params = useParams();
  const { id } = params;

  const product = products.find((product) => product.id === id);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }
  }, []);

  return token ? (
    <div className={styles.container}>
      <div className={styles.container_1}>
        <Image src={product?.imageUrl} height={100} width={100} alt="" />
        <div className={styles.container_1_box_1}>
          <button
            className={styles.add_to_cart}
            onClick={() => addItem(product)}
          >
            ADD TO CART
          </button>
          <button className={styles.buy_now}>BUY NOW</button>
        </div>
      </div>
      <div className={styles.container_2}></div>
    </div>
  ) : (
    <></>
  );
};

export default Product;
