import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Yudhistira Arya Rajasa",
  title: "Hi, I'm Arya",
  subTitle: emoji(
    "Fullstack Developer with 4+ years of experience building scalable web and mobile apps using React, Vue, Electron, and Django. I enjoy turning complex problems into clean, maintainable code."
  ),
  resumeLink: "/resume.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/YudhistiraA",
  linkedin: "https://www.linkedin.com/in/yudhistira-arya-rajasa-wijaya",
  gmail: "aryarajasa0@gmail.com",
  instagram: "https://www.instagram.com/aryarajasa02",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle: "PASSIONATE FULLSTACK DEVELOPER WHO LOVES BUILDING IMPACTFUL SOLUTIONS",
  skills: [
    emoji("⚡ Build interactive and responsive user interfaces with React and Vue"),
    emoji("⚡ Develop RESTful APIs and backend services with Django and Laravel"),
    emoji("⚡ Create cross-platform desktop and mobile apps using Electron and React Native")
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "vuejs", fontAwesomeClassname: "fab fa-vuejs" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "django", fontAwesomeClassname: "fab fa-python" },
    { skillName: "laravel", fontAwesomeClassname: "fab fa-php" },
    { skillName: "git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "SMK Telkom Malang",
      logo: require("./assets/images/telkom.png"),
      subHeader: "Rekayasa Perangkat Lunak",
      duration: "2018 - 2021",
      desc: "Graduated with SAT 90 score. Focused on software engineering fundamentals."
    },
    {
      schoolName: "Universitas Siber Asia",
      logo: require("./assets/images/university.png"),
      subHeader: "Bachelor of Information Systems",
      duration: "2024 - Present",
      desc: "Currently studying Information Systems to strengthen knowledge in IT and digital systems management."
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend / UI", progressPercentage: "90%" },
    { Stack: "Backend / APIs", progressPercentage: "80%" },
    { Stack: "Mobile / Desktop Apps", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Junior Fullstack Developer (Intern)",
      company: "Pt.Gumcode Indonesia",
      companylogo: require("./assets/images/gumcode.png"),
      date: "Jan 2020 – Apr 2020",
      desc: "Collaborated remotely on client projects, converting requirements into technical specifications and continuously upskilling through workshops and courses."
    },
    {
      role: "Frontend Developer",
      company: "Pt.Onehub Solution",
      companylogo: require("./assets/images/onehub.png"),
      date: "Dec 2021 – Jun 2023",
      desc: "Built RAB and admin systems using React and Django. Integrated AI for automated cost estimation, optimized UIs, and ensured responsive design."
    },
    {
      role: "Fullstack Developer",
      company: "AW Advantage",
      companylogo: require("./assets/images/aw.webp"),
      date: "Jun 2023 – Present",
      desc: "Designed APIs, integrated third-party services, and improved performance through front-end optimization."
    }
  ]
};

const openSource = {
  showGithubProfile: true,
  display: true
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES WHERE I CONTRIBUTED AS A FULLSTACK DEVELOPER",
  projects: [
    {
      image: require("./assets/images/fullfilment.avif"),
      projectName: "AW Fulfilment",
      projectDesc: "A scalable warehouse and inventory management platform tailored for modern e-commerce logistics in the UK.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.aw-fulfilment.co.uk/"
        }
      ]
    },
    {
      image: require("./assets/images/aw dropship.avif"),
      projectName: "AW Dropship",
      projectDesc: "A comprehensive dropshipping management system with automated product sync, order flow, and supplier integration.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.aw-dropship.com/"
        }
      ]
    },
    {
      image: require("./assets/images/onehub.png"),
      projectName: "ESL NZ",
      projectDesc: "Smart RAB system with AI-based cost estimation, built using React and Django.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://eslnz.co.nz/"
        }
      ]
    }
  ],
  display: true
};


const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Certifications and milestones throughout my journey",
  achievementsCards: [
    {
      title: "Python Fundamental",
      subtitle: "DQLab Certificate",
      image: require("./assets/images/dqlab-logo.webp"),
      imageAlt: "Python",
      footerLink: [
      ]
    },
    {
      title: "R Fundamental",
      subtitle: "DQLab Certificate",
      image: require("./assets/images/dqlab-logo.webp"),
      imageAlt: "R",
      footerLink: []
    },
    {
      title: "Problem Solving Basic",
      subtitle: "HackerRank Badge",
      image: require("./assets/images/hackerrank.png"),
      imageAlt: "HackerRank",
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "I enjoy writing about web development, frameworks, and tech trends.",
  displayMediumBlogs: false,
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: emoji("I love sharing my knowledge in tech communities"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Coming soon!",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download my latest resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Interested in working together? Let’s connect!",
  number: "+62-831-1106-4467",
  email_address: "aryarajasa0@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
