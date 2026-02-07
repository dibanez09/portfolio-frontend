import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './state/reducers/userReducer';

// components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import NavBar from './components/NavBar';
import PreloadOverlay from './components/PreloadOverlay';

import { useGLTF, useTexture } from '@react-three/drei';
import AppFooter from './components/AppFooter';
const App = () => {
  // state
  const app = useSelector((state) => state.app);

  const location = useLocation();
  const { hash, pathname, search } = location;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }, [pathname]);

  // function
  function preloadAssets() {
    useGLTF.preload('/landing-page.glb');
  }

  preloadAssets();
  return (
    <>
      {/* px-4 mx-auto max-w-7xl lg:px-8  */}
      <div>
        <>
          {app.preloading ? <PreloadOverlay /> : ''}
          {app.preloading ? (
            ''
          ) : (
            <>
              <NavBar menu={app.navigations} />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>

              <div className="flex">
                <AppFooter />
              </div>
            </>
          )}
        </>
      </div>
    </>
  );
};

export default App;
