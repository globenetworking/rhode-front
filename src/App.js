// import react, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Landing/Home';
import Menu from './components/Nav/Menu';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
  return (
    <div
      className="flex flex-col lg:flex-row relative bg-primary h-screen overflow-y-scroll overflow-x-hidden"
      data-theme="myTheme"
    >
      <Menu />
      <div className="hidden lg:block w-20 mb-24"></div>
      <div className="container py-10 px-2 lg:px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
