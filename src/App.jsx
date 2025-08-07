import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import NavBar from './components/NavBar';
import PreloadOverlay from './components/PreloadOverlay';
import Index from './pages/Index';
const App = () => {
  const app = useSelector((state) => state.app);
  return (
    <>
      {/* px-4 mx-auto max-w-7xl lg:px-8  */}
      <div>
        <>
          {/* {app.preloading ? <PreloadOverlay /> : ''}
          {app.preloading ? (
            ''
          ) : (
            <NavBar
              menu={[
                { title: 'Home', link: '/' },
                { title: 'About', link: '/about' },
                { title: 'Portfolio', link: '/portfolio' },
                { title: 'Contact', link: '/contact' }
              ]}
            />
          )} */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/index" element={<Index />} />
          </Routes>
        </>
      </div>
    </>
  );
};

export default App;
