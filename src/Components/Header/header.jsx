import React from "react";
import "./header.css";

//React Icons
import { AiFillProject } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { ImHome } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h2>SSN</h2>

        <ul>
          <li>
            <a href="#Profile">
              <ImHome /> <h7>Home</h7>
            </a>
          </li>
          <li>
            <a href="#Portfolio">
              <ImProfile /> <h7>Portfolio</h7>
            </a>
          </li>
          <li>
            <a href="#Project">
              <AiFillProject /> <h7>Projects</h7>
            </a>
          </li>
          <li>
            <a href="#Contact">
              <FiPhoneCall /> <h7>Contact Me</h7>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
