// import react, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Landing/Home';
import Menu from './components/Nav/Menu';
import Dashboard from './pages/Dashboard/Dashboard';
import Deposit from './pages/Dashboard/Deposit';
import Profile from './pages/Dashboard/Profile';
import Withdrawal from './pages/Dashboard/Withdrawal';
import Wallet from './pages/Dashboard/Wallet';
import Signup from './pages/Landing/Signup';
import SignIn from './pages/Landing/SignIn';
import Collections from './pages/Landing/Collections';
import Admin from './pages/Admin/';
import { Suspense } from 'react';
import { Code, Instagram } from 'react-content-loader';
import MyLoader from './loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div
      className="flex flex-col lg:flex-row relative right-0 bg-primary h-screen overflow-y-scroll"
      data-theme="myTheme"
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Menu />
      <div className="hidden lg:block w-20 mb-24"></div>
      <div className=" lg:py-10 py-4 px-2 lg:px-0 relative right-0 w-full">
        <Suspense fallback={<MyLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/user/dashboard" element={<Dashboard />} />
            <Route path="/user/deposit" element={<Deposit />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="user/withdrawal" element={<Withdrawal />} />
            <Route path="/user/wallet" element={<Wallet />} />
            <Route path="/admin/*" element={<Admin />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
