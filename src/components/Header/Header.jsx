"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { PlayCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { CartContext } from "@/store/Cart/CartContext";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname()
    .split("/")
    .filter((x) => x)[0];

  const { items, onOpen } = useContext(CartContext);

  const [activeNavlink, setActiveNavlink] = useState("");

  useEffect(() => {
    setActiveNavlink(pathname || "");
  }, [pathname]);

  return (
    <div className={styles.header}>
      <div className={styles.container_1}>
        <div className={styles.container_1_box_1}>
          <Link
            href={"/"}
            className={`${styles.nav_link} ${
              activeNavlink === "" ? styles.active_nav_link : ""
            }`}
          >
            Home
          </Link>
          <Link
            href={"/store"}
            className={`${styles.nav_link} ${
              activeNavlink === "store" ? styles.active_nav_link : ""
            }`}
          >
            Store
          </Link>
          <Link
            href={"/about"}
            className={`${styles.nav_link} ${
              activeNavlink === "about" ? styles.active_nav_link : ""
            }`}
          >
            About
          </Link>
          <Link
            href={"/contactus"}
            className={`${styles.nav_link} ${
              activeNavlink === "contactus" ? styles.active_nav_link : ""
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
      <div className={styles.container_2}>
        <p>The Generics</p>
        <button>Get Our Latest Albums</button>
        <PlayCircleOutlined style={{ color: "#56ccf2", fontSize: 100 }} />
      </div>
    </div>
  );
};

export default Header;
