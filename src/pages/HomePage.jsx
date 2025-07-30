import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Spline from '@splinetool/react-spline';

// cmponents
import MainHeader from '../components/texts/MainHeader';
import SubHeader from '../components/texts/SubHeader';
import MainContainer from '../components/layouts/MainContainer';

import AngleDownIcon from '../components/icons/AngleDownIcon';

const HomePage = () => {
  // states
  const users = useSelector((state) => state.users);
  const app = useSelector((state) => state.app);

  // debugging
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY); // Or window.scrollX for horizontal
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures it runs only on mount/unmount
  return (
    <div>
      {/* <div className="fixed top-0 text-white">
        <h1>Current Scroll Position: {scrollPosition}px</h1>
      </div> */}
      <div className="-mt-[100vh]">
        <div className="sticky top-0 left-0 h-[100vh] w-full z-10">
          <Spline scene={app.landingPageSpline} loading-anim-type="spinner-small-light" />
        </div>
        <MainContainer>
          <div className="grid grid-cols-12 h-[100vh] w-[calc(100vw -10px)] absolute left-0 right-0">
            <div className="col-span-5 flex overflow-hidden max-sm:h-[20vh] gradientMask max-sm:col-span-12">
              <img
                className="w-[100%] object-cover"
                src={`${app.backendURL}/images/bg.webp`}
                alt="cover"
              />
            </div>
            {!app.preloading ? (
              <div className="max-sm:col-span-12 col-span-7 max-sm:row-span-40">
                <div className="grid grid-cols-12 mt-[10dvh] -ml-20 max-sm:mt-2 max-sm:ml-2">
                  <div className="col-span-12">
                    <p className="text-2xl text-shadow-lg animate-fadeIn">
                      Hey, I'm {users.value?.profileId?.nickname}
                    </p>
                  </div>

                  <div className="col-span-12 mt-4">
                    <div className="z-0">
                      <p
                        className="text-7xl text-shadow-lg animate-fadeIn"
                        style={{ animationDelay: '1s', opacity: 0 }}>
                        {users.value?.profileId?.occupationSubCategory}
                      </p>
                    </div>
                  </div>

                  <div className="col-span-12">
                    <p
                      className="text-5xl text-white uppercase font-ISOCP animate-fadeIn"
                      style={{ animationDelay: '1.5s', opacity: 0 }}>
                      {users.value?.profileId?.occupation}
                    </p>
                  </div>

                  <div className="col-span-12 mt-12">
                    <div>
                      <p
                        className="text-2xl text-shadow-lg animate-fadeIn max-w-[380px]"
                        style={{ animationDelay: '2.5s', opacity: 0 }}>
                        {users.value?.profileId?.tagline}.
                      </p>
                    </div>
                  </div>

                  <div
                    className="text-2xl col-span-12 absolute bottom-10 animate-fadeIn flex"
                    style={{ animationDelay: '2.6s', opacity: 0 }}>
                    My Tech Stack
                    <AngleDownIcon className="" />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="h-[100vh]"></div>
          <div className="h-[600px] grid grid-cols-12 gap-1">
            <div className="col-span-7 flex items-center">
              <div className="animate-appear">
                <MainHeader>MongoDB</MainHeader>
                <SubHeader>
                  A NoSQL database used to store data in flexible, JSON-like documents.
                </SubHeader>
              </div>
            </div>
            <div className="col-span-5"></div>
          </div>
          <div className="h-[600px] grid grid-cols-12 gap-1 justify-items-end">
            <div className="col-span-5"></div>
            <div className="col-span-7 flex items-center text-right">
              <div className="animate-appear">
                <MainHeader>Express.js</MainHeader>
                <SubHeader>
                  A lightweight backend framework for building APIs with Node.js.
                </SubHeader>
              </div>
            </div>
          </div>
          <div className="h-[600px] grid grid-cols-12 gap-1">
            <div className="col-span-7 flex items-center">
              <div className="animate-appear">
                <MainHeader>React</MainHeader>
                <SubHeader>
                  A JavaScript library for building fast and interactive user interfaces.
                </SubHeader>
              </div>
            </div>
            <div className="col-span-5"></div>
          </div>
          <div className="h-[600px] grid grid-cols-12 gap-1 justify-items-end">
            <div className="col-span-5"></div>
            <div className="col-span-7 flex items-center text-right">
              <div className="animate-appear">
                <MainHeader>Node.js</MainHeader>
                <SubHeader>
                  A JavaScript runtime that lets you run code on the server side.
                </SubHeader>
              </div>
            </div>
          </div>

          <div className="h-[600px] grid grid-cols-12 gap-1">
            <div className="col-span-7 flex items-center">
              <div className="animate-appear">
                <MainHeader>Redux</MainHeader>
                <SubHeader>
                  A state management library for handling and centralizing app data in React.
                </SubHeader>
              </div>
            </div>
            <div className="col-span-5"></div>
          </div>
          <div className="h-[600px] grid grid-cols-12 gap-1 justify-items-end">
            <div className="col-span-5"></div>
            <div className="col-span-7 flex items-center text-right">
              <div className="animate-appear">
                <MainHeader>Tailwind CSS</MainHeader>
                <SubHeader>
                  A utility-first CSS framework for quickly styling responsive, modern UIs.
                </SubHeader>
              </div>
            </div>
          </div>
          <div className="h-[700px] grid grid-cols-12 gap-1">
            <div className="col-span-7 flex items-center">
              <div className="animate-appear">
                <MainHeader>MERN Stack</MainHeader>
                <SubHeader>
                  I primarily use the MERN stack to build modern web applications. It provides a
                  seamless full-stack development experience with efficient data handling, fast user
                  interface rendering, and a flexible, scalable architecture.
                </SubHeader>
              </div>
            </div>
            <div className="col-span-5"></div>
          </div>
        </MainContainer>
      </div>
      {/* <div>
        <div className="sticky top-0"></div>
        <div className="sticky h-[calc(100vh-70px)] border-3">other info</div>
      </div> */}
    </div>
  );
};

export default HomePage;
