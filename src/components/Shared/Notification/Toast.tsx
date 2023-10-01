import React, { useEffect } from 'react';
import styles from './Toast.module.css'; // Import the CSS module
import { gsap } from 'gsap';

interface ToastProps {
  message: string;
  type: 'default' | 'success' | 'attention' | 'alert' | 'info'; // Include the 'type' prop
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    gsap.fromTo(
      `.${styles.notify}`,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
      }
    );

    
    const closeTimeout = setTimeout(() => {
      onClose();
    }, 6000); 

   
    return () => {
      clearTimeout(closeTimeout);
    };
  }, [onClose]);

  return (
    <div className={`${styles.notify} ${styles[`notify--${type}`]}`}>
      <span className={styles.notify__message}>{message}</span>
      <button
        type="button"
        className={styles.notify__close}
        aria-label="Close"
        onClick={onClose}
        style={{ background: 'none', border: 'none', padding: '0' }} 
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={styles.notify__icon}
          style={{ background: 'none', padding: 0 }} 
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default Toast;
