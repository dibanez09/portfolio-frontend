import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP); // register the hook to avoid React version discrepancies
gsap.config({
  // nullTargetWarn: false
});

import useGsapWordSlideUp from './useGsapWordSlideUp';
import useGsapDivSlideUp from './useGsapDivSlideUp';
import useGsapSlide from './useGsapSlide';
import useGsapSlideAlternate from './useGsapSlideAlternate';
export { useGsapWordSlideUp, useGsapDivSlideUp, useGsapSlide, useGsapSlideAlternate };
