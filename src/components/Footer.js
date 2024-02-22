import React from 'react'
import { Container } from 'react-bootstrap'

import linkedinIco from "../assets/icons/linkedin.svg"
import facebookIco from "../assets/icons/facebook.svg"
import instagramIco from "../assets/icons/instagram.svg"
import '../styles/Navbar.css'


const Footer = () => {
  return (
    <footer className='pb-5'>
        <Container className='d-flex flex-column flex-md-row justify-content-between '>
            <h2 className='footer-logo fw-900 fs-1 text-center text-md-start mb-4'>DooN</h2>
            <div className='footer-content d-flex flex-column  justify-content-between align-items-center align-items-md-end my-4'>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/pola-mounir-samir-7954b92b6" target="_blank"><img className="linkedin-ico" src={linkedinIco} alt="Icon" /></a>
                    <a href="https://www.facebook.com/pola.mounir.1103" target="_blank"><img src={facebookIco} alt="Icon" /></a>
                    <a href="https://www.instagram.com/polaa_mounir/" target="_blank"><img src={instagramIco} alt="Icon" /></a>
                </div>
                <p>
                     Copyright 2023 , All rights reserved   "  Pola  Mounir "
                </p>
            </div>
        </Container>
    </footer>
  )
}

export default Footer