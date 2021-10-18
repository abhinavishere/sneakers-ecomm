import React from "react";
// import Button from "./UI/Button";
import styles from "./CartWrapper.module.css";

const Cart = () => {
  // const [cartHasItems, setCartItems] = useState(false);
  return (
    <div className={styles.cart}>
      <header className={styles.cartHeader}>Cart</header>
      <main className={styles.cartBody}>
        {/* If Cart items greater than 0
        {cartHasItems && <Button type="button">Checkout</Button>}
    
        {!cartHasItems && <h2>Your cart Is Empty</h2>} */}
        <h2>Your cart Is Empty</h2>
      </main>
    </div>
  );
};

export default Cart;
