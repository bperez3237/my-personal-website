import React from 'react'
import headshot from './headshot.jpg'
import './About.css'

function Home() {
  return (
    <div className='main'>
      <img id='headshot' src={headshot} alt='headshot-of-guy'/>
      <div className="">
        <p>
        I am an aspiring Full Stack Software Engineer looking to tackle challenging problems in software engineering. Since college I've had an interest in coding and I've recently completed a Software Engineering course at Flatiron School to pursue coding as a career. I currently work in the Construction industry as a Cost Engineer at a General Contractor. In my career so far I've learned valuable management and business skills that I am excited to bring to my new software engineering career.
        </p><p>
        Prior to my professional experience I studied Physics at Cornell University. I loved learning challenging new concepts and problem solving. I've started my coding journey primarily with web development, learning Javascript, React, Ruby, and Rails, but I plan to continue developing my skills across multiple disciplines in software engineering. Next I'd like to learn backend frameworks with Python, such as Django and Flask, and also get into some machine learning with Python's Tensorflow. I'm ready to apply everything I've learned and can't wait to learn more as I go.
        </p>
      </div>
    </div>
  )
}

export default Home