import React from 'react';
import { Route, Router, Routes } from 'react-router';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <div class="mx-[10vw]">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
