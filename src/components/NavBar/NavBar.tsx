import React from "react";
import styles from "./Navbar.module.css";

function NavBar() {
  return (
    <header>
      <div className={styles["navbarContainer"]}>
        <div className={styles["loginButton"]}>Login</div>
        <div className={styles["menuButton"]}>Menu</div>
      </div>
    </header>
  );
}

export default NavBar;
