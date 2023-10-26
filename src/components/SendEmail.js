import React from 'react'
import { Container } from 'react-bootstrap'
import '../styles/SendEmail.css'

const SendEmail = () => {
  return (
    <section className='sendEmail-section'>
        <Container className='sendEmail-container d-flex flex-column flex-lg-row'>
            <div className='sendEmail-text-box'>
                <p className='sendEmail-text'>
                    see my projects at once & leave here your email address 
                </p>
            </div>
            <div className='sendEmail-form-box'>
                <div>
                    <input className='sendEmail-email' placeholder='E-mail Address Here'></input>
                    <button className='sendEmail-btn'>submit</button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default SendEmail