import React from "react";
import "./Services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Mobile Development",
    description:
      "Developing custom mobile apps tailored to business needs or user requirements, offering diverse functionalities and unique experiences.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Develop websites, enhance quality, and customize features to meet client needs effectively, covering both Frontend and Backend aspects.",
  },
  {
    id: 3,
    image: Image3,
    title: "Data Engineering",
    description:
      "Design and develop data systems for efficient processing, storage, analysis, and real-time insights with a focus on quality and security.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({id, image, title, description}) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
