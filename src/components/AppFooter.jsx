import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// components
import MainButton from './buttons/MainButton';
import MainContainer from './layouts/MainContainer';
import ScrollToTop from './ScrollToTop';

//icons
import FacebookIcon from './icons/FacebookIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import GithubIcon from './icons/GithubIcon';
// functions
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
const AppFooter = () => {
  const users = useSelector((state) => state.users);
  const app = useSelector((state) => state.app);

  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const location = useLocation();

  const { hash, pathname, search } = location;
  return (
    <>
      <div id="footer" className="z-1 w-screen h-screen pointer-events-none flex items-end">
        <MainContainer className="w-screen">
          <div className="grid grid-cols-12 gap-2 relative">
            <div className="col-span-4 flex items-center py-6">
              <div className="flex flex-col">
                <div className="text-6xl max-[882px]:text-4xl">
                  <a>
                    <span className="logo text-accent animate-spacing">
                      {users.value?.profileId?.nickname}
                    </span>
                    <span className="logo text-white animate-spacing">.dev</span>
                  </a>
                </div>
                <div className="mt-2 uppercase text-2xl max-[882px]:text-sm">
                  <span>{users.value?.profileId?.tagline}</span>
                </div>
                <div className="mt-30">
                  <span>{users.value?.contactId?.email}</span>
                </div>
                <div className="flex gap-2 text-gray-400">
                  <div className="max-[882px]:text-sm">FOLLOW ME</div>
                  {users.value?.socialLinkId?.facebook ? (
                    <div>
                      <FacebookIcon
                        className="w-5 h-5 text-gray-400 hover:text-white hover:cursor-pointer pointer-events-auto"
                        onClick={() => window.open(users.value?.socialLinkId?.facebook, '_blank')}
                      />
                    </div>
                  ) : null}
                  {users.value?.socialLinkId?.linkedin ? (
                    <div>
                      <LinkedinIcon
                        className="w-5 h-5 text-gray-400 hover:text-white hover:cursor-pointer pointer-events-auto"
                        onClick={() => window.open(users.value?.socialLinkId?.linkedin, '_blank')}
                      />
                    </div>
                  ) : null}
                  {users.value?.socialLinkId?.github ? (
                    <div>
                      <GithubIcon
                        className="w-5 h-5 text-gray-400 hover:text-white hover:cursor-pointer pointer-events-auto"
                        onClick={() => window.open(users.value?.socialLinkId?.github, '_blank')}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="col-span-8 py-6 max-[944px]:text-right">
              <div>
                {app.navigations.map((item, i) => {
                  return (
                    <div key={i}>
                      <button
                        onClick={() => navigate(item?.link)}
                        className={`font-semibold text-gray-400 hover:text-white-1000 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ${pathname == item?.link ? 'text-white' : ''} hover:cursor-pointer pointer-events-auto`}>
                        {item?.title}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-span-12 flex items-center border-t-1 py-6">
              <div className="grid grid-cols-12 gap-2 w-[100%]">
                <div className="col-span-6 text-sm text-gray-400 uppercase">
                  <div>Copyright &copy; {currentYear}</div>
                </div>
              </div>
            </div>
            <ScrollToTop className="absolute bottom-20 right-2 z-1000 animate-bounce" />
          </div>
        </MainContainer>
      </div>
    </>
  );
};

export default AppFooter;
