import React, {useState} from 'react'
import '../App.css'
import useFetch from '../hooks/useFetch'
import {AiOutlineBars, AiFillRocket} from 'react-icons/ai'
import {BiNetworkChart} from 'react-icons/bi'
import {DiRubyRough} from 'react-icons/di'
import {ImHome} from 'react-icons/im'
import {useNavigate} from 'react-router-dom'


function Sidebar() {
    const navigate = useNavigate()
    const [showSidebar, setShowSidebar] = useState(false)
    const {data: projects, setData: setProjects} = useFetch('/projects')

    return (
        <div className='Sidebar' style={{width:(showSidebar ? '5%' : '30%')}}>
            <ul className='Sidebar-list'>
                <li id='Sidebar-heading' className='row'  onClick={()=>setShowSidebar(!showSidebar)}>
                    <div id='title' style={{display:(showSidebar ? 'none' : 'block')}}><h3>Projects</h3></div>
                    <div id='icon'><AiOutlineBars/></div>
                </li>
                <li id='about-me' className='row'  onClick={()=>navigate('/')}>
                    <div id='icon' style={{display:(showSidebar ? 'none' : 'block')}}><ImHome/></div>
                    <div id='title' style={{display:(showSidebar ? 'none' : 'block')}}>About Me</div>
                </li>
                <li id='projects' className='row'  onClick={()=>navigate('/projects')}>
                    <div id='icon' style={{display:(showSidebar ? 'none' : 'block')}}><AiFillRocket/></div>
                    <div to='/projects' id='title' style={{display:(showSidebar ? 'none' : 'block')}}>Projects</div>
                </li>
                <li id='connect' className='row'  onClick={()=>navigate('/connect')}>
                    <div id='icon' style={{display:(showSidebar ? 'none' : 'block')}}><BiNetworkChart/></div>
                    <div id='title' style={{display:(showSidebar ? 'none' : 'block')}}>Connect</div>
                </li>
                {/* {projects.map((project, key) => {
                return (
                    <li key={key} className='row' onClick={()=>{window.open(project.link)}}>
                        <div id='icon' style={{display:(showSidebar ? 'none' : 'block')}}><DiRubyRough/></div>
                        <div id='title' style={{display:(showSidebar ? 'none' : 'block')}}>{project.title}</div>
                    </li>
                )})} */}
            </ul>
        </div>
    )
}

export default Sidebar