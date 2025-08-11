import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
const App = () => {
  const app = useSelector((state) => state.app);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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
              <NavBar
                menu={[
                  { title: 'Home', link: '/' },
                  { title: 'About', link: '/about' },
                  { title: 'Portfolio', link: '/portfolio' },
                  { title: 'Contact', link: '/contact' }
                ]}
              />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </>
          )}
        </>
      </div>
    </>
  );
};

export default App;
