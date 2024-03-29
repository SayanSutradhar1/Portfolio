import { Skills } from "../utils/Skills";

const Skill = () => {
  return (
    <div className="flex gap-4 flex-wrap  ">
      <div className=" flex flex-col rounded-md shadow-shadow py-4 px-4 my-2 max-[425px]:items-center">
        <h1 className="text-2xl font-semibold text-wrap">
          Frameworks & Libraries
        </h1>
        <div className="   flex gap-5 flex-wrap my-2  max-[425px]:justify-center">
          {Skills.filter((Skill) => Skill.id < 200).map(
            ({ id, name, image, value }) => (
              <SkillCard key={id} name={name} image={image} value={value} />
            )
          )}
        </div>
      </div>
      <div className=" flex flex-col rounded-md shadow-shadow py-4 px-4 my-2 max-[425px]:items-center w-full">
        <h1 className="text-2xl font-semibold text-wrap">
          Programming Languages
        </h1>
        <div className="   flex gap-5 flex-wrap my-2  max-[425px]:justify-center">
          {Skills.filter((Skill) => Skill.id > 200 && Skill.id<300).map(
            ({ id, name, image, value }) => (
              <SkillCard key={id} name={name} image={image} value={value} />
            )
          )}
        </div>
      </div>
      <div className=" flex flex-col rounded-md shadow-shadow py-4 px-4 my-2 max-[425px]:items-center w-full">
        <h1 className="text-2xl font-semibold text-wrap">
          Tools 
        </h1>
        <div className="   flex gap-5 flex-wrap my-2  max-[425px]:justify-center">
          {Skills.filter((Skill) => Skill.id > 300 && Skill.id <400).map(
            ({ id, name, image, value }) => (
              <SkillCard key={id} name={name} image={image} value={value} />
            )
          )}
        </div>
      </div>
      <div className=" flex flex-col rounded-md shadow-shadow py-4 px-4 my-2 max-[425px]:items-center w-full">
        <h1 className="text-2xl font-semibold text-wrap">
          Others
        </h1>
        <div className="   flex gap-5 flex-wrap my-2  max-[425px]:justify-center">
          {Skills.filter((Skill) => Skill.id > 400).map(
            ({ id, name, image, value }) => (
              <SkillCard key={id} name={name} image={image} value={value} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ name, image, value }) => {
  

  return (
    <div className="shadow-shadow p-2 hover:scale-105 duration-150 relative z-0" >
      <img
        src={image}
        alt={name}
        className="max-h-[180px] rounded-lg"
      />
      <h1 className="text-xl my-1">{name}</h1>
      <progress value={value} max={100} className="w-full" ></progress>
    </div>
  );
};

export default Skill;
