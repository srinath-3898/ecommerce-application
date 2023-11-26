"use client";
import React, { useState } from "react";
import ProductsContext from "./ProductsContext";

const DUMMY_PRODUCTS = [
  {
    id: "1",
    title: "Stevie Wonder",
    price: 200,
    imageUrl:
      "https://rukminim2.flixcart.com/image/416/416/l3vxbbk0/book/j/z/v/stevie-wonder-a-musical-guide-to-the-classic-albums-original-imagevzeg6wt7fx3.jpeg?q=70",
  },
  {
    id: "2",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "3",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "4",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "5",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(DUMMY_PRODUCTS);
  return (
    <ProductsContext.Provider value={{ products: products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
