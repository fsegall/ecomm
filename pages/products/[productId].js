/* import { FaShoppingCart } from "react-icons/fa"; */
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import products from "../../shared/products.json";
import { useCart } from "../../hooks/use-cart.js";

export default function Home({ product }) {
  const { id, title, description, price, image } = product;
  const { addToCart } = useCart();
  console.log(product);
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
        <div className={styles.card}>
          <div className={styles["card-content"]}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>${price}</p>
            <p>{description}</p>
          </div>

          <button
            className={styles.button}
            onClick={() => {
              addToCart({ id: product.id });
            }}
          >
            Add to Cart
          </button>
        </div>
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

export async function getStaticProps({ params }) {
  const product = products.find(({ id }) => id === params.productId);
  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const paths = products.map((product) => {
    return {
      params: {
        productId: product.id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
