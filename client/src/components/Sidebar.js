import React from 'react'
import {SidebarData} from './SidebarData'
import '../App.css'


function Sidebar() {


    return (
        <div className='Sidebar'>
            <ul className='Sidebar-list'>
                {SidebarData.map((obj, key) => {
                return (
                    <li key={key} className='row' onClick={()=>{window.open(obj.link)}}>
                        <div id='icon'>{obj.icon}</div>
                        <div id='title'>{obj.title}</div>
                    </li>
                )})}
            </ul>
        </div>
    )
}

export default Sidebar