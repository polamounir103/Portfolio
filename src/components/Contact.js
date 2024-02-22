import React, { useEffect, useState } from "react";
import contactImg from "../assets/images/contact2.svg";
import style from "../styles/Error.css";

import "../styles/ContactForm.css";

const Contact = () => {
  const [isAppearing, setIsAppearing] = useState(false);

  useEffect(() => {
    const contactImage = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsAppearing(true);
      } else {
        setIsAppearing(false);
      }
    });
    contactImage.observe(document.getElementById("contactImg"));
  }, []);

  const animationClass = isAppearing ? "appear" : "";
  const sendBtn = document.getElementById("sendBtn");
  const errorContainer = document.getElementById("errorContainer");
  const errorMessege = document.getElementById("errorMessege");
  const errorBtn = document.getElementById("errorBtn");
  const formInputs = document.querySelectorAll(".form-input");

  const sendData = () => {
    formInputs.forEach((input) => {
      if (input.value == "") {
        console.log("Please enter Data");
        errorMessege.innerHTML = "Please fill all data";
        errorContainer.style.display = "flex";
      } else{
        errorMessege.innerHTML = "Thanks for sending me Email";
        errorContainer.style.display = "flex";
        input.value = ""
      }
    });
  };
  const closeError = () => {
    errorContainer.style.display = "none";
  };

  return (
    <section className="contact-section">
      <div
        className="error-container position-fixed top-0 w-100 h-100 justify-content-center align-items-center"
        style={{ zIndex: "100" }}
        id="errorContainer"
      >
        <div className="error-box">
          <div id="errorMessege">error</div>
          <button className="error-btn" id="errorBtn" onClick={closeError}>
            Close
          </button>
        </div>
      </div>
      <div
        id="contact"
        className="container py-5 contact-container d-flex flex-column flex-lg-row justify-content-center align-item-center "
      >
        <div className="contact-image-box text-center">
          <img
            src={contactImg}
            id="contactImg"
            className={`contact-image ${animationClass}`}
          />
        </div>
        <div className="contact-form p-5 ">
          <h2 className="contact-title">Send Me </h2>
          <form className="d-flex flex-column " noValidate>
            <div className="input-group d-flex w-100 flex-column flex-md-row ">
              <input
                type="text"
                className="contact-input form-input"
                placeholder="First Name"
              ></input>
              <input
                type="text"
                className="contact-input form-input"
                placeholder="Last Name"
              ></input>
            </div>
            <div className="input-group">
              <input
                type="email"
                className="contact-input form-input"
                placeholder="Email"
              ></input>
              <input
                type="text"
                maxLength="11"
                minLength="11"
                className="contact-input form-input"
                placeholder="Phone Number"
              ></input>
            </div>
            <textarea
              type="text"
              className="contact-input-message form-input"
              placeholder="Message"
            ></textarea>

            <button
              type="button"
              className="contact-submit-btn btn btn-light"
              id="sendBtn"
              onClick={sendData}
            >
              {" "}
              Send{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
