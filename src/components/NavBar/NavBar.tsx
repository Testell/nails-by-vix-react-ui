import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function NavBar() {

    const [color, changeColor] = useState("");
    const location = useLocation();
    
    useEffect(() =>{
      if(location.pathname == '/Menu'){
        changeColor("#d7cbfe");
        }else{
          changeColor("#FDD5FD")
        }
    },[location]);
  

  return (
    <div style={{backgroundColor: color}}>
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
