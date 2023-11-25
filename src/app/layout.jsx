import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./RootLayout.module.css";
import Cart from "@/components/Cart/Cart";
import CartContexProvider from "@/store/Cart/CartContexProvider";
import ProductsContextProvider from "@/store/Products/ProductsContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProductsContextProvider>
          <CartContexProvider>
            <div className={styles.main}>
              <Header />
              <div className={styles.content}>{children}</div>
              <Footer />
              <Cart />
            </div>
          </CartContexProvider>
        </ProductsContextProvider>
      </body>
    </html>
  );
}
