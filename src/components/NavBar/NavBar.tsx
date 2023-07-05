import React, { useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function NavBar() {

  


    

  
  


  
  return (
    <div>
      <div className={styles["navbarContainer"]}>
        <div className={styles["loginButton"]}>
          <Link to="/" className={styles["text-link"]}>
          <div className={styles["loginButton"]}>Home</div>
          </Link>
        </div>
        <div className={styles["menuButton"]}>
          <Link to="/Menu" className={styles["text-link"]}>
            <div className={styles["menuButton"]}>Menu</div>
          </Link>
        </div>
      </div> 
    </div>
    
  

    
  );
}

export default NavBar;
