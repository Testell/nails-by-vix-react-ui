import React from "react";
import styles from "./Notification.module.css";
import { motion, SVGMotionProps, Variants } from "framer-motion"; // Import Variants from framer-motion
import { remove } from "../../../hooks/arr-utils";
import { JSX } from "react/jsx-runtime";

const notificationVariants: Variants = { // Declare notificationVariants with Variants type
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.2,
    transition: { duration: 0.1 },
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.2,
    transition: { ease: "easeOut", duration: 0.15 },
  },
  hover: { scale: 1.05, transition: { duration: 0.1 } },
};

const Notification = ({ notifications, setNotifications, notification }: any) => { 

  const { text, style } = notification;

  const handleClose = () => setNotifications(remove(notifications, notification));

  const styleType = () => {
    
    return {};
  };

  return (
    <div className={styles["notificationContainer"]}>
    <motion.li
      //positionTransition
      style={styleType()} // Change the style based on style selection
      variants={notificationVariants} // Use the declared notificationVariants
      whileHover="hover" // Animation on hover gesture
      initial="initial" // Starting animation
      animate="animate" // Values to animate to
      exit="exit" // Target to animate to when removed from the tree
    >
      <h3 style={{ color: style ? "#030303" : "#929292" }} className={styles["notificationText"]}>
        {text}
      </h3>
      <CloseButton color={style ? "#030303" : "#989898"} handleClose={handleClose} />
    </motion.li>
    </div>
  );
};

const Path = (props: JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={props.color}
      strokeLinecap="square"
      {...props}
    />
  );
  
  

  const CloseButton = ({ handleClose, color }: { handleClose: () => void; color: string }) => (
    <motion.div whileHover={{ scale: 1.2 }} onClick={handleClose} className={styles["closeButton"]}>
      <svg width="18" height="18" viewBox="0 0 23 23">
        <Path color={color} d="M 3 16.5 L 17 2.5" />
        <Path color={color} d="M 3 2.5 L 17 16.346" />
      </svg>
    </motion.div>
  );

export default Notification;
