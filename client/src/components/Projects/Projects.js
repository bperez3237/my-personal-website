import React from 'react'
import useFetch from '../../hooks/useFetch'

function Projects() {
    const {data: projects, setData: setProjects} = useFetch('/projects')

    console.log(projects)

    return (
        <div>Projects</div>
    )
}

export default Projects