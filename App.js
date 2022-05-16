import React from "react";
import  Home from './components/pages/Home';
import Aboutus from "./components/pages/About";
import Contactus from "./components/pages/Contact";
import Navbar from "./components/inc/Navbar";
import Review from "./components/pages/Reviews";
import Footer from "./components/inc/Footer";
import './App.css';
function App() {
  return (
  <div>
    <Navbar/>
    <Home/>
    <Aboutus/>
    <Review/>
    <Contactus/>
    <Footer/>
  </div>
  );
}

export default App;
