import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
// components
import MainButton from '../components/buttons/MainButton';

import FacebookIcon from '../components/icons/FacebookIcon';
import GithubIcon from '../components/icons/GithubIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';

// import indexbg from '../assets/images/index.png';
import bg from '../assets/images/bg.png';
import { fetchUsers } from '../state/reducers/userReducer';

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="z-10">
      <div className="grid grid-cols-6 md:grid-cols-12 gap-1 md:h-[calc(100vh)] min-md:mr-12">
        <div className="col-span-8 flex overflow-hidden max-md:h-[162px] gradientMask">
          <img className="w-[100%] object-cover" src={bg} alt="avatar" />
        </div>
        <div className="col-span-6 md:col-span-4 px-4 md:-ml-50 relative max-md:overflow-hidden max-md:h-[calc(100vh-168px)] md:mt-[60px]">
          <div className="grid grid-cols-12">
            <div className="col-span-12  md:mt-[10dvh]">
              <p className="text-2xl md:text-3xl text-shadow-lg animate-fadeIn">
                Hey, I'm {users.value?.profileId?.nickname}
              </p>
            </div>

            <div className="col-span-12 mt-4 md:mt-6 relative">
              <div className="absolute -top-20 left-100 -z-1">
                <div className="rounded-full bg-neutral-700 w-10 h-10 fixed"></div>
              </div>
              <div className="absolute top-0 left-54 -z-1">
                <div className="rounded-full bg-neutral-700 w-48 h-48 fixed"></div>
              </div>
              <div className="z-0">
                <p
                  className="text-7xl md:text-8xl text-shadow-lg animate-fadeIn"
                  style={{ animationDelay: '1s', opacity: 0 }}>
                  {users.value?.profileId?.occupationSubCategory}
                </p>
              </div>
            </div>
            <div className="col-span-12">
              <p
                className="text-5xl md:text-6xl text-white uppercase font-ISOCP animate-fadeIn"
                style={{ animationDelay: '1.5s', opacity: 0 }}>
                {users.value?.profileId?.occupation}
              </p>
            </div>
            <div className="col-span-12 mt-10 md:mt-12 min-h-50">
              <div>
                <p
                  className="text-2xl md:text-3xl text-shadow-lg/30 animate-fadeIn"
                  style={{ animationDelay: '2.5s', opacity: 0 }}>
                  {users.value?.profileId?.tagline}.
                </p>
              </div>

              <div
                className="col-span-12 animate-fadeIn"
                style={{ animationDelay: '2.5s', opacity: 0 }}>
                <MainButton onClick={() => navigate('/portfolio')}>Explore Portfolio</MainButton>
              </div>
            </div>
            <div className="col-span-12 min-md:col-span-12 absolute bottom-10 w-[calc(100%)] pr-8">
              <div className="grid grid-cols-12">
                <div className="col-span-6">
                  <div class="flex -space-x-1">
                    <img
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      class="inline-block size-6 rounded-full ring-2 ring-white animate-fadeIn"
                      style={{ animationDelay: '3s', opacity: 0 }}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      class="inline-block size-6 rounded-full ring-2 ring-white animate-fadeIn"
                      style={{ animationDelay: '3.1s', opacity: 0 }}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      alt=""
                      class="inline-block size-6 rounded-full ring-2 ring-white animate-fadeIn"
                      style={{ animationDelay: '3.2s', opacity: 0 }}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      class="inline-block size-6 rounded-full ring-2 ring-white animate-fadeIn"
                      style={{ animationDelay: '3.3s', opacity: 0 }}
                    />
                    <div
                      className=" size-6 rounded-full ring-2 ring-white bg-white text-center animate-fadeIn"
                      style={{ animationDelay: '3.4s', opacity: 0 }}>
                      4+
                    </div>
                  </div>
                </div>
                <div className="col-span-6 flex justify-end gap-2">
                  {users.value?.socialLinkId?.facebook && (
                    <FacebookIcon
                      onClick={() => window.open(users.value.socialLinkId.facebook, '_blank')}
                      className="w-5 h-5 text-stone-900 rounded-full ring-1 bg-gray-100 hover:cursor-pointer animate-fadeIn"
                      style={{ animationDelay: '3.5s', opacity: 0 }}
                    />
                  )}
                  {users.value?.socialLinkId?.github && (
                    <GithubIcon
                      onClick={() => window.open(users.value.socialLinkId.github, '_blank')}
                      className="w-5 h-5 text-stone-900 rounded-full ring-1 bg-gray-100 hover:cursor-pointer animate-fadeIn"
                      style={{ animationDelay: '3.6s', opacity: 0 }}
                    />
                  )}

                  {users.value?.socialLinkId?.linkedin && (
                    <LinkedinIcon
                      onClick={() => window.open(users.value.socialLinkId.linkedin, '_blank')}
                      className="w-5 h-5 text-stone-900 rounded-full ring-1 bg-gray-100 hover:cursor-pointer animate-fadeIn"
                      style={{ animationDelay: '3.6s', opacity: 0 }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
