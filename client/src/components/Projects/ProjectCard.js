import React from 'react'
import ImageContainer from './ImageContainer'
import LanguageIcons from './LanguageIcons'


function ProjectCard({title, images, bio}) {
  return (
    <div className='card'>
        <h4>{title}</h4>
        <ImageContainer images={images}/>
        <p>{bio}</p>
        <LanguageIcons />
    </div>
  )
}

export default ProjectCard