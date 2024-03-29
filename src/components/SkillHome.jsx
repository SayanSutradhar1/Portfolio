import React from "react";
import { SkillHome } from "../utils/Skills";
import { Link } from "react-router-dom";

function Skill() {
  return (
    <div className="flex justify-center px-24 mx-4 my-4 max-[950px]:flex-col max-[550px]:px-4 gap-6 rounded-md py-3 ">
      {SkillHome.map(({ id, SkillName, description, image,link }) => (
        <SkillCard
          key={id}
          SkillName={SkillName}
          description={description}
          image={image}
          link={link}
        />
      ))}
    </div>
  );
}

export function SkillCard({ SkillName, description, image,link }) {
  return (
    <div className="flex flex-col justify-center items-center shadow-shadow p-4 rounded-md bg-blue-100 text-black ">
      <div className="text-3xl mb-4 font-semibold self-start text-center">
        {SkillName}
      </div>
      <div className="">
        <Link to={link}>
          <img
            src={image}
            alt=""
            className=" rounded-[100%] mb-4 w-[200px] hover:shadow-2xl hover:scale-110 duration-200"
          />
        </Link>
      </div>
      <div>{description}</div>
    </div>
  );
}

export default Skill;
