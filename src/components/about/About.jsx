import React from "react";
import "./About.css";
import Image from "../../assets/aboutme.png";
import cvfile from "./wanatchaporn_resume.pdf"

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
                1 year <br /> Software Developer
              </p>
            </div>
            <div className="about__details__skills">
              <i className="icon-book-open"></i>
              <h3>English Language Levels</h3>
              <p>Intermediate (B1)</p>
            </div>
          </div>
          <div>
            {/* <p className="about__description">
              Hello, my name is Wanat. I am currently working as a Software
              Developer with 1 year of experience. Recently, I have taken the
              opportunity to expand my knowledge beyond programming skills. I
              chose to study Data Engineering, focusing on Python, SQL, and data
              analysis tools such as Pandas and NumPy. I’ve also explored how to
              apply these skills to build Machine Learning models, alongside
              other areas like Big Data management and data visualization. After
              studying and working on projects, I found myself increasingly
              fascinated by the field of Data. This inspired me to delve deeper
              and seriously consider transitioning to a Data Engineer role in
              the future.
            </p> */}
             <p className="about__description">
             My name is Wanat. I am a Software Developer with 1 year of experience in developing 
             and maintaining web and mobile applications. I have aptitude in various programming 
             languages and frameworks such as ReactJS, Java, and Flutter to deliver the best 
             results that meet user needs.
             Beyond my current skill set, I enjoy learning new technologies in my free time. 
             I’m always looking to grow and improve, and I find areas like Data Engineering both 
             challenging and exciting.
             I’m open to opportunities that allow me to learn, evolve, and create high-quality 
             solutions that solve real-world problems.
            </p>
            <a href={cvfile} download="Wanatchaporn_Resume" className="btn">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
