import React from "react";
import "./Aboutsection.css";
import elementaryLogo from "../assets/Elem.png";
import juniorLogo from "../assets/junior.jpg";
import CollegeLogo from "../assets/college.jpg";
import masterLogo from "../assets/CIT.png";

const Aboutsection = () => {
  return (
    <section id="Aboutsection" className="about-section2">
      <div className="about-container">
        {/* Left Side - Education */}
        <div className="education">
          <h2>Educational Background</h2>
          <div className="edu-card">
            <h2>Elementary</h2>
            <p>Estaca Elementary School</p>
            <img src={elementaryLogo} alt="Elementary Logo" />
          </div>

          <div className="edu-card">
            <h2>Junior High School</h2>
            <p>University of the Visayas</p>
            <img src={juniorLogo} alt="Elementary Logo" />
          </div>
          <div className="edu-card">
            <h2>College</h2>
            <p>CTU Danao-Campus - BS Information Technology</p>
            <img src={CollegeLogo} alt="Elementary Logo" />

          </div>
          <div className="edu-card">
            <h2>Master</h2>
            <p>Cebu Institute of Technology University</p>
            <img src={masterLogo} alt="Elementary Logo" />

          </div>
        </div>

        {/* Right Side - Hobbies */}
        <div className="hobbies">
          <h2>Hobbies & Likes</h2>
          <ul>
            <li>🎮 Playing Online Games</li>
            <li>🎧 Listening to Music</li>
            <li>📸 Photography</li>
            <li>💻 Coding and Building Projects</li>
            <li>🏀 Playing Basketball</li>
          </ul>
          <div className="music-player">
            <h3>My Favorite Song 🎶 MEMORY</h3>
            <audio controls>
              <source src={`${process.env.PUBLIC_URL}/music/Memory.mp3`} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;


