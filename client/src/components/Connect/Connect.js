import React from 'react'
import './Connect.css';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {FaDev} from 'react-icons/fa'

function Connect() {
  return (
    <div className='main'>
      <h1>Connect</h1>
      <p>intro paragraph here</p>
      <div className='links-group'>
        <AiFillGithub className='link' onClick={()=>window.open('https://github.com/bperez3237')}/>
        <AiFillLinkedin className='link' onClick={()=>window.open('https://www.linkedin.com/in/brian-perez-164a6b155/')}/>
        <FaDev className='link' onClick={()=>window.open('https://dev.to/bperez3237')}/>
        <p>Email: b.perez3237@gmail.com</p>
      </div>
    </div>
  )
}

export default Connect