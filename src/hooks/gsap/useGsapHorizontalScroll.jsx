import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
const useGsapHorizontalScroll = (
  selector = '#horizontalContainer .content',
  options = {},
  scrollTriggerOptions = {}
) => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(selector);
    gsap.to(elements, {
      xPercent: -100 * (elements.length - 1),
      scrollTrigger: {
        trigger: '#horizontalContainer',
        pin: true,
        scrub: 0.5,
        start: 'top 18%',
        end: 'bottom',
        ...scrollTriggerOptions
      }
    });
    // elements.forEach((el, i) => {
    //   gsap.to(el, {
    //     x: i % 2 == 0 ? -100 : 100,
    //     opacity: 0,
    //     scrollTrigger: {
    //       trigger: selector,
    //       start: 'top 20%',
    //       end: 'bottom',
    //       scrub: true, // Link animation directly to scroll
    //       ...scrollTriggerOptions
    //     },
    //     ...options
    //   });
    // });
  }, [selector, options, scrollTriggerOptions]);
};

export default useGsapHorizontalScroll;
