import React from "react";
import { motion, Variants } from "framer-motion"; // Import Variants from framer-motion

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

const Notification = ({ notifications, setNotifications, notification }: any) => { // Replace 'any' with appropriate types
  const { text, style } = notification;

  const styleType = () => {
    // Implement your logic here to determine the style type
    // You can replace this with your actual implementation
    return {};
  };

  return (
    <motion.li
      //positionTransition
      style={styleType()} // Change the style based on style selection
      variants={notificationVariants} // Use the declared notificationVariants
      whileHover="hover" // Animation on hover gesture
      initial="initial" // Starting animation
      animate="animate" // Values to animate to
      exit="exit" // Target to animate to when removed from the tree
    >
      <h3 style={{ color: style ? "#030303" : "#929292" }} className="notification-text">
        {text}
      </h3>
    </motion.li>
  );
};

export default Notification;
