import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact content section" id="contact">
      <h2 className="section__title">Let's Get In Touch!</h2>
      <div className="contact__info">
        <div className="contact__top">
          <a href="tel:+66990203144" className="contact__item">
            <i className="fa-solid fa-phone"></i>
            <span>+66 99 020 3144</span>
          </a>
          <a href="mailto:proywanat@gmail.com" className="contact__item">
            <i className="fa-solid fa-envelope"></i>
            <span>proywanat@gmail.com</span>
          </a>
        </div>
        <div className="contact__item">
          <i className="fa-solid fa-location-dot"></i>
          <span>Bangson, Bangkok, Thailand</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
