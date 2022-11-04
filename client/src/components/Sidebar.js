import React from 'react'
import '../App.css'
import useFetch from '../hooks/useFetch'


function Sidebar() {
    const {data: projects, setData: setProjects} = useFetch('/projects')

    return (
        <div className='Sidebar'>
            <ul className='Sidebar-list'>
                {projects.map((project, key) => {
                return (
                    <li key={key} className='row' onClick={()=>{window.open(project.link)}}>
                        <div id='icon'><h1>X</h1></div>
                        <div id='title'>{project.title}</div>
                    </li>
                )})}
            </ul>
        </div>
    )
}

export default Sidebar