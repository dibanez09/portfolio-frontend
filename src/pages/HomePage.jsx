import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import NavBar from '../components/NavBar';

import pic from '../assets/images/profile.webp';
import { fetchUsers } from '../state/reducers/userReducer';

const HomePage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log('test', users);

  useEffect(() => {
    dispatch(fetchUsers());
    console.log(users);
  }, [dispatch]);
  return (
    <div>
      <NavBar
        menu={[
          { title: 'Home', link: '/' },
          { title: 'About', link: '/about' },
          { title: 'Services', link: '/services' },
          { title: 'Portfolio', link: '/portfolio' },
          { title: 'Contact', link: '/contact' }
        ]}
      />
      <div class="grid grid-flow-col grid-rows gap-1 h-[calc(100vh-80px)]">
        <div class="row-span-1 col-span-7">
          <div class="grid grid-cols-3 content-center gap-4 h-[calc(100vh-80px)]">
            <div class="col-span-3" style={{ border: '1px solid red' }}>
              <p class="text-5xl">Hi, Im Dan Ibañez</p>
            </div>
            <div class="col-span-3" style={{ border: '1px solid red' }}>
              <p class="text-4xl">Full Stack Developer</p>
            </div>
          </div>
        </div>
        <div class="row-span-1 col-span-3 flex">
          <div class="m-auto">
            <img
              class="h-[calc(50vh-80px)] p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={pic}
              alt="Rounded avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
