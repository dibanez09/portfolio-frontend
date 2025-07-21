import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import FacebookIcon from '../components/icons/FacebookIcon';
import GithubIcon from '../components/icons/GithubIcon';

import pic from '../assets/images/profile.jpg';
import indexbg from '../assets/images/index.png';
import { fetchUsers } from '../state/reducers/userReducer';

const HomePage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <div className="grid grid-cols-6 md:grid-cols-12 gap-1 h-[calc(100vh)] mr-12">
        <div className="col-span-7 flex overflow-hidden">
          <img className="w-[100%] object-cover" src={indexbg} alt="avatar" />
        </div>
        <div className="col-span-5 -ml-50 font-abel relative">
          <div className="grid grid-cols-12">
            <div className="col-span-12 mt-[20dvh]">
              <p className="text-2xl">Hey, I'm {users.value[0]?.profileId?.nickname}</p>
            </div>

            <div className="col-span-12 mt-6 relative">
              <div className="rounded-full bg-neutral-700 w-48 h-48 absolute top-0 left-54 -z-1"></div>
              <div className="rounded-full bg-neutral-700 w-10 h-10 absolute -top-20 left-100 -z-1"></div>
              <div className="z-0">
                <p className="text-8xl font-abel">
                  {users.value[0]?.profileId?.occupationSubCategory}
                </p>
              </div>
            </div>
            <div className="col-span-12">
              <p className="text-6xl text-white uppercase font-ISOCP">
                {users.value[0]?.profileId?.occupation}
              </p>
            </div>
            <div className="col-span-12 mt-12">
              <p className="text-3xl">
                Subheading that sets up context, shares more info about the website, or generally
                gets people psyched to keep scrolling.
              </p>
            </div>

            <div className="col-span-12">
              <button
                type="button"
                class="mt-2 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                Lets Talk
              </button>
            </div>
            <div className="col-span-12 absolute bottom-10 w-[100%]">
              <div className="grid grid-cols-12">
                <div className="col-span-6">
                  <div class="flex -space-x-1">
                    <img
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      class="inline-block size-6 rounded-full ring-2 ring-white"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      class="inline-block size-6 rounded-full ring-2 ring-white"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      alt=""
                      class="inline-block size-6 rounded-full ring-2 ring-white"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      class="inline-block size-6 rounded-full ring-2 ring-white"
                    />
                  </div>
                </div>
                <div className="col-span-6 flex justify-end gap-2">
                  <FacebookIcon
                    onClick={() => window.open('https://www.facebook.com/dan2498', '_blank')}
                    className="w-5 h-5 text-white rounded-full ring-1"
                  />
                  <GithubIcon
                    onClick={() => window.open('https://github.com/dibanez09', '_blank')}
                    className="w-5 h-5 text-white rounded-full ring-1"
                  />
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
