import React, { useState } from "react";
import useCart from "../../../hooks/UseCart";
import CartLineItem from "../CartLineItem";
import { motion } from "framer-motion";
import styles from "./Cart.module.css"
import { ReactElement } from "react";
import { CartItemType } from "../../../contexts/CartContext/CartContextProvider";

function Cart() {
  const [confirm, setConfirm] = useState(false);
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  const pageContent = confirm ? (
    <h2>Thank you for your order</h2>
  ) : (
    <>
      <h2 className="offScreen">Cart</h2>
      <ul className="cart">
        {cart.map((item) => (
          <CartLineItem
            key={item.sku}
            item={item}
            dispatch={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
          />
        ))}
      </ul>
      <div className="cart__totals">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
        
        <motion.button
            onClick={onSubmitOrder}
            disabled={!totalItems}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9}}
            className={styles["orderButton"]}
            >
                Place Order
            </motion.button>
      </div>
    </>
  );

  const content = <main className="main main--cart">{pageContent}</main>;

  return content;
}

export default Cart;
