import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

//icons
import BarIcon from './icons/BarIcon';
import CloseIcon from './icons/CloseIcon';
const NavBar = ({ menu, fname }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { hash, pathname, search } = location;

  const users = useSelector((state) => state.users);
  const [mobileMenuIsOpen, setmobileMenuIsOpen] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useGSAP(() => {
    gsap.to('#nav-bar', {
      opacity: 0,
      top: -70,
      duration: 0.5,
      scrollTrigger: {
        trigger: '#footer', // Or a specific element near the bottom of the page
        start: 'top 10%', // When the bottom of the trigger hits the bottom of the viewport
        end: 'bottom top', // When the bottom of the trigger hits the top of the viewport
        toggleActions: 'play none none reverse' // Play on entering, reverse on leaving
        // Consider adding 'markers: true' for debugging during development
      }
    });
  }, []);
  return (
    <nav
      id="nav-bar"
      className={`fixed top-0 w-full z-1000 ${scrollPosition || mobileMenuIsOpen ? 'backdrop-blur-sm' : ''}`}
      style={{ pointerEvents: 'auto' }}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-[70px] items-center justify-between">
          <div className="flex lg:flex-1">
            <a onClick={() => navigate('/')} className="-m-1.5 p-1.5">
              <span className="logo text-xl text-accent animate-spacing">
                {users.value?.profileId?.nickname}
              </span>
              <span className="logo text-xl text-white animate-spacing">.dev</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-10">
                {menu.map((item, i) => (
                  <div key={i}>
                    <button
                      onClick={() => navigate(item?.link)}
                      className={`animate-fadeIn text-sm/6 font-semibold text-white-900 hover:text-white-1000 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ${pathname == item?.link ? 'text-white' : ''} hover:cursor-pointer`}
                      style={{ animationDelay: i, opacity: 0 }}>
                      {item?.title}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 sm:hidden">
            <button
              onClick={() => setmobileMenuIsOpen(!mobileMenuIsOpen)}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded="false"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              {mobileMenuIsOpen ? <CloseIcon /> : <BarIcon />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuIsOpen ? (
        <div id="mobile-menu" className="sm:hidden backdrop-blur-sm h-[100vh]">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {menu.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => {
                    setmobileMenuIsOpen(false);
                    navigate(item?.link);
                  }}
                  className={`text-sm/6 w-full font-semibold text-gray-400 hover:text-white-1000 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 px-3 py-2 text-base font-medium hover:bg-neutral-700/20 ${pathname == item?.link ? 'text-white' : ''}`}>
                  {item?.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ''
      )}
    </nav>
  );
};

export default NavBar;
