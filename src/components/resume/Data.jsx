const Data = [
  {
    id: 1,
    category: "skills",
    icon: "icon-cup",
    title: "Technical Skills",
    desc: (
      <div id="technical-skills">
        <h4>Frontend Development</h4>
        <ul class="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>Angular</li>
        </ul>
        <h4>Backend Development</h4>
        <ul class="skills-list">
          <li>Java</li>
          <li>SpringBoot</li>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>PHP</li>
        </ul>
        <h4>Mobile Development</h4>
        <ul class="skills-list">
          <li>Flutter</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    category: "skills",
    icon: "icon-cup",
    title: "Data Engineering Skills",
    desc: (
      <div id="technical-skills">
        <ul class="skills-list">
          <li>Python</li>
          <li>SQL</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    category: "skills",
    icon: "icon-cup",
    title: "Other Skills",
    desc: (
      <div id="technical-skills">
        <ul class="skills-list">
          <li>Git</li>
          <li>AWS</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    category: "experience",
    icon: "icon-briefcase",
    year: "Dec 2023 - present",
    title: "Software Developer | T-ECOSYS",
    desc: (
      <div className="experience__description">
        Responsible for identifying and resolving system issues to improve
        functionality and enhance security. Develop new features as assigned,
        handling both Frontend and Backend tasks to ensure seamless performance.
        Additionally, contribute to web development projects using WordPress,
        focusing on customization, optimization, and maintenance to meet project
        goals effectively.
      </div>
    ),
  },
  {
    id: 5,
    category: "experience",
    icon: "icon-briefcase",
    year: "Jul 2023 - Nov 2023",
    title: "Full Stack Engineer | Jenosize",
    desc: (
      <div className="experience__description">
        Developed the Marketing Cloud project and adding new features based on
        customer needs, such as CRM management, improving Live Chat, Automate
        Flows and addressing various issues that arise.
      </div>
    ),
  },
];

export default Data;
