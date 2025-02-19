import Work1 from "../../assets/work-1.png";
import Work2 from "../../assets/work-2.png";
import Work3 from "../../assets/work-3.png";
import Work4 from "../../assets/work-4.png";
import Work5 from "../../assets/work-5.png";
import Work6 from "../../assets/work-6.png";
import ImageModal1 from "../../assets/modal1.png";
import ImageModal2 from "../../assets/modal2.png";
import ImageModal3 from "../../assets/modal3.png";
import ImageModal4 from "../../assets/modal4.png";
import ImageModal5 from "../../assets/modal5.png";
import ImageModal6 from "../../assets/modal6.png";
import ImageModal7 from "../../assets/modal7.jpg";
import ImageModal8 from "../../assets/modal8.png";
import ImageModal9 from "../../assets/modal9.png";
import ImageModal10 from "../../assets/modal10.png";
import ImageModal11 from "../../assets/modal11.png";

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
    imagemodal: ImageModal3,
    imagemodal2: ImageModal4,
    modaldesc: `
    Property Perfect is a real estate company that offers a wide range of services across various sectors with the goal of achieving stable and sustainable growth.
    The Sale Management Website is a platform developed to assist businesses in managing the entire sales process, from customer management to tracking sales performance and analyzing results. The primary purpose of this system is to enhance operational efficiency, reduce complex processes, and increase the chances of closing sales effectively.
    
    `,
    modaldesc2: `
    I was tasked with developing the Live Chat system for the PF (Property Perfect Public Co., Ltd.) project, which is a property management system facilitating discussions about real estate transactions, including buying and selling houses in various projects, between sellers and customers. My assigned tasks included developing an API for message counting on the web interface when customers send messages. Additionally, I set up OneSignal for chat notifications on both iOS and Android applications.
    `,
    tag: (
      <ul className="work__tag">
        <li>NextJS</li>
        <li>TypeScript</li>
        <li>NodeJS</li>
        <li>MySQL</li>
      </ul>
    ),
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
    imagemodal: ImageModal5,
    imagemodal2: ImageModal6,
    modaldesc: `
    The Jenosize Marketing Cloud system is a cloud-based platform designed to enhance the customer experience by integrating various tools and services for sales and marketing management, customer service, and other business operations. This product includes a range of useful tools such as unified customer data, 
    multi-channel customer interactions, omnichannel transactions, online customer support, marketing campaigns, and features that help convert users into long-term customers.
    `,
    modaldesc2: `
    I was tasked with developing the Marketing Cloud project, adding new features based on customer needs, such as CRM management, improving Live Chat, automating Flows, and addressing various issues that arise. The primary customers currently using the system are CP ALL PUBLIC Co., Ltd. (7-Eleven) and Big C Supercenter Public Co., Ltd..
    `,
    tag: (
      <ul className="work__tag">
        <li>NextJS</li>
        <li>TypeScript</li>
        <li>NodeJS</li>
        <li>MySQL</li>
      </ul>
    ),
  },
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
    imagemodal: ImageModal7,
    imagemodal2: "",
    modaldesc: `
    The Chat and Shop system via LINE Official Account (LINE OA) is an innovative application of LINE Official Account features for comprehensive product and service sales through chat. It enhances customer convenience by enabling them to browse products, receive information, and make payments without leaving the LINE app, which is a popular platform in Thailand.`,
    modaldesc2: `
    I was assigned to develop the 7Chat&Shop project (Extra Phase) as a purchasing system for CP ALL PUBLIC Co., Ltd. (7-Eleven) through the LINE platform. My role included actively addressing customer-reported issues and QA concerns, including fixing critical bugs to ensure smooth system functionality. 
    I also implemented new features such as personalized recommendations and enhanced order tracking to improve usability. Additionally, I enhanced the error-handling mechanisms by introducing detailed error messages, automated logging, and efficient recovery processes. Furthermore, I optimized the system’s performance to handle high traffic during promotions, ensuring the platform’s stability, reliability, and efficiency for all stakeholders.
    `,
    tag: (
      <ul className="work__tag">
        <li>NextJS</li>
        <li>TypeScript</li>
        <li>NodeJS</li>
        <li>MySQL</li>
      </ul>
    ),
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
    imagemodal: ImageModal8,
    imagemodal2: ImageModal9,
    modaldesc: `
    Industrial Digital Platform (iDP) – Gateway to Success is a website that serves as a bridge connecting industrial entrepreneurs to vital resources, data, knowledge, sales channels, financial tools, and support from government agencies. Its goal is to promote business success and strengthen the industrial sector.
    `,
    modaldesc2: `
    WooCommerce is a free plugin for WordPress that transforms a standard website into a fully functional online store. It is renowned for its ease of use, flexibility, and ability to be customized to specific needs. WooCommerce will be utilized to support the sale of products, services, and solutions offered through iDP.
    As part of the ongoing development of the iDP website, I have been tasked with designing a Search Box that enables users to search for information seamlessly. This will involve integrating the search functionality with the WordPress WooCommerce API to establish a smooth connection between the two systems. Additionally, enhancements to certain features on the iDP website will be implemented to ensure compatibility with WooCommerce and to optimize the platform for effectively supporting product and service sales.
    `,
    tag: (
      <ul className="work__tag">
        <li>NextJS</li>
        <li>TypeScript</li>
        <li>NodeJS</li>
        <li>MySQL</li>
      </ul>
    ),
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
    imagemodal: ImageModal10,
    imagemodal2: ImageModal11,
    modaldesc: `
    The Faculty of Political Science at Chulalongkorn University is one of the oldest educational institutions in Thailand and the first to offer Political Science as an academic discipline. If counted from its inception in 1899 (BE 2442) to the present (2022, BE 2565), the institution has a remarkable history spanning 123 years.
    The symbol of the Faculty of Political Science is the "Black Singha" (Lion). The "Singha" represents a ruler, akin to the lion, the king of the jungle. The color black symbolizes the throat of Lord Shiva, who drank poison to protect humanity. Thus, the Black Singha signifies that "a true ruler must be self-sacrificing for the greater good" (Black is Devotion).

    `,
    modaldesc2: `
    I have been tasked with designing and developing a new website for the Political Science Alumni Association of Chulalongkorn University using WordPress. The goal is to modernize the website and enhance its usability. The new website should reflect the distinguished image of the alumni association through a clean yet professional design. Key information such as news, events, and alumni resources should be organized for easy access across all devices.
    The development process will incorporate features such as an event calendar integrated with Facebook to meet various user needs. The work will begin with analyzing the existing website and gathering requirements from stakeholders to create an optimal structure and content plan. The website will then be built and customized using a WordPress theme that aligns with the specified requirements.
    The final steps include comprehensive testing of the website’s performance, stability, and cross-device compatibility. Once completed, the website will be launched with user documentation and training sessions for administrators to manage and update content independently. The new website aims to become a central hub for communication and connection among the alumni of the Faculty of Political Science, fostering effective engagement and collaboration.
    `,
    tag: (
      <ul className="work__tag">
        <li>PHP</li>
        <li>MySQL</li>
      </ul>
    ),
  },
];

export default Data;
