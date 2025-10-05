import logo from './logo.svg';
import './App.css';
import CustomNavbar from './component/Navbar';
import React, { useEffect } from "react";
import IntroSection from './component/Introsection'
import AboutSection from "./component/Aboutsection";
import Skillsection from "./component/Skillsection";
import Projectsection from './component/Projectsection';
import Footer from "./component/Footer";
import Contactsection from "./component/Contactsection";



function App() {

   useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".custom-navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="App">
  
    <CustomNavbar />
    <IntroSection />
    <AboutSection />
    <Skillsection />
    <Projectsection />
    <Contactsection />
     <Footer />

    </div>
  );
}

export default App;
