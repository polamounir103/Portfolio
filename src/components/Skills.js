
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {React , useState , useEffect} from "react";
import { Col, Container , Row } from "react-bootstrap";

import SkillCircle from "./SkillCircle";

import '../styles/Skills.css'
function Skills () {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 776 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 775, min: 0 },
          items: 1
        }
      };

    //   const [percentage , setPercentage] = useState(35)


      return (
        <section className="skills-section " id="skills" >
            <Container className="rounded-5 skills-outer-container">
                <Row>
                    <Col>
                        <div className="skills-inner-container">
                            <h2 className="skills-title">  Skills  </h2>
                            <p> I have different skills  </p>
                            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                                <div className="skill-item text-center" >
                                     <SkillCircle  boxWidth="250"  percentage="95"  radius='90' />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="skill-item text-center" >
                                     <SkillCircle  boxWidth="250"  percentage="80"  radius='90' />
                                    <h5>Logo Designer</h5>
                                </div>
                                <div className="skill-item text-center" >
                                     <SkillCircle  boxWidth="250"  percentage="60"  radius='90' />
                                    <h5>App Development</h5>
                                </div>
                                <div className="skill-item text-center" >
                                     <SkillCircle  boxWidth="250"  percentage="90"  radius='90' />
                                    <h5>UI/UX Designer</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}
export default Skills;