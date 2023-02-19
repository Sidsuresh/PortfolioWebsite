import React from "react";
import Profile from "./Profile/Profile";
import Portfolio from "./Portfolio/Portfolio";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";

const HomePage = () => {
  return (
    <div>
      <Profile />
      <Portfolio />
      <Project />
      <Contact />
    </div>
  );
};

export default HomePage;
