// src/component/SkillsSection.js
import React from "react";
import "./Skillsection.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase } from "react-icons/fa";

const Skillsection = () => {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="skill-icon html" />,
      description: "Building structured and semantic web pages.",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="skill-icon css" />,
      description: "Designing beautiful and responsive layouts.",
    },
    {
      name: "MySQL",
      icon: <FaDatabase className="skill-icon mysql" />,
      description: "Managing databases and handling data queries.",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="skill-icon js" />,
      description: "Adding interactivity and logic to web pages.",
    },
    {
      name: "React",
      icon: <FaReact className="skill-icon react" />,
      description: "Building fast and scalable web applications.",
    },
  ];

  return (
    <section className="skills-section" id="Skillsection">
      <h2 className="skills-title">My Technologies</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill.icon}
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skillsection;
