import { useState ,useEffect } from "react";
import { Container , Row , Col, Nav} from "react-bootstrap";
import { ArrowRightCircle} from "react-bootstrap-icons"
import '../styles/LandPage.css'
import comet from "../assets/images/comet.png"
import mainImg from "../assets/images/mainImg.png"

function LandPage () {

    const [loop , setLoop] = useState(0)
    const [deleting , setDeleting] = useState(false)
    const words = ["FrontEnd Developer", "BackEnd Developer", "FullStack Developer"]
    const [letter , setLetter] = useState("")
    const timing = 2000
    const [speed , setSpeed] = useState(300 - Math.random() * 100)

    const tick = () => {
        let i =  loop % words.length
        let fullWord = words[i]
        let updateWord = deleting ? fullWord.substring(0, letter.length - 1) : fullWord.substring(0, letter.length + 1)

        setLetter(updateWord)

        if (deleting === true) {
            setSpeed(300)
        }
        if(deleting === false && updateWord === fullWord) {
            setDeleting(true)
            setSpeed(timing)
        }else if(deleting === true && updateWord === ""){
            setDeleting(false)
            setLoop(loop +1)
            setSpeed(500)
        }
    }

    useEffect(() => {
        let ticker = setInterval(() =>{
            tick()
        } ,  speed)

        return () => { clearInterval(ticker) }
    } , [letter])

   


    return (
        <main id="home" className="main" >
            {/* <img  src={comet}  className="comet1"/> */}
            {/* <img  src={comet}  className="comet2"/> */}
            <Container className=" main-container pt-lg-5">
                <Row className="align-items-center">
                    <Col xs={12} lg={6} xl={6}>
                        <span className="welcome-title">Welcome All To My Portfolio</span>
                        <h2 className="my-name"> {`Hi! I'm Pola Mounir Samir,  `} <br></br> <span className="wrapped-word"> {  letter  }</span> </h2>
                        <p className="main-info">Hello Everyone ,  I have a year of Experience in FrontEnd Development </p>
                        <Nav.Link href="#contact">
                            <button className="main-btn" onClick={() => console.log("connect")} >Let's Connect <ArrowRightCircle size={25}/> </button>
                        </Nav.Link>
                    </Col>
                    <Col xs={12} md={12} lg={6} className="main-img-box mt-5 mt-lg-0"  >
                        <img src={mainImg} alt="My Photo" className="main-photo"/>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default LandPage;