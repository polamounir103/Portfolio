import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCard = ({title , description , img}) => {
  return (
    <Col xs={12} md={6} lg={4} className='project-card'>
        <div className='project-img-box'>
            <img src={img} alt="Project Img" />
            <div className='project-text'> 
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard