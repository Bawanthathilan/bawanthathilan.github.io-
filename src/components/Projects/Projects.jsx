import React from 'react'
import './projects.css'
import ProjectsData from '../../Data/Projects/Project.js'
import Card from '../Card/Card'



const Projects = () => {
  return (
    <div className='projects_container' id='projects'>
      <h1 className='project_header'>Projects ./</h1>

      <div className='card_container'>
        {' '}
        {ProjectsData.map((project) => {
          return (
            <a href={project.url}>
              <Card
                name={project.Name}
                img={project.Image}
                desc={project.desc}
              />
            </a>
          )
        })}
      </div>

      <a href='# ' className='projects_link'>
        <h2>Other Projects </h2>
      </a>
    </div>
  )
}

export default Projects
