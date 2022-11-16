import React, {useState} from 'react'
import '../App.css'
import useFetch from '../hooks/useFetch'

import {AiOutlineBars, AiFillRocket, AiFillCloseSquare} from 'react-icons/ai'
import {BiNetworkChart} from 'react-icons/bi'
import {ImHome} from 'react-icons/im'
import {useNavigate} from 'react-router-dom'


function Sidebar() {
    const navigate = useNavigate()
    const [showSidebar, setShowSidebar] = useState(false)
    const {data: projects, setData: setProjects} = useFetch('/projects')

    const iconSize = '1.3em'

    return (
        <div className='Sidebar' style={{width:(showSidebar ? '5%' : '30%')}}>
            <ul className='Sidebar-list'>
                <li id='Sidebar-heading' className='row'  onClick={()=>setShowSidebar(!showSidebar)}>
                    <div id='title' style={{display:(showSidebar ? 'none' : 'block')}}><h3>Projects</h3></div>
                    <div id='icon'>{showSidebar ? <AiOutlineBars size={iconSize} /> : <AiFillCloseSquare size={iconSize} />}</div>
                </li>
                <li id='about-me' className='row'  onClick={()=>navigate('/')}>
                    <div id='icon'><ImHome size={iconSize} /></div>
                    <div id='title' style={{display:(showSidebar ? 'none' : 'block')}}>About Me</div>
                </li>
                <li id='projects' className='row'  onClick={()=>navigate('/projects')}>
                    <div id='icon' ><AiFillRocket size={iconSize} /></div>
                    <div to='/projects' id='title' style={{display:(showSidebar ? 'none' : 'block')}}>Projects</div>
                </li>
                <li id='connect' className='row'  onClick={()=>navigate('/connect')}>
                    <div id='icon' ><BiNetworkChart size={iconSize} /></div>
                    <div id='title' style={{display:(showSidebar ? 'none' : 'block')}}>Connect</div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar