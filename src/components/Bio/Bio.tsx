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
    console.log(totalSlides, ScrollTrigger, slidesContainer.current);

    /*let ctx = gsap.context(() => {
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
          onUpdate: (self: any) => {
            const slideIndex = Math.round(self.progress * (totalSlides - 1));
            const slideText = getSlideText(slideIndex);
            gsap.to("#myText", { duration: 1, text: slideText});
          },
        },
      });
    }, slidesContainer);

    const getSlideText = (slideIndex: number): string => {
      switch (slideIndex) {
        case 0:
          return "Press Ons";
        case 1:
          return "Press Ons";
        case 2:
          return "Press Ons";
        case 3:
          return "Press Ons";
        case 4:
          return "Structured Gel Manicure";
        case 5:
          return "Structured Gel Manicure";
        case 6:
          return "Structured Gel Manicure";
        case 7:
          return "Gel Extension";
        case 8:
          return "Gel Extension";
        case 9:
          return "Gel Extension";
        default:
          return "";
      }
    }; */
    let ctx = gsap.context(() => {
      const array = [
        'Purple',
        'Purple',
        'Blue',
        'Blue',
        'Green',
        'Green',
        'Red',
        '',
      ];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slidesContainer.current,
          start: 'center center',
          end: '+=' + 50 * totalSlides + '%',
          scrub: true,
          pin: slidesContainer.current,
          snap: 1 / (array.length - 1),
          markers: true,
        },
      });

      array.forEach((item) => {
        tl.to('#myText', {
          duration: 1,
          ease: 'none',
          text: item,
        });
      });

      tl.to(
        '.image',
        {
          duration: 1 * (array.length - 1),
          ease: 'none',
          xPercent: -(100 * (totalSlides - 1)),
        },
        0
      );
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
            <img className={styles['image']} src='/images/pressOn1.svg' ref={(e) => createSlidesRefs(e, 0)} />
            <img className={styles['image']} src='/images/pressOn2.svg' ref={(e) => createSlidesRefs(e, 1)} />
            <img className={styles['image']} src='/images/pressOn3.svg' ref={(e) => createSlidesRefs(e, 2)} />
            <img className={styles['image']} src='/images/pressOn4.svg' ref={(e) => createSlidesRefs(e, 3)} />
            <img className={styles['image']} src='/images/gelManicure1.svg' ref={(e) => createSlidesRefs(e, 4)} />
            <img className={styles['image']} src='/images/gelManicure2.svg' ref={(e) => createSlidesRefs(e, 5)} />
            <img className={styles['image']} src='/images/gelManicure3.svg' ref={(e) => createSlidesRefs(e, 6)} />
            <img className={styles['image']} src='/images/gelExtension1.svg' ref={(e) => createSlidesRefs(e, 7)} />
            <img className={styles['image']} src='/images/gelExtension2.svg' ref={(e) => createSlidesRefs(e, 8)} />
            <img className={styles['image']} src='/images/gelExtension3.svg' ref={(e) => createSlidesRefs(e, 9)} />
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
