import React, {useState} from 'react'
import '../App.css'
import useFetch from '../hooks/useFetch'


function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false)
    const {data: projects, setData: setProjects} = useFetch('/projects')

    function toggleSidebar() {
        setShowSidebar(!showSidebar)
    }


    return (
        <div className='Sidebar' onClick={toggleSidebar} style={{width:(showSidebar ? '5%' : '30%')}}>
            <ul className='Sidebar-list'>
                {projects.map((project, key) => {
                return (
                    <li key={key} className='row' onClick={()=>{window.open(project.link)}}>
                        <div id='icon' style={{display:(showSidebar ? 'none' : 'block')}}><h1>X</h1></div>
                        <div id='title' style={{display:(showSidebar ? 'none' : 'block')}}>{project.title}</div>
                    </li>
                )})}
            </ul>
        </div>
    )
}

export default Sidebar