import Work1 from "../../assets/work-1.png";
import Work2 from "../../assets/work-2.png";
import Work3 from "../../assets/work-3.png";
import Work4 from "../../assets/work-4.png";
import Work5 from "../../assets/work-5.png";
import Work6 from "../../assets/work-6.png";
import ImageModal1 from "../../assets/modal1.png";
import ImageModal2 from "../../assets/modal2.png";

const Data = [
  {
    id: 1,
    image: Work1,
    title: "My Congee Application",
    desc: (
      <div>
        <ul class="work__desc">
          <li>Flutter</li>
          <li>Firebase</li>
        </ul>
      </div>
    ),
    category: "Application",
    modaltitle: "My Congee Application",
    imagemodal: ImageModal1,
    imagemodal2: ImageModal2,
    modaldesc: `
    Delivery applications have become increasingly popular as they provide convenience for ordering food and other products. However, a common issue is that some local restaurants near residential areas may not be able to join large delivery networks due to high commission fees and operational constraints.
    
    To address this issue, I developed an application tailored to the needs of restaurant owners, allowing them to open and close their stores, manage orders, and streamline operations—all within a single app. This application is called "My Congee Application".
    `,
    modaldesc2: `
    The development of this application was a collaborative effort with my university friends. My role in the project was to develop the user-facing application using Flutter and manage data storage with Firebase.
    
    Within the app, customers can browse a menu of various rice porridge dishes, place orders, and make payments conveniently via QR Code PromptPay. Additionally, they can check the store’s open and close status directly within the app, ensuring a seamless ordering experience.
    `,
    tag: (
      <ul className="work__tag">
        <li>Flutter</li>
        <li>Firebase</li>
      </ul>
    ),
  },
  {
    id: 2,
    image: Work2,
    title: "Property Perfect Sale management",
    desc: (
      <div>
        <ul class="work__desc">
          <li>NextJS</li>
          <li>TypeScript</li>
          <li>NodeJS</li>
          <li>MySQL</li>
        </ul>
      </div>
    ),
    category: "Web Application",
    modaltitle: "Property Perfect Sale management",
    imagemodal: "",
    imagemodal2: "",
    modaldesc: "",
    modaldesc2: "",
  },
  {
    id: 3,
    image: Work3,
    title: "Jenosize Marketing Cloud",
    desc: (
      <div>
        <ul class="work__desc">
          <li>NextJS</li>
          <li>TypeScript</li>
          <li>NodeJS</li>
          <li>MySQL</li>
        </ul>
      </div>
    ),
    category: "Web Application",
    modaltitle: "Jenosize Marketing Cloud",
    imagemodal: "",
    imagemodal2: "",
    modaldesc: "",
    modaldesc2: "",
  },
  ,
  {
    id: 4,
    image: Work4,
    title: "7Chat&Shop (Extra Phase)",
    desc: (
      <div>
        <ul class="work__desc">
          <li>NextJS</li>
          <li>TypeScript</li>
          <li>NodeJS</li>
          <li>MySQL</li>
        </ul>
      </div>
    ),
    category: "Web Application",
    modaltitle: "7Chat&Shop (Extra Phase)",
    imagemodal: "",
    imagemodal2: "",
    modaldesc: "",
    modaldesc2: "",
  },
  ,
  {
    id: 5,
    image: Work5,
    title: "Search Product iDP on WooCommerce",
    desc: (
      <div>
        <ul class="work__desc">
          <li>NextJS</li>
          <li>TypeScript</li>
          <li>Spring Boot</li>
        </ul>
      </div>
    ),
    category: "Web Application",
    modaltitle: "Search Product iDP on WooCommerce",
    imagemodal: "",
    imagemodal2: "",
    modaldesc: "",
    modaldesc2: "",
  },
  {
    id: 6,
    image: Work6,
    title: "Singhdam Alumni",
    desc: (
      <div>
        <ul class="work__desc">
          <li>PHP</li>
          <li>MySQL</li>
        </ul>
      </div>
    ),
    category: "WordPress",
    modaltitle: "Singhdam Alumni",
    imagemodal: "",
    imagemodal2: "",
    modaldesc: "",
    modaldesc2: "",
  },
];

export default Data;
