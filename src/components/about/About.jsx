import React from "react";
import "./About.css";
import Image from "../../assets/aboutme.png";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="About Me" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <div className="about__details__exp">
              <i className="icon-badge"></i>
              <h3>Experience</h3>
              <p>
                1+ years <br /> Software Developer
              </p>
            </div>
            <div className="about__details__skills">
              <i className="icon-book-open"></i>
              <h3>English Language Levels</h3>
              <p>Elementary (A2)</p>
            </div>
          </div>
          <div>
            <p className="about__description">
              Hi, I'm Wanat, a passionate Software Developer with a strong
              interest in Data Engineering. I have experience as a Full Stack
              Engineer and Software Developer, and I'm always eager to learn and
              grow in both the data field and programming. Currently, I'm
              studying to enhance my data skills, with the goal of transitioning
              into a Data Engineer role.
            </p>
            <a href="#download" className="btn">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
