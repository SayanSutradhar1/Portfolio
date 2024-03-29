import React from "react";
import Profile from "../components/Profile";
import About from "../components/About";
import Skill from "../components/SkillHome";
import LocationContact from "../components/LocationContact";
import { useState } from "react";


const Home = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  return (
   <>
      <Profile isDarkMode={isDarkMode} />
      <About />
      <Skill />
      <LocationContact />
      </>
  );
};

export default Home;
