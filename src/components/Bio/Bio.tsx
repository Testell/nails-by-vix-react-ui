import styles from "./Bio.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);


function Bio() {
    const slides = useRef<HTMLImageElement[]>([]);
    const slidesContainer = useRef(null);
    
    let createSlidesRefs = (slide: HTMLImageElement | null, index: number) => {
        if (slide) {
          slides.current[index] = slide;
        }
      };
    

      useLayoutEffect(() => {
        const totalSlides = slides.current.length;
        console.log(totalSlides, ScrollTrigger, slidesContainer.current);
    
        let ctx = gsap.context(() => {
          gsap.to(slides.current, {
            ease: 'none',
            xPercent: -(100 * (totalSlides - 1)),
            scrollTrigger: {
              markers: true,
              trigger: slidesContainer.current,
              start: 'center center',
              end: '+=' + 50 * totalSlides + '%',
              scrub: true,
              pin: slidesContainer.current,
              snap: 1 / (totalSlides - 1),
            },
          });
        }, slidesContainer);
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
                <div ref={slidesContainer} className={styles["slideShowContainer"]}>
                    <div className={styles["textContainer"]}>
                        <h1>Press Ons</h1>
                    </div>
                    <div className={styles["imageContainer"]}>
                        <img className={styles['image']} src='/images/pressOn1.svg'ref={(e) => createSlidesRefs(e, 0)} />
                        <img className={styles['image']} src='/images/pressOn2.svg'ref={(e) => createSlidesRefs(e, 1)} />
                        <img className={styles['image']} src='images/pressOn3.svg'ref={(e) => createSlidesRefs(e, 2)} />
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