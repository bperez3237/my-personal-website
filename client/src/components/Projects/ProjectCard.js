import React from 'react'
import ImageContainer from './ImageContainer'

function ProjectCard({images, bio}) {
  return (
    <div className='card'>
        ProjectCard
        <ImageContainer images={images}/>
        <p>{bio}</p>
    </div>
  )
}

export default ProjectCard