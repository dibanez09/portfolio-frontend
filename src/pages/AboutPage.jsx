import useGsapDivSlideUp from '../hooks/gsap/useGsapDivSlideUp';
const AboutPage = () => {
  useGsapDivSlideUp();
  return (
    <div>
      <h1>About</h1>
      <div className="grid grid-cols-12 gap-2 mt-10" animate="div-slide-up">
        <div className="max-md:col-span-6 col-span-2 h-[20vh] glass-panel">Reactjs</div>
        <div className="max-md:col-span-6 col-span-2 h-[20vh] glass-panel">Vuejs</div>
        <div className="max-md:col-span-12 col-span-4 h-[20vh] glass-panel">lorem1</div>
        <div className="max-md:col-span-12 col-span-1 h-[20vh] glass-panel">lorem3</div>
        <div className="max-md:col-span-12 col-span-3 h-[20vh] glass-panel">lorem4</div>
        <div className="max-md:col-span-12 col-span-6 h-[20vh] glass-panel">lorem5</div>
        <div className="max-md:col-span-12 col-span-3 h-[20vh] glass-panel">lorem6</div>
        <div className="max-md:col-span-12 col-span-1 h-[20vh] glass-panel">lorem7</div>
        <div className="max-md:col-span-12 col-span- h-[20vh] glass-panel">lorem8</div>
      </div>
      <div className="h-[100dvh] grid grid-cols-12 gap-1"></div>
    </div>
  );
};

export default AboutPage;
