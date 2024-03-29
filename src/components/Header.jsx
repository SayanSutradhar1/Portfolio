import React from "react";
import Hamburger from "hamburger-react";
import { useState } from "react";
import SideBar from "./SideBar";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { NavLink } from "react-router-dom";

function Header({ isDarkMode, setDarkMode }) {
  const [isOpen, setOpen] = useState(false);
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
  return (
    <>
      <div className=" w-full items-center flex justify-between px-20 max-[640px]:px-4 bg-slate-600 h-14 text-white">
        <div className=" font-bold text-xl">Portfolio</div>
        <div className="max-[640px]:hidden flex gap-5 text-orange-400">
          <NavLink to={'/'} className={({isActive})=>` ${isActive?' font-bold':''} hover:underline`}>Home</NavLink>
          <NavLink to={'/skills'} className={({isActive})=>` ${isActive?' font-bold':''} hover:underline`}>Skills</NavLink>
          <NavLink to={'/Projects'} className={({isActive})=>` ${isActive?' font-bold':''} hover:underline`}>Projects</NavLink>
        </div>
        <div className="max-[640px]:hidden">
          <DarkModeSwitch
            style={{
              marginBottom: "2rem",
              fill: `${isDarkMode ? "white" : "black"}`,
              margin: "7px",
            }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={40}
          />
        </div>
        <div
          className={`min-[640px]:hidden right-2 z-20 ${
            isOpen ? "fixed" : "relative"
          }`}
        >
          <Hamburger toggled={isOpen} toggle={setOpen} color={"black"} />
        </div>
      </div>
      {<SideBar isOpen={isOpen} setOpen={setOpen} isDarkMode={isDarkMode} setDarkMode={setDarkMode} />}
    </>
  );
}

export default Header;
