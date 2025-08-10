import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Spline from '@splinetool/react-spline';

// cmponents
import MainHeader from '../components/texts/MainHeader';
import SubHeader from '../components/texts/SubHeader';
import MainContainer from '../components/layouts/MainContainer';

import AngleDownIcon from '../components/icons/AngleDownIcon';

import { Canvas } from '@react-three/fiber';
import HomePageScene from '../components/3d/scene/HomePageScene';

const HomePage = () => {
  // states
  const users = useSelector((state) => state.users);
  const app = useSelector((state) => state.app);
  return (
    <div>
      <div
        className="fixed top-0 left-0 -right-[50vw] h-[100vh] z-0"
        style={{ pointerEvents: 'auto' }}>
        <Canvas>
          <HomePageScene />
        </Canvas>
      </div>
      <div style={{ pointerEvents: 'none' }}>
        <MainContainer>
          <div className="grid grid-cols-12 h-[100vh] w-[calc(100vw -10px)] absolute left-0 right-0">
            <div className="col-span-6 flex overflow-hidden max-sm:h-[20vh] gradientMask max-sm:col-span-12">
              <img
                className="w-[100%] object-cover"
                src={`${app.backendURL}/images/bg.webp`}
                alt="cover"
              />
            </div>
            {!app.preloading ? (
              <div className="max-sm:col-span-12 col-span-6 max-sm:row-span-40 mt-20 -ml-50 max-sm:ml-2">
                <div className="uppercase text-[3vw] font-Audiowide outline-text mt-[6vw]">
                  I'm {users.value?.profileId?.nickname}
                </div>
                <div className="animate-slideInLeft">
                  <div className="uppercase text-[5vw] font-Audiowide text-white font-bold -mt-[3.2vw] animate-slideOutLeftOnScroll">
                    {users.value?.profileId?.occupationSubCategory}
                  </div>
                </div>
                <div className="animate-slideInRight">
                  <div className="uppercase text-[4vw] font-Audiowide outline-text -mt-[3.6vw] animate-slideOutRightOnScroll">
                    {users.value?.profileId?.occupation}
                  </div>
                </div>
              </div>
            ) : null}

            <div className="text-2xl absolute bottom-10 left-0 right-0 mx-auto flex justify-center">
              <AngleDownIcon className="animate-bounce h-10 w-10" />
            </div>
          </div>
          <div className="h-[100vh]"></div>
          {/* <div>
            <div className="uppercase text-[3vw] font-Audiowide outline-text mt-[1vh]">My</div>
            <div className="uppercase text-[5vw] font-Audiowide text-white font-bold -mt-[3.1vw]">
              Tech
            </div>
            <div className="uppercase text-[3vw] font-Audiowide outline-text -mt-[3vw]">Stack</div>
          </div> */}
          <div>
            <div className="h-[100dvh] grid grid-cols-12 gap-1">
              <div className="max-md:col-span-7 col-span-7 flex items-center">
                <div className="z-1">
                  <MainHeader animate="word-slide-up">About me</MainHeader>
                  <SubHeader className="mt-10" animate="word-slide-up">
                    a passionate full stack developer with bold ideas, dedicated to treating every
                    project as my own — turning concepts into reality through modern technology.
                  </SubHeader>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-1">
              <div className="col-span-7 flex items-center">
                <div className="z-1">
                  <MainHeader animate="word-slide-up">Tech Stack</MainHeader>
                  {/* <SubHeader className="mt-10">Frontend</SubHeader> */}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-2 mt-10" animate="div-slide-up">
              <div className="max-md:col-span-6 col-span-2 h-[20vh] glass-panel">Reactjs</div>
              <div className="max-md:col-span-6 col-span-2 h-[20vh] glass-panel">Vuejs</div>
              <div className="max-md:col-span-12 col-span-4 h-[20vh] glass-panel">lorem</div>
              <div className="max-md:col-span-12 col-span-3 h-[20vh] glass-panel">lorem</div>
              <div className="max-md:col-span-12 col-span-1 h-[20vh] glass-panel">lorem</div>
              <div className="max-md:col-span-12 col-span-3 h-[20vh] glass-panel">lorem</div>
              <div className="max-md:col-span-12 col-span-6 h-[20vh] glass-panel">lorem</div>
              <div className="max-md:col-span-12 col-span-3 h-[20vh] glass-panel">lorem</div>
              <div className="max-md:col-span-12 col-span-1 h-[20vh] glass-panel">lorem</div>
              <div className="max-md:col-span-12 col-span- h-[20vh] glass-panel">lorem</div>
            </div>
            <div className="h-[100dvh] grid grid-cols-12 gap-1"></div>
          </div>
        </MainContainer>
      </div>
    </div>
  );
};

export default HomePage;
