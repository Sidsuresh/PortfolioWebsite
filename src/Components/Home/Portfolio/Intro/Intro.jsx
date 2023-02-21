import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-info">
        <div className="intro-text">
          An upcoming graduate computer science looking to join the workforce to
          gain real-world experience with experiences in the field of Software
          Engineering, Machine Learning and AI and Data Science. Dependable and
          reliable, ready to learn and grow with your company.
        </div>
      </div>
      <div className="intro-list">
        <div className="intro-hlgt">
          <div className="intro-heading">Here are a few highlights:</div>
          <ul>
            <li>CREATIVE WEB/ APP DESIGNER</li>
            <li>SAVVY DATA ANALYST</li>
            <li>AVID AI/ML ENTHUSIAST</li>
            <li>ANALYTICAL PROBLEM SOLVER</li>
            <li>PROFICIENT SPOKESPERSON</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Intro;
