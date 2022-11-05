import React from 'react'
import useFetch from '../../hooks/useFetch'
import ProjectCard from './ProjectCard'
import './Projects.css'

function Projects() {
    const {data: projects, setData: setProjects} = useFetch('/projects')

    const images = [1,2,3,4,5,6,7,8,9,10]
    // console.log(projects)
    const projectCards = projects.map((project) => {
        return <ProjectCard key={project.id} bio={project.bio} images={images} title={project.title}/>
    })

    return (
        <div className='main'>
            <h1>Projects</h1>
            {projectCards}
        </div>
    )
}

export default Projects