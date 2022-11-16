import React from 'react'
import './Connect.css';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {FaDev} from 'react-icons/fa'

function Connect() {

  const iconSize = '3em'
  return (
    <div className='main'>
      <h3>Connect with me on these sites:</h3>
      {/* <p>Connect with me on these sites:</p> */}
      <div className='links-group'>
        <AiFillGithub size={iconSize} className='link' onClick={()=>window.open('https://github.com/bperez3237')}/>
        <AiFillLinkedin size={iconSize} className='link' onClick={()=>window.open('https://www.linkedin.com/in/brian-perez-164a6b155/')}/>
        <FaDev size={iconSize} className='link' onClick={()=>window.open('https://dev.to/bperez3237')}/>
        <p>Email: b.perez3237@gmail.com</p>
      </div>
    </div>
  )
}

export default Connect