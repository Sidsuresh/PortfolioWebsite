import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-list">
        <ul>
          <li>
            <div className="experience-header">
              <div className="experience-name">IO21 Dubai</div>
              <div className="experience-date">Jan 2023 - Feb 2023</div>
            </div>
            <div className="experience-title">SDE Intern</div>
            <div className="experience-content">
              <ul>
                <li>Flutter Developer for a mobile university application.</li>
                <li>Backend Development using ASP.NET Web API</li>
                <li>Quality Assurance of UI/UX</li>
              </ul>
            </div>
          </li>
          <li>
            <div className="experience-header">
              <div className="experience-name">IO21 Dubai</div>
              <div className="experience-date">May 2022 - July 2022</div>
            </div>
            <div className="experience-title">SDE Intern</div>
            <div className="experience-content">
              <ul>
                <li>
                  Web Developer using Node JS and Express JS for E-commerce App
                </li>
                <li>Quality Assurance of UI/UX</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
