import React, { lazy } from 'react'

import { Route,Routes } from 'react-router-dom'



const Home = lazy(()=>import('../pages/Home'))
const Projects = lazy(()=>import('../pages/Projects'))
const SkillPage = lazy(()=> import('../pages/SkillPage'))
const PageNotFound = lazy(()=> import('../components/PageNotFound'))

const AllRoutes = () => {
  return (
    <>
      
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/skills' element={<SkillPage/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      
    </>
  )
}

export default AllRoutes