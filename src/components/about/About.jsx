import React from "react";
import "./About.css";
import Image from "../../assets/avatar-2.svg"; 

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="About Me" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            Hi, I'm Wanat, a passionate Software Developer with a strong 
            interest in Data Engineering. I have experience as a 
            Full Stack Engineer and Software Developer, and I'm always eager
            to learn and grow in both the data field and programming. 
            Currently, I'm studying to enhance my data skills, with the goal
            of transitioning into a Data Engineer role.
            </p>
            <a href="#download" className="btn">Download CV</a>
          </div>
        </div>

        {/* <div className="about__skills grid">
          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name"></h3>
              <span className="skills__number"></span>
            </div>


          </div>
        </div> */}
      </div>
    </section>
  );
}

export default About;