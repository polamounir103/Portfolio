import React, { useEffect, useState } from 'react'
import contactImg from '../assets/images/contact2.svg'

import '../styles/ContactForm.css'


const Contact = () => {
    const [isAppearing, setIsAppearing] = useState(false)

    useEffect(() => {
      const contactImage = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsAppearing(true);
        }else {
            setIsAppearing(false);
            
        }
      });
      contactImage.observe(document.getElementById('contactImg'))
    }, []);
  
    const animationClass = isAppearing ? "appear" : "";
  

  return (
    <section className="contact-section">
        <div id="contact" className="container py-5 contact-container d-flex flex-column flex-lg-row justify-content-center align-item-center ">
            <div className="contact-image-box text-center">
                <img src={contactImg}  id="contactImg" className={`contact-image ${animationClass}`}/>
            </div>
            <div className="contact-form p-5 ">
                <h2 className='contact-title'>Get In Touch</h2>
                <form className='d-flex flex-column ' noValidate>
                    <div className='input-group d-flex w-100 flex-column flex-md-row '>
                        <input type="text" className="contact-input" placeholder='First Name'></input>
                        <input type="text" className="contact-input" placeholder='Last Name'></input>
                    </div>
                    <div className='input-group'>
                        <input type="email" className="contact-input" placeholder='Email'></input>
                        <input type="text" maxLength="11" minLength="11" className="contact-input" placeholder='Phone Number'></input>
                    </div>
                    <textarea type="text" className="contact-input-message" placeholder='Message'></textarea>
                    
                    <button type="button" className="contact-submit-btn btn btn-light"> Send </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact