import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { useGSAP } from '@gsap/react';

const useGsapWordSlideUp = (selector = '[animate="word-slide-up"]', options = {}) => {
  useGSAP(
    () => {
      if (selector) {
        const split = new SplitType(selector, { types: 'words' });
        split.elements.forEach((el) => {
          let timeline = gsap.timeline({ paused: true });
          timeline.from(el.querySelectorAll('.word'), {
            opacity: 0,
            yPercent: 100,
            duration: 0.6,
            ease: 'slow(0.7,0.7,false)',
            stagger: { amount: 0.3 },
            ...options
          });
          ScrollTrigger.create({
            trigger: el,
            start: 'top 80%',
            onEnter: () => {
              timeline.play();
            },
            onLeaveBack: () => {
              // Reset ONLY when scrolling back up into view
              timeline.progress(0).pause();
            },
            toggleActions: 'play none none none' // optional: can also control with callbacks
          });
        });
      }
    },
    { scope: selector }
  );
};

export default useGsapWordSlideUp;
