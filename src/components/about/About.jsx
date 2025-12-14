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
                2 years <br /> Full Stack Developer
              </p>
            </div>
            <div className="about__details__skills">
              <i className="icon-book-open"></i>
              <h3>English Language Levels</h3>
              <p>TOEIC : 530</p>
            </div>
          </div>
          <div>
            <p className="about__description">
              Hello, my name is Wanat. I am currently working as a Full Stack
              Developer with 2 years of experience. Recently I have dedicated
              time to studying and developing skills in Data Engineering, 
              focusing on Python and SQL, as well as data analysis tools like
              Pandas and NumPy. I have worked on building ETL workflows, 
              data pipelines, and data visualizations to process and organize
              data for analysis and business decision-making. Through these projects,
              I have become increasingly interested in the field of data and am 
              committed to further developing my expertise to transition into 
              a Data Engineer role in the near future.
            </p>
             {/* <p className="about__description">
             My name is Wanat. I am a Software Developer with 1 year of experience in developing 
             and maintaining web and mobile applications. I have aptitude in various programming 
             languages and frameworks such as ReactJS, Java, and Flutter to deliver the best 
             results that meet user needs.
             Beyond my current skill set, I enjoy learning new technologies in my free time. 
             I’m always looking to grow and improve, and I find areas like Data Engineering both 
             challenging and exciting.
             I’m open to opportunities that allow me to learn, evolve, and create high-quality 
             solutions that solve real-world problems.
            </p> */}
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
