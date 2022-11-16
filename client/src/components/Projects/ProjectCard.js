import React from 'react'
import ImageContainer from './ImageContainer'
import LanguageIcons from './LanguageIcons'


function ProjectCard({title, images, bio, link}) {
  return (
    <div className='card'>
        <h4>{title}</h4>
        <ImageContainer images={images}/>
        <p>{bio}</p>
        <LanguageIcons />
        <a href={link}>Visit App Page</a>
    </div>
  )
}

export default ProjectCard