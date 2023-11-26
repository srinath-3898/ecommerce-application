"use client";
import React, { useContext } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { PlayCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { usePathname } from "next/navigation";
import { CartContext } from "@/store/Cart/CartContext";

const Header = () => {
  const pathnames = usePathname()
    .split("/")
    .filter((x) => x);

  const pathname = pathnames.length > 0 ? pathnames[0] : "";

  const { items, onOpen } = useContext(CartContext);

  return (
    <div className={styles.header}>
      <div className={styles.container_1}>
        <div className={styles.container_1_box_1}>
          <Link
            href={"/"}
            className={`${styles.nav_link} ${
              pathname === "" ? styles.active_nav_link : ""
            }`}
          >
            Home
          </Link>
          <Link
            href={"/store"}
            className={`${styles.nav_link} ${
              pathname === "store" ? styles.active_nav_link : ""
            }`}
          >
            Store
          </Link>
          <Link
            href={"/about"}
            className={`${styles.nav_link} ${
              pathname === "about" ? styles.active_nav_link : ""
            }`}
          >
            About
          </Link>
          <Link
            href={"/contactus"}
            className={`${styles.nav_link} ${
              pathname === "contactus" ? styles.active_nav_link : ""
            }`}
          >
            Contact Us
          </Link>
        </div>
        <Badge count={items.length} showZero size="small">
          <ShoppingCartOutlined
            style={{ color: "white", fontSize: 30 }}
            onClick={onOpen}
          />
        </Badge>
      </div>
      {pathname === "" ? (
        <div className={styles.container_2}>
          <p>The Generics</p>
          <button>Get Our Latest Albums</button>
          <PlayCircleOutlined style={{ color: "#56ccf2", fontSize: 100 }} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
