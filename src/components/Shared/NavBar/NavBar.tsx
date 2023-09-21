import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../Modal/Modal";
import CartIcon from "../Icons/CartIcon";
import useCart from "../../../hooks/UseCart";





function NavBar() {

    const { totalItems, totalPrice } = useCart();

    const [color, changeColor] = useState("");
    const location = useLocation();

    const [modalOpen, setModalOpen] = useState(false);
    

    const close = () => {
      console.log("Closing modal");
      setModalOpen(false);
    };
    
    const open = () => {
      console.log("Opening modal");
      setModalOpen(true);
    };
    
    useEffect(() =>{
      if(location.pathname == '/Menu'){
        changeColor("#d7cbfe");
        }else{
          changeColor("#FDD5FD")
        }
    },[location]);
  

  return (
    <div style={{backgroundColor: color}}>
      <ul className={styles["navbarContainer"]}>
        <li className={styles["loginButton"]}>
          <Link to="/" className={styles["text-link"]}>
          <div className={styles["loginButton"]}>NailsByVix</div>
          </Link>
        </li>
        <li className={styles["cart"]}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9}}
            className={styles["cartButton"]}
            onClick={() => (modalOpen ? close() : open())}
          >
            <CartIcon/>
          </motion.div>
          {/*<p>{totalItems}</p>*/}
          <AnimatePresence
            initial={false}
            mode="wait">
              {modalOpen && <Modal handleClose={close} cart={true}text="" />}
          </AnimatePresence>
        </li>
        <li className={styles["menuButton"]}>
          <Link to="/Menu" className={styles["text-link"]}>
            <div className={styles["menuButton"]}>Menu</div>
          </Link>
        </li>
      </ul> 
    </div>
  );
}

export default NavBar;
