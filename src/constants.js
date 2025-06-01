// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import zonomo from './assets/company_logo/Zonomo.png';

// Education Section Logo's
import bennett from './assets/education_logo/Bennett.png';
import school from './assets/education_logo/School.png';

// Project Section Logo's
import Shopease  from './assets/work_logo/Shopease';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import npmLogo from './assets/work_logo/npm.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: zonomo,
      role: "Frontend Developer",
      company: "Zonomo",
      date: "May 2025 - Present",
      desc: "Building a responsive digital platform for Zonomo using React.js while collaborating on MVP development, UI/UX strategy, and gaining exposure to AI tools and startup workflows.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Express JS",
        "Git",
        "GitHub",
        "Postman",
        "Vercel",
      ],
    },
    {
      id: 1,
      img: bennett,
      role: "Core Member,Career Advancement Commitee",
      company: "Career Advancement Commitee, Bennett University",
      date: "April 2025 - june 2025",
      desc: "Core member of Bennett University's Career Advancement Committee, organizing workshops, career sessions, and networking events to support student growth. Collaborated with faculty and industry experts to enhance career readiness and engagement.",
      skills: [
  "Event Planning",
  "Career Counseling",
  "Workshop Coordination",
  "Student Engagement",
  "Communication",
  "Collaboration",
  "Networking",
  "Resume Building Guidance",
  "Internship & Placement Support",
  "Teamwork",
  "Organizational Skills"
]
,
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: bennett,
      school: "Bennett University, Greater Noida",
      date: "Sept 2022 - Present",
      grade: "7.81 CGPA",
      desc: "I am currently pursuing my B.Tech in Computer Science and Engineering from Bennett University. Throughout my academic journey, I have developed a strong foundation in programming, software development, and core computer science principles. My coursework includes subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I have actively participated in various workshops, hackathons, and technical events organized at the university, which have significantly enhanced my practical skills and technical knowledge. My experience at Bennett University has played a vital role in shaping my technical abilities and fostering my professional growth.",
      degree: "Bachelor of technology - B.Tech (Computer Science)",
    },
    {
      id: 1,
      img: school,
      school: "St Clare's Senior Secondary School, Agra Cantt",
      date: "Apr 2020 - March 2021",
      grade: "83.4%",
      desc: "I completed my class 12 education from St Clare's Senior Secondary School, Agra Cantt, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
      {
      id: 2,
      img: school,
      school: "St Clare's Senior Secondary School, Agra Cantt",
      date: "Sept 2018 - March 2019",
      grade: "88.4%",
      desc: "I completed my class 10 education from St Clare's Senior Secondary School, Agra Cantt, under the CBSE board. During this period, I developed a strong foundation in various subjects, including Mathematics, Science, and English, which has been instrumental in shaping my academic journey.",
      degree: "CBSE(X) - All Subjects",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "ShopEase - Smart Shopping UI",
      description:
        "A sleek and responsive e-commerce front-end built with React.js, Tailwind CSS, and Vite. ShopEase offers a seamless user experience with features like an auto-rotating banner, product filters, dark/light mode toggle, and smooth sliding testimonials. Optimized for performance with load times under 50ms and deployed via GitHub Pages.",
      image: Shopease,
      tags: ["React", "Tailwind", "JavaScript", "API"],
      github: "https://github.com/vishalp018/ShopEase-Smart-Shopping-UI",
      webapp: "https://github.com/vishalp018/ShopEase-Smart-Shopping-UI",
    },
    {
      id: 1,
      title: "CS Prep",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Email Validator NPM Package",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
  ];  