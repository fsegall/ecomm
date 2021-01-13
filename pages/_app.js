import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { CartContext } from "../hooks/use-cart.js";

function MyApp({ Component, pageProps }) {
  return (
    <CartContext.Provider value={{}}>
      <Navbar />
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}

export default MyApp;
