import styles from "./Bio.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

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

  let ctx = gsap.context(() => {
    const array = [
      'Press Ons',
      'Press Ons',
      'Press Ons',
      'Press Ons',
      'Structured Gel Manicure',
      'Structured Gel Manicure',
      'Structured Gel Manicure',
      'Gel Extension',
      'Gel Extension',
      'Gel Extension',
    ];

    const tlImages = gsap.timeline({
      scrollTrigger: {
        trigger: slidesContainer.current,
        start: 'center center',
        end: '+=' + 50 * totalSlides + '%',
        scrub: true,
        pin: slidesContainer.current,
        snap: 1 / (totalSlides - 1),
        markers: true,
      },
    });

    tlImages.to(
      slides.current,
      {
        duration: 1 * (array.length - 1),
        ease: 'none',
        xPercent: -(100 * (totalSlides - 1)),
      },
      0
    );

    const tlText = gsap.timeline({
      scrollTrigger: {
        trigger: slidesContainer.current,
        start: 'center center',
        end: '+=' + 50 * totalSlides + '%',
        scrub: true,
        pin: slidesContainer.current,
        snap: 1 / (totalSlides - 1),
        markers: true,
      },
    });

    array.forEach((item, index) => {
      tlText.to('#myText', {
        duration: 1,
        ease: 'none',
        text: item,
      }, index);
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
      <div ref={slidesContainer} className={styles["slideShowSection"]}>
        <div className={styles["slideShowContainer"]}>
          <div className={styles["textContainer"]}>
            <div id='myText'>Press Ons</div>
          </div>
          <div className={styles["imageContainer"]}>
            <img className={styles['image']} src='/images/pressOn1.svg' alt="" ref={(e) => createSlidesRefs(e, 0)} />
            <img className={styles['image']} src='/images/pressOn2.svg' alt="" ref={(e) => createSlidesRefs(e, 1)} />
            <img className={styles['image']} src='/images/pressOn3.svg' alt="" ref={(e) => createSlidesRefs(e, 2)} />
            <img className={styles['image']} src='/images/pressOn4.svg' alt="" ref={(e) => createSlidesRefs(e, 3)} />
            <img className={styles['image']} src='/images/gelManicure1.svg' alt="" ref={(e) => createSlidesRefs(e, 4)} />
            <img className={styles['image']} src='/images/gelManicure2.svg' alt="" ref={(e) => createSlidesRefs(e, 5)} />
            <img className={styles['image']} src='/images/gelManicure3.svg' alt="" ref={(e) => createSlidesRefs(e, 6)} />
            <img className={styles['image']} src='/images/gelExtension1.svg' alt="" ref={(e) => createSlidesRefs(e, 7)} />
            <img className={styles['image']} src='/images/gelExtension2.svg' alt="" ref={(e) => createSlidesRefs(e, 8)} />
            <img className={styles['image']} src='/images/gelExtension3.svg' alt="" ref={(e) => createSlidesRefs(e, 9)} />
          </div>
        </div>
        <div className={styles["customDesign"]}>
          <h2>Custom Design & Charms</h2>
        </div>
      </div>
      <footer className={styles["footer"]}>
        <h1>Footer</h1>
      </footer>
    </main>
  );
}

export default Bio;
