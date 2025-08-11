import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
const useGsapSlideAlternate = (
  selector = '[animate="slide-alternate"]',
  options = {},
  scrollTriggerOptions = {}
) => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(selector);
    elements.forEach((el, i) => {
      gsap.to(el, {
        x: i % 2 == 0 ? -500 : 500,
        opacity: 0,
        scrollTrigger: {
          trigger: selector,
          start: 'top 20%',
          end: 'bottom',
          scrub: true, // Link animation directly to scroll
          ...scrollTriggerOptions
        },
        ...options
      });
    });
  }, [selector, options, scrollTriggerOptions]);
};

export default useGsapSlideAlternate;
