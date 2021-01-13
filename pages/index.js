import { FaShoppingCart } from "react-icons/fa";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import products from "../products.json";
import { useCart } from "../hooks/use-cart.js";

export default function Home() {
  const { subtotal, totalItems, addToCart, checkout } = useCart();
  return (
    <div className={styles.container}>
      <Head>
        <title>Ecommerce Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">The fantastic store!</a>
        </h1>

        <p className={styles.description}>
          The best place to buy ... on the web!
        </p>

        <div className={styles.cart}>
          <p>
            <strong>Items:</strong> {totalItems}
          </p>
          <strong>Total Cost:</strong>${subtotal}
          <button className={styles["button-cart"]} onClick={checkout}>
            <FaShoppingCart style={{ marginRight: "0.2rem" }} />{" "}
            <span>Check Out</span>
          </button>
        </div>

        <ul className={styles.grid}>
          {products.map((product) => (
            <li key={product.id} className={styles.card}>
              <a href="#" className={styles["card-content"]}>
                <img src={product.image} alt="dinosaur" />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <p>
                  <button
                    className={styles.button}
                    onClick={() => {
                      addToCart({ id: product.id });
                    }}
                  >
                    Add to Cart
                  </button>
                </p>
              </a>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
