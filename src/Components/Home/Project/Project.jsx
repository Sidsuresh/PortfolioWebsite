import React from "react";
import "./Project.css";
import Slider from "../../Carousel/Slider";

const Project = () => {
  return (
    <div id="Project" className="project-container">
      <div className="project-heading">PROJECTS</div>
      <div className="project-disp">
        <Slider />
      </div>
    </div>
  );
};

export default Project;
