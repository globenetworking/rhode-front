import react, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import Login from "./Pages/Landing/Login";
// import User from "./Pages/User";
import Home from "./pages/Landing/Home";
import BottomMenu from "./components/Nav/bottomMenu";
// import Register from "./Pages/Landing/Register";
// import About from "./Pages/Landing/About";
// import Contact from "./Pages/Landing/Contact";
// import Owner from "./Pages/Owner";
// import Faqs from "./Pages/Landing/Faqs";
// import Terms from "./Pages/Landing/Terms";


const App = () => {
  return (
    <div className="flex flex-col lg:flex-row relative bg-primary h-screen overflow-scroll" data-theme="myTheme">
       <BottomMenu/>
       <div className="hidden lg:block w-20 mb-24"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
         {/* <Route path="/about" exact component={About} />
        <Route path="/contact-us" exact component={Contact} />
        <Route path="/faqs" exact component={Faqs} />
        <Route path="/terms" exact component={Terms} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/user" component={User} />
        <Route path="/admin" component={Owner} /> */}
      </Routes>
      
    </div>
  );
};

export default App;
