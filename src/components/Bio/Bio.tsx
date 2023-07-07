import styles from "./Bio.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)


function Bio() {

    const imgRef = useRef(null);
    useEffect(() =>{
        const el = imgRef.current;
        gsap.fromTo(el, {rotation: 0}, {rotation: 360, duration: 3, scrollTrigger: {
            trigger:el
        }})
    }, [])

    return (
      <main className={styles['page']}>
          <header className={styles['header']}>
            <div>
                Private Nail Studio In Chicago Offering...
            </div>
          </header>

          <div className={styles['pressOnsContainer']}>
            
            <div className={styles['image1Container']}>
                <img className={styles['image1']} src='/images/pressOn1.svg' />
            </div>
            <h1 className={styles['pressOnsText']}>
                Press Ons
            </h1>
            <div className={styles["textContainer"]}>
                <h1>Custom Design & Charms</h1>
                <h2>US Shipping</h2>
            </div>
            <div className={styles["image2Container"]}>
                <img className={styles['image2']} src='/images/pressOn2.svg'/>
            </div>
            <div className={styles["image3Container"]}>
                <img className={styles["image3"]} src='images/pressOn3.svg'/>
            </div>
            <div className={styles["image4Container"]}>
                <img className={styles["image4"]} src='images/pressOn4.svg'/>
            </div>

          </div>
      </main>
    )
  }
  
  export default Bio;