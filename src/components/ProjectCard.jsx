import React from "react";
import { Link } from "react-router-dom";

const ProjectsCard = ({ name, image, description, src }) => {
  return (
    <div className=" max-w-[320px] p-4 shadow-shadow rounded-md text-black bg-blue-100 hover:scale-105 duration-200 animate-bgChange" >
      <Link to={src} target="_blank" className="">
        <img src={image} alt={name} className="w-full rounded-md" />
      </Link>
      <h1 className="text-2xl font-medium my-1">{name}</h1>
      <p className="">{description}</p>
    </div>
  );
};

export default ProjectsCard;
