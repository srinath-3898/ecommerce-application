"use client";
import React, { useState } from "react";
import styles from "./Contactus.module.css";

const Contactus = () => {
  const [formData, serFormData] = useState({ name: "", email: "", phone: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    serFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contact_us}>
      <div className={styles.input_controller}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Please enter your name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.input_controller}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Please enter your email id"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.input_controller}>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          placeholder="Please enter your phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className={styles.submit_btn}>
        Submit
      </button>
    </form>
  );
};

export default Contactus;
