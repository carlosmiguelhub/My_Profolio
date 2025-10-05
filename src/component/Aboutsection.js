import React from "react";
import "./Aboutsection.css";

const Aboutsection = () => {
  return (
    <section id="Aboutsection" className="about-section2">
      <div className="about-container">
        {/* Left Side - Education */}
        <div className="education">
          <h2>Educational Background</h2>
          <div className="edu-card">
            <h3>Elementary</h3>
            <p>Estaca Elementary School (2013 - 2014)</p>
          </div>
          <div className="edu-card">
            <h3>Junior High School</h3>
            <p>University of the Visayas (2017 - 2018)</p>
          </div>
          <div className="edu-card">
            <h3>College</h3>
            <p>Cebu Technological University Danao-Campus - BS Information Technology (2024 - 2025)</p>
          </div>
          <div className="edu-card">
            <h3>Master</h3>
            <p>Cebu Institute of Technology University  (2025 - Present)</p>
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


