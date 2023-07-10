import React from 'react';
import styles from "./Logo.module.css";


function Logo() {
  

  return (
    <section className={styles['section']}>
    <section className={styles['logoContainer']}>
      <div>
      <img className={styles['logo']} src='/images/nailsByVixLogoResize.svg' alt="logo"/>
      </div>
    </section>
    </section>
  
  );
}

export default Logo;