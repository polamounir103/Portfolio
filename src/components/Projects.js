import React from 'react'
import projectImg1 from '../assets/images/project1.jpg'
import projectImg2 from '../assets/images/project2.jpg'
import projectImg3 from '../assets/images/project3.jpg'
import projectImg4 from '../assets/images/project4.jpg'
import projectImg5 from '../assets/images/project5.jpg'
import projectImg6 from '../assets/images/project6.jpg'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import '../styles/Projects.css'
const Projects = () => {
     const myProjects = [
        {title : 'My Projects1', description : 'Project Description' , img : projectImg1},
        {title : 'My Projects2', description : 'Project Description' , img : projectImg2},
        {title : 'My Projects3', description : 'Project Description' , img : projectImg3},
        {title : 'My Projects4', description : 'Project Description' , img : projectImg4},
        {title : 'My Projects5', description : 'Project Description' , img : projectImg5},
        {title : 'My Projects6', description : 'Project Description' , img : projectImg6},
     ]
   return (
    <section className='projectSection' id='projects'>
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2> 
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <Tab.Container id='projectTabs' defaultActiveKey='first'> 
                            <Nav variant="pills" defaultActiveKey="">
                            <Nav.Item>
                                <Nav.Link eventKey="first" >One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" href='#contact'>Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Three</Nav.Link>
                            </Nav.Item>
                            </Nav>

                            <Tab.Content className='project-container'>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                        myProjects.map((project , index) =>{
                                            return (
                                                <ProjectCard key={index} {...project}></ProjectCard>
                                            )
                                        })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'></Tab.Pane>
                                <Tab.Pane eventKey='third'> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img className='background-img-right' src={}> </img>*/}
        </div>
    </section>
  )
}

export default Projects