import React, { useContext } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../hooks/use-cart";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const { subtotal, checkout } = useCart();
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-links"]}>
        <div>
          <Link href={"/"}>
            <a>
              <strong>The Fantastic Shop</strong>
            </a>
          </Link>
        </div>
        <div>
          <Link href={"/cart"}>
            <a className={styles["navbar-cart"]}>
              <FaShoppingCart />
              <span>${subtotal}</span>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
