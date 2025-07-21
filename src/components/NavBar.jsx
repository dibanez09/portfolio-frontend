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
    <header className="absolute bg-transparent px-4 mx-auto max-w-7xl lg:px-8">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between pt-6">
        <div className="flex lg:flex-1">
          <a onClick={() => navigate('/')} className="-m-1.5 p-1.5">
            <span className="logo text-white animate-spacing">
              {users.value[0]?.profileId?.nickname}
            </span>
            <span className="logo text-accent animate-spacing">.dev</span>
          </a>
        </div>

        <div className="flex flex-row max-lg:hidden gap-10">
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
              <BarIcon className="w-6 h-6 text-red-100 text-white" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
