import React from "react";
import projectImg1 from "../assets/images/EComm_Project.png";
import projectImg2 from "../assets/images/project2.jpg";
import projectImg3 from "../assets/images/project3.jpg";
import projectImg4 from "../assets/images/project4.jpg";
import projectImg5 from "../assets/images/project5.jpg";
import projectImg6 from "../assets/images/project6.jpg";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
const Projects = () => {
  const myProjects = [
    {
      title: "E-Ecommerce App",
      description: "Under Developing",
      img: projectImg1,
    },
    { title: "New Project", description: "Comming Soon", img: projectImg2 },
    { title: "New Project", description: "Comming Soon", img: projectImg3 },
    { title: "New Project", description: "Comming Soon", img: projectImg4 },
    { title: "New Project", description: "Comming Soon", img: projectImg5 },
  ];
  return (
    <section className="projectSection" id="projects">
      <div>
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p className="mb-5"> Here is my Projects</p>
              <Tab.Container id="projectTabs" defaultActiveKey="first">
                <Tab.Content className="project-container">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {myProjects.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project}></ProjectCard>
                        );
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second"></Tab.Pane>
                  <Tab.Pane eventKey="third">
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        {/* <img className='background-img-right' src={}> </img>*/}
      </div>
    </section>
  );
};

export default Projects;
