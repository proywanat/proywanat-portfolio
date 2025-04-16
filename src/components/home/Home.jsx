import React from "react";
import "./Home.css";
import Me from "../../assets/myprofile.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Wanatchaporn Churvivat</h1>
        <span className="home__education">
          I'm {' '}
          <Typewriter className="home__education"
            words={['Software Developer', 'Full Stack Engineer']}
            // words={['Software Developer', 'Full Stack Engineer', 'Data Engineer']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={100}
            delaySpeed={3000}
          />
        </span>

        <HeaderSocials />

        <a href="#contact" className="btn">Hire Me</a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default Home;
