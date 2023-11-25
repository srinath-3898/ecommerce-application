"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { PlayCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { usePathname, useRouter } from "next/navigation";

const Header = ({ cartOepn, setCartOepn }) => {
  const router = useRouter();
  const pathname = usePathname()
    .split("/")
    .filter((x) => x)[0];

  const [activeNavlink, setActiveNavlink] = useState("");

  useEffect(() => {
    setActiveNavlink(pathname || "");
  }, [pathname]);

  return (
    <header>
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
        </div>
        <Badge count={0} showZero size="small">
          <ShoppingCartOutlined
            style={{ color: "white", fontSize: 30 }}
            onClick={() => setCartOepn(!cartOepn)}
          />
        </Badge>
      </div>
      <div className={styles.container_2}>
        <p>The Generics</p>
        <button>Get Our Latest Albums</button>
        <PlayCircleOutlined style={{ color: "#56ccf2", fontSize: 100 }} />
      </div>
    </header>
  );
};

export default Header;
