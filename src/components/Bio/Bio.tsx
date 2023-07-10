import styles from "./Bio.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger)


function Bio() {

    
    const slides = gsap.utils.toArray(".image");
    const slidesAmount = slides.length;
    
    //const slides = useRef([]);
    //const slidesContainer = useRef(null);

    /*let createSlidesRefs = (slide!, index: number) => {
        slides.current[index] = slide;
    }*/

    useLayoutEffect(() =>{
        /*const totalSlides = slides.current.length;
        
        gsap.to(slides.current, {
            xPercent: -100 * (totalSlides - 1),
            ease: "none",
            scrollTrigger: {
                trigger: slidesContainer.current,
                start: "center center",
                end: "+=" + 50 * totalSlides + "%",
                scrub: true,
                pin: ".slideShowSection",
                snap: 1 / (totalSlides -1),
                markers: true
            }
        })*/
        let ctx = gsap.context(() => {
        gsap.to(slides, {
            ease: "none",
            duration: slides.length,
            xPercent: -(100 * (slidesAmount -1)),
            scrollTrigger: {
                trigger: ".slideShowContainer",
                start: "center center",
                end: "+=" + 50 * slidesAmount + "%",
                scrub: true,
                pin: ".slideShowSection",
                snap: 1 / (slidesAmount - 1),
                markers: true
            }
        });
    });
    return () => ctx.revert();
    }, []);

    return (
        <main className={styles["page"]}>
            <header className={styles['header']}>
                <div>
                    Private Nail Studio In Chicago Offering...
                </div>
            </header>
            <div className={styles["slideShowSection"]}>
                <div className={styles["slideShowContainer"]}>
                    <div className={styles["textContainer"]}>
                        <h1>Press Ons</h1>
                    </div>
                    <div className={styles["imageContainer"]}>
                        <img className={styles['image']} src='/images/pressOn1.svg'/>
                        <img className={styles['image']} src='/images/pressOn2.svg'/>
                        <img className={styles["image"]} src='images/pressOn3.svg'/>
                    </div>
                </div>
            </div>
            <footer className={styles["footer"]}>
                <h1>Footer</h1>
            </footer>
        </main>


      /*<main className={styles['page']}>
          <header className={styles['header']}>
            <div>
                Private Nail Studio In Chicago Offering...
            </div>
          </header>

          <div className={styles['pressOnsContainer']}>
            
            <div className={styles['image1Container']}>
                <img className={styles['image1']} src='/images/pressOn1.svg'/>
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
      </main>*/
    )
  }
  
  export default Bio;