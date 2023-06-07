import React from 'react';
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div>
        <img className={styles['logo']} src='/images/nailsByVixLogoFigma.svg' alt="logo"/>
    </div>
  );
}

export default Logo;