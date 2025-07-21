import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import FacebookIcon from '../components/icons/FacebookIcon';
import GithubIcon from '../components/icons/GithubIcon';

import pic from '../assets/images/profile.jpg';
import { fetchUsers } from '../state/reducers/userReducer';

const HomePage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <div className="grid grid-cols-6 md:grid-cols-12 gap-1 h-[calc(100vh-72px)]">
        <div className="col-span-6 flex">
          <div className="my-auto mx-12">
            <div className="relative text-center">
              <img className="w-full p-1 grayscale" src={pic} alt="avatar" />
              <p
                className="text-5xl md:text-6xl text-white font-ISOCP uppercase absolute top-0 bottom-0 -left-5 md:-left-6"
                style={{ writingMode: 'vertical-rl' }}>
                {users.value[0]?.profileId?.occupation}
              </p>
              <p
                className="text-3xl font-ISOCP uppercase absolute top-0 bottom-0 -left-14 text-secondary"
                style={{ writingMode: 'vertical-rl' }}>
                {users.value[0]?.profileId?.occupationSubCategory}
              </p>

              <div className="absolute top-[20%] -right-10">
                <p className="text-3xl font-ISOCP text-secondary text-shadow-lg/30">
                  {users.value[0]?.profileId?.nickname}
                </p>
                <p className="text-3xl font-ISOCP text-white text-shadow-lg/30 tracking-[10px]">
                  {users.value[0]?.profileId?.lastname}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="grid grid-cols-3 content-center gap-4 h-[calc(100vh-80px)]">
            <div className="col-span-3">
              <p className="text-2xl">
                Subheading that sets up context, shares more info about the website, or generally
                gets people psyched to keep scrolling.
              </p>
              <div className="my-2 justify-end flex gap-2">
                <FacebookIcon
                  onClick={() => window.open('https://www.facebook.com/dan2498', '_blank')}
                  className="w-4 h-4 text-accent rounded-full ring-1 "
                />
                <GithubIcon
                  onClick={() => window.open('https://github.com/dibanez09', '_blank')}
                  className="w-4 h-4 text-accent rounded-full ring-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
