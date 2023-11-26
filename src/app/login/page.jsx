"use client";
import React, { useContext, useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { AuthContext } from "@/store/Auth/AuthContext";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { onLogin } = useContext(AuthContext);

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCH4EUReyKA14R4GI4l6_PaJv_BGrx0jNY",
        { ...loginFormData, returnSecureToken: true }
      );
      onLogin(response.data?.idToken);
      alert("Logged in successfully");
      router.push("/store");
    } catch (error) {
      alert(error?.response?.data?.error?.message);
    }
  };

  return (
    <div className={styles.container} onSubmit={handleLogin}>
      <form className={styles.login_form}>
        <div className={styles.input_controller}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Please enter your email id"
            value={loginFormData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.input_controller}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Please enter your password"
            value={loginFormData.password}
            onChange={handleInputChange}
          />
        </div>
        <button className={styles.login_btn}>Login</button>
      </form>
    </div>
  );
};

export default Login;
