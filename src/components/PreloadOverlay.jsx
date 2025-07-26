import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchUsers } from '../state/reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';

//icons
import Ripples from './icons/animated/Ripples';
import FadeStagerCircle from './icons/animated/FadeStagerCircle';

import { setPreloading } from '../state/reducers/appReducer';

const PreloadOverlay = ({ menu, fname }) => {
  const [zoomOut, setZoomout] = useState(false);
  const location = useLocation();
  const { hash, pathname, search } = location;

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (users.status == 'succeeded') {
      setTimeout(() => {
        dispatch(setPreloading(false));
      }, 5000);

      setTimeout(() => {
        setZoomout(true);
      }, 4000);
    }
  }, [users]);

  return (
    <div
      className={`fixed top-0 left-0 h-[100dvh] w-[100dvw] backdrop-blur-sm z-1000 flex justify-center items-center ${zoomOut ? 'animate-zoomOut' : ''}`}>
      {users.status == 'succeeded' ? (
        <div className="absolute text-6xl animate-position" style={{ animationDelay: '6s' }}>
          <div>
            <span className="logo text-accent animate-nickname">
              {users.value?.profileId?.nickname}
            </span>
            <span className="logo text-white animate-spacing">.dev</span>
          </div>
          <div
            className="fixed logo text-white text-4xl animate-fadeInBurstFade"
            style={{ animationDelay: '1.5s', opacity: 0, whiteSpace: 'nowrap' }}>
            be different
          </div>
        </div>
      ) : (
        <div>Connecting to server</div>
      )}
      {users.status != 'succeeded' ? <FadeStagerCircle width="100" height="100" /> : <Ripples />}
    </div>
  );
};

export default PreloadOverlay;
