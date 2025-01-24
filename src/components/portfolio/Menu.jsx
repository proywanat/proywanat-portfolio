import Work1 from "../../assets/work-1.png";
import Work2 from "../../assets/work-2.png";
import Work3 from "../../assets/work-3.png";
import Work4 from "../../assets/work-4.png";
import Work5 from "../../assets/work-5.png";
import Work6 from "../../assets/work-6.png";

const Menu = [
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
    link: "https://github.com/proywanat/MyCongeeApplication",
  },
  {
    id: 2,
    image: Work2,
    title: "Property Perfect Sale management",
    desc: (
        <div>
          <ul class="work__desc">
            <li>NextTS</li>
            <li>NodeJS</li>
            <li>MySQL</li>
          </ul>
        </div>
    ),
    category: "Web Application",
    link: "",
  },
  {
    id: 3,
    image: Work3,
    title: "Jenosize Marketing Cloud",
    desc: (
        <div>
          <ul class="work__desc">
            <li>NextTS</li>
            <li>NodeJS</li>
            <li>MySQL</li>
          </ul>
        </div>
    ),
    category: "Web Application",
    link: "",
  },
  ,
  {
    id: 4,
    image: Work4,
    title: "7Chat&Shop (Extra Phase)",
    desc: (
        <div>
          <ul class="work__desc">
            <li>NextTS</li>
            <li>NodeJS</li>
            <li>MySQL</li>
          </ul>
        </div>
    ),
    category: "Web Application",
    link: "",
  },
  ,
  {
    id: 5,
    image: Work5,
    title: "Search Product iDP on WooCommerce",
    desc: (
        <div>
          <ul class="work__desc">
            <li>NextTS</li>
            <li>SpringBoot</li>
          </ul>
        </div>
    ),
    category: "Web Application",
    link: "",
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
    link: "",
  },
];

export default Menu;
