// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
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
import dockerLogo from './assets/tech_logo/docker.svg';
import awsLogo from './assets/tech_logo/aws.svg';
import seleniumLogo from './assets/tech_logo/selenium.svg';
import jiraLogo from './assets/tech_logo/jira.svg';
import redisLogo from './assets/tech_logo/redis.svg';
import cucumberLogo from './assets/tech_logo/cucumber.svg';

// Experience Section Logo's
import aistrike from './assets/company_logo/aistrike.png';
import springworks from './assets/company_logo/springworks.png';
import hitutor from './assets/company_logo/hitutor.png';

// Education Section Logo's
import bennett from './assets/education_logo/Bennett.png';
import school from './assets/education_logo/School.png';

// Project Section Logo's
import Shopease from './assets/work_logo/Shopease.png';
import Healthinfi from './assets/work_logo/Healthinfi.png';

export const RESUME_LINK =
  'https://drive.google.com/file/d/1z7UpG8b-gCNaHzSDeR4ngJsjY5fQCp6n/view?usp=sharing';

export const SkillsInfo = [
  {
    title: 'QA & Testing',
    skills: [
      { name: 'Selenium', logo: seleniumLogo },
      { name: 'Playwright', logo: postmanLogo },
      { name: 'Cucumber BDD', logo: cucumberLogo },
      { name: 'Manual Testing', logo: vscodeLogo },
      { name: 'API Testing', logo: postmanLogo },
      { name: 'Test Case Design', logo: figmaLogo },
      { name: 'Regression Testing', logo: gitLogo },
      { name: 'JIRA', logo: jiraLogo },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend & DevOps',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'Spring Boot', logo: springbootLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Redis', logo: redisLogo },
      { name: 'Docker', logo: dockerLogo },
      { name: 'AWS', logo: awsLogo },
      { name: 'GitHub Actions', logo: githubLogo },
    ],
  },
  {
    title: 'Languages & Tools',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: aistrike,
    role: 'Software Engineering Intern (QA & Test Automation)',
    company: 'AiStrike',
    companyUrl: 'https://aistrike.com/',
    date: 'Dec 2025 - Present',
    desc: 'Automating regression and functional test cases with Selenium WebDriver and Playwright across 3–4 product releases per month. Authoring BDD scenarios with Cucumber, executing manual and API testing, and embedding automated suites into CI/CD pipelines via GitHub Actions and Docker.',
    skills: [
      'Selenium',
      'Playwright',
      'Cucumber BDD',
      'Manual Testing',
      'API Testing',
      'JIRA',
      'GitHub Actions',
      'Docker',
      'CI/CD',
    ],
  },
  {
    id: 1,
    img: springworks,
    role: 'Operations & Data Engineering Intern',
    company: 'Springworks',
    companyUrl: 'https://www.springworks.in/',
    date: 'Oct 2025 - Dec 2025',
    desc: 'Engineered ETL pipelines in Python to extract, transform, and load structured data across internal systems, cutting manual data-handling effort by over 50%. Streamlined workflows by eliminating redundant processing steps and improving pipeline reliability.',
    skills: [
      'Python',
      'ETL Pipelines',
      'Data Engineering',
      'Workflow Automation',
      'SQL',
      'Git',
    ],
  },
  {
    id: 2,
    img: hitutor,
    role: 'Backend Development Intern',
    company: 'HiTutor (formerly Zinovaa)',
    companyUrl: 'https://www.hitutor.in/',
    date: 'July 2025 - Oct 2025',
    desc: 'Built and maintained 20+ RESTful API endpoints using Node.js and Express.js. Optimized PostgreSQL queries through targeted indexing strategies, improving performance by over 60% on frequently accessed tables.',
    skills: [
      'Node JS',
      'Express JS',
      'PostgreSQL',
      'REST APIs',
      'JWT',
      'Git',
      'Postman',
    ],
  },
  {
    id: 3,
    img: bennett,
    role: 'Core Member, Career Advancement Committee',
    company: 'Career Advancement Committee, Bennett University',
    companyUrl: 'https://www.bennett.edu.in/',
    date: 'April 2025 - June 2025',
    desc: 'Core member organizing workshops, career sessions, and networking events to support student growth. Collaborated with faculty and industry experts to enhance career readiness and engagement.',
    skills: [
      'Event Planning',
      'Career Counseling',
      'Workshop Coordination',
      'Student Engagement',
      'Networking',
      'Team Leadership',
    ],
  },
];

export const education = [
  {
    id: 0,
    img: bennett,
    school: 'Bennett University, Greater Noida',
    date: 'Aug 2022 - May 2026',
    grade: '7.62 CGPA | Dean\'s List (Rank 18)',
    desc: 'Pursuing B.Tech in Computer Science and Engineering with strong foundations in DSA, software engineering, databases, and web development. Active in workshops, hackathons, and technical events that sharpen practical skills.',
    degree: 'Bachelor of Technology - B.Tech (Computer Science)',
  },
  {
    id: 1,
    img: school,
    school: "St Clare's Senior Secondary School, Agra Cantt",
    date: 'Apr 2020 - March 2021',
    grade: '83.4%',
    desc: "Completed class 12 under the CBSE board with Physics, Chemistry, and Mathematics (PCM) along with Computer Science.",
    degree: 'CBSE(XII) - PCM with Computer Science',
  },
  {
    id: 2,
    img: school,
    school: "St Clare's Senior Secondary School, Agra Cantt",
    date: 'Sept 2018 - March 2019',
    grade: '88.4%',
    desc: 'Completed class 10 under the CBSE board, building a strong foundation in Mathematics, Science, and English.',
    degree: 'CBSE(X) - All Subjects',
  },
];

export const achievements = [
  {
    id: 0,
    title: 'IEEE Published Research',
    desc: 'Enhancing Autism Diagnosis Using Federated Learning — IEEE Xplore, 2025.',
  },
  {
    id: 1,
    title: '800+ DSA Problems Solved',
    desc: 'Competitive programming across LeetCode, GeeksforGeeks, and CodeChef.',
  },
  {
    id: 2,
    title: 'Industry Certifications',
    desc: 'Microsoft OOP in C++, Google IT Support Professional, AWS Fundamentals.',
  },
];

export const projects = [
  {
    id: 0,
    title: 'ResuMIND — AI Resume Analyzer',
    description:
      'AI-powered resume analyzer using NLP (spaCy) for keyword matching and skill gap analysis. Redis queues handle concurrent uploads; Docker and AWS power production deployment.',
    image: Shopease,
    tags: ['Next.js', 'TypeScript', 'Python', 'spaCy', 'Redis', 'Docker', 'AWS'],
    github: 'https://github.com/vishalp018',
    webapp: 'https://vishalpal18.vercel.app/',
  },
  {
    id: 1,
    title: 'ShopEase — Full-Stack E-Commerce',
    description:
      'Full-stack e-commerce platform with JWT authentication, product management, cart, and order flow. RabbitMQ decouples order processing; code-splitting and Redux cut load time by 40%+.',
    image: Shopease,
    tags: ['React', 'Node.js', 'MongoDB', 'Redux', 'RabbitMQ', 'Tailwind'],
    github: 'https://github.com/vishalp018/ShopEase-Smart-Shopping-UI',
    webapp: 'https://github.com/vishalp018/ShopEase-Smart-Shopping-UI',
  },
  {
    id: 2,
    title: 'HealthInfo — AI Disease Predictor',
    description:
      'ML-powered web app built with Python and Streamlit that predicts diseases like Breast Cancer, Diabetes, and Heart Disease with 85%+ accuracy using scikit-learn on health datasets.',
    image: Healthinfi,
    tags: ['Python', 'Streamlit', 'scikit-learn', 'Pandas', 'ML'],
    github: 'https://github.com/vishalp018/Heath_Infi',
    webapp: 'https://heathinfi-vishal.streamlit.app/',
  },
];
