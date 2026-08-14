import { useState, useEffect, useRef, Suspense, useProgress } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// cmponents
import MainHeader from '../components/texts/MainHeader';
import SubHeader from '../components/texts/SubHeader';
import MainContainer from '../components/layouts/MainContainer';
import MainButton from '../components/buttons/MainButton';

import AngleDownIcon from '../components/icons/AngleDownIcon';
import HomePageScene from '../components/3d/scene/HomePageScene';

import { useLocation } from 'react-router-dom';

import {
  useGsapWordSlideUp,
  useGsapDivSlideUp,
  useGsapSlide,
  useGsapSlideAlternate,
  useGsapHorizontalScroll
} from '../hooks/gsap/gsapAnimation';

//icons
import ReactIcon from '../components/icons/ReactIcon';
import VueIcon from '../components/icons/VueIcon';
const HomePage = () => {
  // states
  const users = useSelector((state) => state.users);
  const app = useSelector((state) => state.app);

  const location = useLocation();
  const { hash, pathname, search } = location;

  // refs
  const aboutSection = useRef(null);

  // animations
  useGsapWordSlideUp();
  useGsapDivSlideUp();
  useGsapSlideAlternate();
  useGsapHorizontalScroll();

  // functions
  const scrollToAbout = () => {
    aboutSection.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <div
        className="fixed top-0 left-0 -right-[50vw] h-[100vh] z-0"
        style={{ pointerEvents: 'auto' }}>
        <HomePageScene />
      </div>
      <div style={{ pointerEvents: 'none' }}>
        <MainContainer>
          <div className="grid grid-cols-12 h-[100vh] w-[calc(100vw -10px)] absolute left-0 right-0 overflow-y-hidden">
            <div className="col-span-6 flex overflow-hidden max-sm:h-[30vh] gradientMask max-sm:col-span-12">
              <img
                className="w-[100%] object-cover"
                src={`${app.backendURL}/images/bg.webp`}
                alt="cover"
              />
            </div>
            {/* {!app.preloading ? (

            ) : null} */}
            <div className="max-sm:col-span-12 col-span-6 max-sm:row-span-40 max-sm:-mt-20 -ml-50 max-sm:ml-2 z-10">
              <div className="uppercase text-[6vw] font-Audiowide outline-text mt-[6vw]">
                I'm {users.value?.profileId?.nickname}
              </div>
              <div>
                <div
                  animate="slide-alternate"
                  className="uppercase text-[8vw] font-Audiowide text-white font-bold -mt-[5.6vw]">
                  {users.value?.profileId?.occupationSubCategory}
                </div>
              </div>
              <div>
                <div
                  className="uppercase text-[6vw] font-Audiowide outline-text -mt-[5.6vw]"
                  animate="slide-alternate">
                  {users.value?.profileId?.occupation}
                </div>
              </div>
              <div className="mt-[10vh]" style={{ pointerEvents: 'auto' }}>
                <MainButton className="w-[160px]">Explore Portfolio</MainButton>
                <MainButton className="w-[160px]">Download Resume</MainButton>
              </div>
            </div>
            <div
              className="text-2xl absolute bottom-10 left-0 right-0 mx-auto flex justify-center z-1"
              style={{ pointerEvents: 'auto' }}>
              <AngleDownIcon
                onClick={() => scrollToAbout()}
                className="animate-bounce h-10 w-10 hover:cursor-pointer"
              />
            </div>
          </div>
          <div className="h-[100vh]"></div>
          <div ref={aboutSection}>
            <div className="h-[100dvh] grid grid-cols-12 gap-1">
              <div className="max-md:col-span-7 col-span-7 flex items-center">
                <div className="z-1" animate="word-slide-up">
                  <MainHeader>About me</MainHeader>
                  <SubHeader className="mt-4">
                    a passionate full stack developer with bold ideas, dedicated to treating every
                    project as my own — turning concepts into reality through modern technology.
                  </SubHeader>
                </div>
              </div>
              <div className="max-md:col-span-7 col-span-7">
                <div className="z-1" animate="word-slide-up">
                  <MainHeader>Tech Stack</MainHeader>
                </div>
                <div class="flex" animate="div-slide-up">
                  <div class="flex justify-center items-center m-1 px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                    Sample Chip 1
                  </div>
                  <div class="flex justify-center items-center m-1 px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                    Sample Chip 2
                  </div>
                  <div class="flex justify-center items-center m-1 px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                    Sample Chip 3
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="grid grid-cols-12 gap-1">
              <div className="col-span-7 flex items-center">
                <div className="z-1" animate="word-slide-up">
                  <MainHeader>Tech Stack</MainHeader>
                  <SubHeader className="mt-10">Frontend</SubHeader>
                </div>
              </div>
            </div> */}
            <div id="horizontalContainer" className="z-10" animate="horizontal-scroll">
              <div className="content">
                <div className="flex flex-col items-center justify-center" animate="word-slide-up">
                  <div className="mr-20">
                    <div className="uppercase text-[10vw] font-Audiowide text-white font-bold">
                      recent
                    </div>
                  </div>
                  <div className="-mt-[7vw] ml-20">
                    <div className="uppercase text-[8vw] font-Audiowide outline-text">projects</div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="grid grid-cols-12 gap-1">
                  <div className="col-span-6 flex items-center justify-center">
                    <div className="z-1 border-2">
                      <MainHeader>Project 1</MainHeader>
                      {/* <SubHeader className="mt-10">Frontend</SubHeader> */}
                    </div>
                  </div>
                  <div className="col-span-6 flex items-center justify-center">
                    <div className="z-1 border-2">
                      <MainHeader>Info</MainHeader>
                      {/* <SubHeader className="mt-10">Frontend</SubHeader> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="">content 2</div>
              </div>
              <div className="content">
                <div className="">content 3</div>
              </div>
              <div className="content">
                <div className="">content 4</div>
              </div>
              <div className="content">
                <div className="">content 5</div>
              </div>
            </div>
          </div>
        </MainContainer>
      </div>
    </div>
  );
};

export default HomePage;
