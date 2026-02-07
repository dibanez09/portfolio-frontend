import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
const useGsapDivSlideUp = (selector = '[animate="div-slide-up"]', options = {}) => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(selector);
    elements.forEach((el) => {
      let timeline = gsap.timeline({ paused: true });
      timeline.from(el.querySelectorAll('div'), {
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
          timeline.progress(0).pause();
        },
        toggleActions: 'play none none none'
        // markers: true
      });
    });
  }, [selector, options]);
};

export default useGsapDivSlideUp;
