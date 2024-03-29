import React from 'react'
import Skill from '../components/Skill'


const SkillPage = () => {
  
  return (
    <div className=' flex justify-center px-24 mx-4 my-4 flex-col max-[550px]:px-4 gap-6 rounded-md py-3 '>
      <p>Technical Skills are very much significant for a person who works in any field , as an web developer I have grasped some skills to make me a good developer as well as a good learner </p>
      <Skill/>
      <button onClick={()=>{window.location = '/resume.pdf'}} className=' duration-100 border-2 hover:bg-transparent hover:border-blue-800  self-start p-2 rounded-md bg-blue-400'>Get Resume</button>
    </div>
  )
}

export default SkillPage