// import react, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Landing/Home';
import Menu from './components/Nav/Menu';
import Dashboard from './pages/Dashboard/Dashboard';
import Deposit from './pages/Dashboard/Deposit';
import Profile from "./pages/Dashboard/Profile"
import Withdrawal from './pages/Dashboard/Withdrawal';
import Wallet from './pages/Dashboard/Wallet';
import Signup from "./pages/Landing/Signup";
import SignIn from "./pages/Landing/SignIn";


const App = () => {
  return (
    <div
      className="flex flex-col lg:flex-row relative right-0 bg-primary h-screen overflow-y-scroll"
      data-theme="myTheme"
    >
      <Menu />
      <div className="hidden lg:block w-20 mb-24"></div>
      <div className=" lg:py-10 py-4 px-2 lg:px-0 relative right-0 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/user/profile" element={<Profile/>} />
          <Route path="/withdrawal" element={<Withdrawal />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
