import {useState , useEffect} from "react"
import {Nav , Navbar ,Container} from 'react-bootstrap';
import linkedinIco from "../assets/icons/linkedin.svg"
import facebookIco from "../assets/icons/facebook.svg"
import instagramIco from "../assets/icons/instagram.svg"
import menuIcon from "../assets/icons/menu.svg"
import menuCloseIcon from "../assets/icons/cross.svg"

import '../styles/Navbar.css'


function NavBar() {
  const [activeLink , setActiveLink] = useState("home")
  const [scrolled , setScrolled] = useState(false)
  const [activeBtn , setActiveBtn] = useState(menuIcon)

  const handleScroll = () => {
    if (window.scrollY > 50 || activeBtn !== menuIcon) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const onChangeActiveLink = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navMenuBtn = () => {
    if (activeBtn === menuIcon) {
      setActiveBtn(menuCloseIcon);
      setScrolled(true);
    } else {
      setActiveBtn(menuIcon);
      setScrolled(false);
      handleScroll();
    }
  };
  




  return (
    <Navbar expand="lg" className={scrolled ? "bg-body-tertiary scrolled " : "bg-body-tertiary"}>
      <Container >
        <Navbar.Brand href="#home" className="ms-4 ms-lg-0">
          {/* <img className="logo-ico" src={logoIcon} /> */}
          <span className="logo-text">DooN</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-menu-btn">
            <img src={activeBtn} className="nav-menu-ico" onClick={navMenuBtn}></img>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav d">
          <Nav className="me-auto">
            <Nav.Link href="#home" className= {activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onChangeActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className= {activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onChangeActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects" className= {activeLink === "projects " ? "active navbar-link" : "navbar-link"} onClick={() => onChangeActiveLink("projects")}>Project</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icons">
                <a href="#"><img className="linkedin-ico" src={linkedinIco} alt="Icon" /></a>
                <a href="#"><img src={facebookIco} alt="Icon" /></a>
                <a href="#"><img src={instagramIco} alt="Icon" /></a>
            </div>
            <Nav.Link href="#contact">
            <button className="" >
                <span className="">Let's Connect</span>
            </button>
            </Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;