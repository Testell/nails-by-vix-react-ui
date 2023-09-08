import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import styles from "./Backdrop.module.css";

interface BackdropProps {
  onClick: () => void;
  children: ReactNode;
}

const Backdrop = ({ children, onClick }: BackdropProps) => {
  return (
    <motion.div 
        className={styles["backdrop"]} 
        onClick={onClick}
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        >
      {children}
    </motion.div>
  );
};

export default Backdrop;


