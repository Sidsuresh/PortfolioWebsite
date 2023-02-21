import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skill-container">
      <div className="skill-prog">
        <div className="skill-heading">Languages:</div>
        <div className="skill-list">
          <ul>
            <li>C/ C++</li>
            <li>Python</li>
            <li>Java</li>
            <li>Javascript</li>
            <li>R</li>
            <li>Dart</li>
          </ul>
        </div>
      </div>
      <div className="skill-mlai">
        <div className="skill-heading-2">Machine Learning/ AI:</div>
        <div className="skill-list-2">
          <ul>
            <li>PyTorch, TensorFlow, Keras</li>
            <li>Supervised Learning</li>
            <li>Unsupervised Learning</li>
            <li>Decision Trees and Belief Networks</li>
            <li>Neural Networks</li>
          </ul>
        </div>
      </div>
      <div className="skill-wadev">
        <div className="skill-heading">Web/ App Development:</div>
        <div className="skill-list">
          <ul>
            <li>HTML-5, CSS</li>
            <li>MERN Stack</li>
            <li>FastAPI, RestAPI</li>
            <li>ASP.NET Web API</li>
            <li>Tkinter Library</li>
            <li>Flutter</li>
          </ul>
        </div>
      </div>
      <div className="skill-db">
        <div className="skill-heading-2">Database:</div>
        <div className="skill-list-2">
          <ul>
            <li>MySQL, Oracle Database</li>
            <li>MongoDB</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
