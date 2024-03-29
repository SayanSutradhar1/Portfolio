import { Link } from "react-router-dom"
import { projectList } from "../utils/MyProjects"

const ProjectList = () => {
  return (
    <div className="flex flex-col ">
        <h1 className="text-2xl font-semibold mb-2">Projects</h1>
        {
          projectList.map(({id,name,description,repo,techStack,level})=>(
            <div key={id} className="p-3 rounded-md shadow-shadow my-2 flex-col flex gap-2">
              <h1 className=" text-xl">{name} ({level})</h1>
              {/* <p>{description}</p> */}
              <p>Tech Stack - {techStack}</p>
              <Link to={repo} target="_blank" className="animate-textGlow">Check Code </Link>
            </div>
          ))
        }
    </div>
  )
}

export default ProjectList