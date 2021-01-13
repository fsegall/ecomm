import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { CartContext, useCartState } from "../hooks/use-cart.js";

function MyApp({ Component, pageProps }) {
  const cart = useCartState();
  return (
    <CartContext.Provider value={cart}>
      <Navbar />
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}

export default MyApp;
