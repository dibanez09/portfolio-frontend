import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
const useGsapSlide = (selector = '[animate="slide"]', options = {}, scrollTriggerOptions = {}) => {
  useGSAP(() => {
    gsap.to(selector, {
      x: -500,
      opacity: 0,
      scrollTrigger: {
        trigger: selector,
        start: 'top 20%',
        end: 'bottom',
        scrub: true,
        ...scrollTriggerOptions,
        markers: true
      },
      ...options
    });
  }, [selector, options, scrollTriggerOptions]);
};

export default useGsapSlide;
