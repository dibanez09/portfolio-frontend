import React from 'react';
import { useState } from 'react';

//icons
import BarIcon from './icons/BarIcon';
import CloseIcon from './icons/CloseIcon';
const NavBar = ({ menu }) => {
  const [mobileMenuIsOpen, setmobileMenuIsOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span class="logo color-accent">Dan.dev</span>
            {/* <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            /> */}
          </a>
        </div>

        <div className="flex flex-row max-lg:hidden gap-10">
          {menu.map((item, i) => (
            <div key={i}>
              <button
                href={item?.link}
                className="text-sm/6 font-semibold text-gray-900 hover:text-green-900 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                {item?.title}
              </button>
            </div>
          ))}
        </div>

        {/* Mobile view toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setmobileMenuIsOpen(!mobileMenuIsOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            {mobileMenuIsOpen ? (
              <CloseIcon />
            ) : (
              <BarIcon class="w-6 h-6 text-red-100 dark:text-white focus:animate-ping" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
