import React from 'react'
import useFetch from '../../hooks/useFetch'
import ProjectCard from './ProjectCard'
import './Projects.css'
import project_1_1 from './images/Project-1-1.png'
import project_1_2 from './images/Project-1-2.png'
import project_2_1 from './images/Project-2-1.png'
import project_2_2 from './images/Project-2-2.png'

function Projects() {
    const {data: projects, setData: setProjects} = useFetch('/projects')

    const images = [[project_2_1,project_2_2],[project_1_1,project_1_2]]

    const projectCards = projects.map((project, index) => {
        return <ProjectCard key={project.id} bio={project.bio} images={images[index]} title={project.title} link={project.link}/>
    })

    return (
        <div className='main'>
            <h1>Projects</h1>
            <div className='card-container'>
                {projectCards}
            </div>
        </div>
    )
}

export default Projects