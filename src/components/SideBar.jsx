import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { NavLink } from "react-router-dom";

function SideBar({ isOpen,setOpen, isDarkMode, setDarkMode }) {
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div
      className={`flex flex-col gap-5 h-[100vh] max-[400px]:w-[70%] max-[640px]:w-[50%] fixed top-0 right-0 min-[640px]:hidden backdrop-blur-xl z-10 ${isOpen?' translate-x-0':' translate-x-full'} duration-500 transition-all shadow-shadow `}
    >
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
      <div className="flex flex-col mx-4 gap-5 font-semibold justify-center items-center mt-4">
        <NavLink to={"/"} onClick={()=>setOpen(!isOpen)} className='py-1 w-full text-center '>Home</NavLink>
        <NavLink to={"/skills"} onClick={()=>setOpen(!isOpen)} className='py-1 w-full text-center '>Skills</NavLink>
        <NavLink to={"/Projects"} onClick={()=>setOpen(!isOpen)} className='py-1 w-full text-center '>Projects</NavLink>
      </div>
    </div>
  );
}

export default SideBar;
