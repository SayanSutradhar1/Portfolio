import React, { lazy } from "react";
import { myProjects } from "../utils/MyProjects";

const ProjectsCard = lazy(() => import("../components/ProjectCard"));
const ProjectList = lazy(() => import("../components/ProjectList"));

const Projects = () => {
  return (
    <>
      <div className="flex justify-center px-24 mx-4 my-4 max-[950px]:flex-col max-[550px]:px-4 gap-6 rounded-md py-3  ">
        <div className="flex flex-col flex-[0.65] rounded-md shadow-shadow p-4 ">
          <p>
            Currently I am learning in the field of full stack development and
            eager to kickstart a very good beginning of this field . I have made
            a collection of my works and these are illustrated here . You can
            run these in your own device just one click
          </p>
          <div className="flex flex-wrap gap-4 justify-between  my-4 mx-2">
            {myProjects.map(({ id, name, src, image, description }) => (
              <ProjectsCard
                name={name}
                src={src}
                image={image}
                description={description}
                key={id}
              />
            ))}
          </div>
        </div>
        <div className="flex-[0.35] rounded-md shadow-shadow p-4 text-black bg-blue-100 ">
          <ProjectList />
        </div>
      </div>
    </>
  );
};

export default Projects;
