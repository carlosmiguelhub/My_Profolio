import React from "react";
import "./Projectsection.css";
import project from "../assets/project.png"; // import image


const Projectsection = () => {
  return (
    <section id="Projectsection" className="project-section">
      <h2 className="text-center mb-4">My Project</h2>
      <div className="card text-center shadow-lg p-4" style={{ width: "25rem" }}>
        <img
          src={project}
          className="card-img-top mx-auto"
          alt="Project Logo"
          style={{ width: "120px", borderRadius: "50%", marginTop: "10px" }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">Class Schedule Management System</h5>
          <p className="card-text text-muted">
            A web-based system that helps manage class schedules, handle portable documents,
            and monitor realtime.
          </p>
          <a href="https://github.com/carlosmiguelhub" className="btn btn-primary" target="_blank" rel="noreferrer">
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projectsection;
