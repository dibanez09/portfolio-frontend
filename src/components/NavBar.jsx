import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

//icons
import BarIcon from './icons/BarIcon';
import CloseIcon from './icons/CloseIcon';
const NavBar = ({ menu, fname }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { hash, pathname, search } = location;

  const users = useSelector((state) => state.users);
  const [mobileMenuIsOpen, setmobileMenuIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 w-full z-10000 ${mobileMenuIsOpen ? 'backdrop-blur-sm' : ''}`}>
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div className="flex lg:flex-1">
            <a onClick={() => navigate('/')} className="-m-1.5 p-1.5">
              <span className="logo text-white animate-spacing">
                {users.value?.profileId?.nickname}
              </span>
              <span className="logo text-accent animate-spacing">.dev</span>
            </a>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-10">
                {menu.map((item, i) => (
                  <div key={i}>
                    <button
                      onClick={() => navigate(item?.link)}
                      className={`text-sm/6 font-semibold text-white-900 hover:text-white-1000 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ${pathname == item?.link ? 'text-white' : ''}`}>
                      {item?.title}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 sm:hidden">
            <button
              onClick={() => setmobileMenuIsOpen(!mobileMenuIsOpen)}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded="false"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                data-slot="icon"
                aria-hidden="true"
                class="block size-6">
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                data-slot="icon"
                aria-hidden="true"
                class="hidden size-6">
                <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuIsOpen ? (
        <div id="mobile-menu" class="sm:hidden backdrop-blur-sm h-[100vh]">
          <div class="space-y-1 px-2 pt-2 pb-3">
            {menu.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => {
                    setmobileMenuIsOpen(false);
                    navigate(item?.link);
                  }}
                  className={`text-sm/6 font-semibold text-white-900 hover:text-white-1000 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ${pathname == item?.link ? 'text-white' : ''} block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}>
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
