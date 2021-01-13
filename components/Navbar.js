import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-links"]}>
        <div>
          <a href="#">
            <strong>The Fantastic Shop</strong>
          </a>
        </div>
        <div>
          <a href="#" className={styles["navbar-cart"]}>
            <FaShoppingCart />
            <span>$ 0.00</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
