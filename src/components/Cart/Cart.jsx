import React from "react";
import styles from "./Cart.module.css";
import { Drawer } from "antd";

const Cart = ({ open, setOpen }) => {
  return (
    <Drawer open={open} title="Cart" onClose={() => setOpen(false)}>
      Cart
    </Drawer>
  );
};

export default Cart;
