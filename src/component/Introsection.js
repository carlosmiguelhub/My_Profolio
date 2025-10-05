import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Introsection.css';
import profileImg from '../assets/profile.jpg';

const IntroSection = () => {
  return (
    <section id="Introsection" className="intro-section container-fluid d-flex align-items-center py-5">
      <div className="row w-100 align-items-center">
        
        {/* LEFT: IMAGE */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img 
            src={profileImg} 
            alt="Profile"
            className="img-fluid rounded-circle shadow-lg intro-image"
          />
        </div>

        {/* RIGHT: INTRO TEXT */}
        <div className="col-md-6 text-md-start text-center px-4">
          <h1 className="display-5 fw-bold mb-3">Hi, I'm Carlos Miguel 👋</h1>
          <p className="lead mb-4">
            I’m a passionate <span className="highlight"><b>EDUCATOR</b></span> and technology enthusiast 
            who loves building interactive, user-friendly web applications using 
            modern tools like React.js and Bootstrap.
          </p>
          {/* <button  href="Projectsection"  className="btn btn-light btn-lg rounded-pill px-4 shadow-sm nav-link-custom">
           View my Work
          </button> */}
          <a href="#contact" className="btn btn-primary btn-lg rounded-pill px-4">
                    Want to Collab? Click Here!
                  </a>
                  
        </div>
      </div>
   
    </section>
    
  );
};

export default IntroSection;
