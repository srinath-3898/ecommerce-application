import { InstagramFilled, YoutubeFilled } from "@ant-design/icons";
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>The Generics</p>
      <InstagramFilled style={{ fontSize: 36 }} />
      <YoutubeFilled
        style={{
          fontSize: 36,
          color: "red",
          padding: 0,
        }}
      />
    </footer>
  );
};

export default Footer;
