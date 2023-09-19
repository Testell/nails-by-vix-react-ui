import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";
import Cart from "../Cart";

interface ModalProps {
  handleClose: () => void;
  text: string; 
  cart: boolean;
}

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

const Modal = ({ handleClose, text}: ModalProps) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles["modal"]} 
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
          {Cart ? (
          <Cart /> 
        ) : (
          <>
            <p>{text}</p>
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9}}
            className={styles["modalButton"]}
            onClick={handleClose}
            >
                Close
            </motion.button>
          </>
            )}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
