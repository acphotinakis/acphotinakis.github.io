// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'acphotinakis',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'manual',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: ['acphotinakis/acphotinakis.github.io'],
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'acphotinakis/CipherPrimes',
          'acphotinakis/SecureComm',
          'acphotinakis/SudokuSolver',
          'acphotinakis/facebook-clone',
          'acphotinakis/webfinvizapi',
          'acphotinakis/DiskUsage',
          'acphotinakis/RadixIP',
          'acphotinakis/Keyboard-E-Store',
          'acphotinakis/JamGame',
          'acphotinakis/TradeSync',
        ],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Andrew Photinakis',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'andrew-photinakis',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'acphotinakis',
    stackoverflow: '17283877/acp-8103',
    skype: '',
    telegram: '',
    website: '',
    phone: '(301)-569-0221',
    email: 'andrewcphotinakis@gmail.com',
  },
  resume: {
    fileUrl: '../acphotinakis.github.io/src/assets/Resume.pdf',
  },
  languages: [
    'Python',
    'Java',
    'C#',
    'C++',
    'C',
    'TypeScript',
    'JavaScript',
    'XML',
    'SQL',
    'Bash Scripting',
  ],
  frameworksAndLibraries: [
    'Java (Spring Boot)',
    'Boost C++ Libraries',
    'Selenium',
    'PyTest',
    'JUnit',
    'Angular',
    'React',
  ],
  toolsAndTechnologies: [
    'Swagger',
    'Azure Data Factory',
    'Power Automate',
    'Azure Functions',
    'REST APIs',
    'SOAP APIs',
    'Git',
    'DLL Interfaces',
    'Wireshark',
    'Postman',
    'Valgrind',
    'GDB',
    'MongoDB',
  ],
  conceptsAndSkills: [
    'OOP',
    'API Dev & Integration',
    'Data Processing & ETL',
    'Automated Testing',
    'Software Architecture & Design Patterns',
    'Parallel & Distributed Systems',
    'Data Mining',
    'Software Engineering Principles',
    'Web Scraping',
  ],
  languagesLevel: [
    90, // Python
    95, // Java
    85, // C#
    80, // C++
    85, // C
    70, // TypeScript
    80, // JavaScript
    95, // XML
    85, // SQL
    80, // Bash scripting
  ],
  frameworksAndLibrariesLevel: [
    60, // Java (Spring Boot)
    50, // Boost C++ Libraries
    75, // Selenium
    75, // PyTest
    75, // JUnit
    80, // Angular
    80, // React
  ],
  toolsAndTechnologiesLevel: [
    90, // Swagger
    95, // Azure Data Factory
    95, // Power Automate
    95, // Azure Functions
    95, // REST APIs
    95, // SOAP APIs
    90, // Git
    80, // DLL Interfaces
    50, // Wireshark
    90, // Postman
    60, // Valgrind
    60, // GDB
    60, // MongoDB
  ],
  conceptsAndSkillsLevel: [
    100, // OOP
    85, // API Dev & Integration
    85, // Data Processing & ETL
    85, // Automated Testing
    80, // Software Architecture & Design Patterns
    80, // Parallel & Distributed Systems
    70, // Data Mining
    85, // Software Engineering Principles
    90, // Web Scraping
  ],
  skills: [
    'C#',
    'Python',
    'Java',
    'C++',
    'TypeScript',
    'JavaScript (Angular)',
    'XML',
    'Bash scripting',
    'SQL',
    'Java (Spring Boot)',
    'C',
    'HTML/CSS',
    'Swagger',
    'Azure Data Factory',
    'Power Automate',
    'Azure Functions',
    'REST APIs',
    'SOAP APIs',
    'Git',
    'Boost C++ Libraries',
    'DLL Interfaces',
    'Selenium',
    'PyTest',
    'Wireshark',
    'Postman',
    'Visual Studio Code',
    'Visual Studio',
    'JetBrains IDEs (e.g., IntelliJ IDEA)',
  ],
  courses: [
    { courseName: 'Analysis of Algorithms', courseCode: 'CSCI261' },
    { courseName: 'Concepts of Computer Systems', courseCode: 'CSCI250' },
    {
      courseName: 'Concepts of Parallel & Distributed Systems',
      courseCode: 'CSCI251',
    },
    { courseName: 'Discrete Math for Computing', courseCode: 'MATH190' },
    { courseName: 'Financial Management I', courseCode: 'FINC220' },
    { courseName: 'Financial Management II', courseCode: 'FINC352' },
    { courseName: 'Intro to Artificial Intelligence', courseCode: 'CSCI331' },
    { courseName: 'Intro to Computer Science Theory', courseCode: 'CSCI263' },
    { courseName: 'Intro to Options & Futures', courseCode: 'FINC470' },
    { courseName: 'Intro to Software Engineering', courseCode: 'SWEN261' },
    { courseName: 'Linear Algebra', courseCode: 'MATH241' },
    { courseName: 'Machine Learning', courseCode: 'CSCI335' },
    { courseName: 'Principles of Data Mining', courseCode: 'CSCI420' },
    { courseName: 'Principles of Database Management', courseCode: 'CSCI320' },
    { courseName: 'Stock Market Algorithmic Trading', courseCode: 'FINC425' },
    { courseName: 'The Mechanics of Programming', courseCode: 'CSCI243' },
  ],
  experiences: [
    {
      company: 'TechSource, Inc.',
      position: 'IT Software Co-op',
      from: 'Jan 2024',
      to: 'Present',
      companyLink: 'https://techsource-inc.com/',
    },
    {
      company: 'Herrick Technology Labs, Inc.',
      position: 'Software Engineer Co-op',
      from: 'May 2023',
      to: 'Aug 2023',
      companyLink: 'https://www.herricktechlabs.com/',
    },
    {
      company: 'Rochester Institute of Technology',
      position: 'Calculus Teaching Assistant',
      from: 'Aug 2022',
      to: 'Jan 2023',
      companyLink: 'https://www.rit.edu/',
    },
    {
      company: `DICK'S Sporting Goods`,
      position: 'Operations Associate',
      from: 'May 2022',
      to: 'Aug 2022',
      companyLink: 'https://www.dickssportinggoods.com/',
    },
  ],
  certifications: [
    {
      name: 'Artificial Intelligence Foundations: Machine Learning',
      body: 'Click to view cert',
      year: 'Jan 2024',
      link: 'https://www.linkedin.com/learning/certificates/091a882d535e7bf34f85df5ee4b2a6698b8f1684f676427afd0879aafe2c96f7',
    },
    {
      name: 'Azure DevOps for Beginners',
      body: 'Click to view cert',
      year: 'Jan 2024',
      link: 'https://www.linkedin.com/learning/certificates/ef4a6007df206c381d328472141910cdbcce3d9ed95fc21cb991f9d7b16faf1d',
    },
    {
      name: 'Introduction to Artificial Intelligence',
      body: 'Click to view cert',
      year: 'Jan 2024',
      link: 'https://www.linkedin.com/learning/certificates/bf1ee2c0ffba9fb5c1328eafe5ab6b2a7639f875882b092d9d0404eb38f69455',
    },
    {
      name: 'Algorithmic Trading and Stocks Essential Training',
      body: 'Click to view cert',
      year: 'May 2023',
      link: 'https://www.linkedin.com/learning/certificates/8ea527d66e459c3a37098783dda311ba7cf2a3ffd614b024fa751c18902300bb',
    },
    {
      name: 'Bloomberg Market Concepts Certification',
      body: 'Click to view cert',
      year: 'Nov 2021',
      link: 'https://portal.bloombergforeducation.com/certificates/RH7mhPhh634KXUMhnf7zwvwk',
    },
  ],
  educations: [
    {
      institution: 'Rochester Institute of Technology',
      degree: 'Major: Computer Science',
      from: '2021',
      to: '2026',
    },
    {
      institution: 'Rochester Institute of Technology',
      degree: 'Minor: Finance',
      from: '2021',
      to: '2026',
    },
  ],
  honors: [
    {
      honorName: 'RIT Presidential Scholar',
      from: '2021',
      to: '2026',
    },
    {
      honorName: "Dean's List Fall '24",
      from: '2024',
      to: '2024',
    },
    {
      honorName: "Dean's List Fall '23",
      from: '2023',
      to: '2023',
    },
    {
      honorName: "Dean's List Fall '22",
      from: '2022',
      to: '2022',
    },
    {
      honorName: "Dean's List Spring '22",
      from: '2022',
      to: '2022',
    },
  ],
  publications: [],
  blog: {
    source: 'dev',
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  footer: '',

  enablePWA: true,
};

export default CONFIG;
