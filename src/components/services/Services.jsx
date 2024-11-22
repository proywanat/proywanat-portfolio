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
      "Providing tailor-made mobile applications designed to meet specific business needs or target user requirements. These apps can include various functionalities and are developed to deliver unique experiences.",
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
      "Design and develop data infrastructure, pipelines, warehouses, and lakes to efficiently process, store, and analyze data. Ensure quality, security, and real-time capabilities tailored to business needs.",
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
