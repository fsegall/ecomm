import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../hooks/use-cart";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const { subtotal, checkout } = useCart();
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-links"]}>
        <div>
          <a href="#">
            <strong>The Fantastic Shop</strong>
          </a>
        </div>
        <div>
          <a href="#" onClick={checkout} className={styles["navbar-cart"]}>
            <FaShoppingCart />
            <span>${subtotal}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
