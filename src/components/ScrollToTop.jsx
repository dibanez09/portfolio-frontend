import React from 'react';
import AngleUpIcon from './icons/AngleUpIcon';
export default function ScrollToTop(props) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div style={{ pointerEvents: 'auto' }} {...props} className={` ${props.className}`}>
      <AngleUpIcon onClick={() => scrollToTop()} className="h-10 w-10 hover:cursor-pointer" />
    </div>
  );
}
