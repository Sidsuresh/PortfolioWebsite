import React from "react";
import { useState } from "react";

//React Icons

import { BsInfoCircleFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import { MdWork } from "react-icons/md";

//Import files

import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Interest from "./Interest/Interest";
import Intro from "./Intro/Intro";
import Skills from "./Skills/Skills";
import "./Portfolio.css";

const Portfolio = () => {
  const [sdOpt, setsdOpt] = useState("Intro");
  const [isActive1, setActive1] = useState(true);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);
  const [isActive4, setActive4] = useState(false);
  const [isActive5, setActive5] = useState(false);

  return (
    <div id="Portfolio" className="about-container">
      <div className="about-heading"> PORTFOLIO </div>
      <div className="about-content">
        <div className="about-sidebar">
          <ul>
            <div className="about-list">
              <div className="about-block">
                <div className="about-icons">
                  <BsInfoCircleFill />
                </div>
                <button
                  className={isActive1 ? "about-button-active" : "about-button"}
                  onClick={() => {
                    setsdOpt("Intro");
                    setActive1(true);
                    setActive2(false);
                    setActive3(false);
                    setActive5(false);
                    setActive4(false);
                  }}
                >
                  About Me
                </button>
              </div>
              <div className="about-block">
                <div className="about-icons">
                  <FaLaptopCode />
                </div>
                <button
                  className={isActive2 ? "about-button-active" : "about-button"}
                  onClick={() => {
                    setsdOpt("Skill");
                    setActive1(false);
                    setActive2(true);
                    setActive3(false);
                    setActive4(false);
                    setActive5(false);
                  }}
                >
                  Programming Skills
                </button>
              </div>
              <div className="about-block">
                <div className="about-icons">
                  <FaGraduationCap />
                </div>
                <button
                  className={isActive3 ? "about-button-active" : "about-button"}
                  onClick={() => {
                    setsdOpt("Education");
                    setActive1(false);
                    setActive2(false);
                    setActive3(true);
                    setActive4(false);
                    setActive5(false);
                  }}
                >
                  Education
                </button>
              </div>
              <div className="about-block">
                <div className="about-icons">
                  <MdWork />
                </div>
                <button
                  className={isActive4 ? "about-button-active" : "about-button"}
                  onClick={() => {
                    setsdOpt("Experience");
                    setActive1(false);
                    setActive2(false);
                    setActive3(false);
                    setActive4(true);
                    setActive5(false);
                  }}
                >
                  Experience
                </button>
              </div>
              <div className="about-block">
                <div className="about-icons">
                  <IoIosFootball />
                </div>
                <button
                  className={isActive5 ? "about-button-active" : "about-button"}
                  onClick={() => {
                    setsdOpt("Interest");
                    setActive1(false);
                    setActive2(false);
                    setActive3(false);
                    setActive4(false);
                    setActive5(true);
                  }}
                >
                  Interests
                </button>
              </div>
            </div>
          </ul>
        </div>
        <div className="about-active-content">
          {sdOpt === "Intro" ? <Intro /> : null}
          {sdOpt === "Skill" ? <Skills /> : null}
          {sdOpt === "Education" ? <Education /> : null}
          {sdOpt === "Experience" ? <Experience /> : null}
          {sdOpt === "Interest" ? <Interest /> : null}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
