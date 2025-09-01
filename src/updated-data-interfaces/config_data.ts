const UPDATED_CONFIG = {
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
  updated_languages: [
    {
      name: 'Python',
      level: 90,
      bullets: [
        'Used extensively for Data Science projects',
        'Built a Web Scraper for financial data',
        'Applied in Machine Learning coursework',
      ],
    },
    {
      name: 'Java',
      level: 95,
      bullets: [
        'Developed REST APIs using Spring Boot',
        'Implemented algorithms in coursework (CSCI261)',
        'Built trading simulator in JavaFX',
      ],
    },
    {
      name: 'C++',
      level: 80,
      bullets: [
        'Implemented Sudoku Solver',
        'Worked with Boost libraries for parsing',
        'Developed memory-intensive programs with Valgrind debugging',
      ],
    },
    {
      name: 'JavaScript / TypeScript',
      level: 75,
      bullets: [
        'Built Angular-based frontend projects',
        'React prototypes for dashboards',
        'Integrated APIs into UI components',
      ],
    },
    {
      name: 'SQL',
      level: 85,
      bullets: [
        'Database schema design for coursework',
        'Used in ETL pipelines with Azure Data Factory',
        'Hands-on in RIT Database Management class (CSCI320)',
      ],
    },
  ],

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

  skillsData: {
    updated_languages: [
      {
        name: 'Python',
        level: 90,
        bullets: [
          'Used extensively for Data Science projects',
          'Built a Web Scraper for financial data',
          'Applied in Machine Learning coursework',
        ],
        category: 'language',
        experience: 3,
        proficiency: 'Expert',
        projects: ['Financial Web Scraper', 'ML Classifier'],
      },
      {
        name: 'Java',
        level: 95,
        bullets: [
          'Developed REST APIs using Spring Boot',
          'Implemented algorithms in coursework (CSCI261)',
          'Built trading simulator in JavaFX',
        ],
        category: 'language',
        experience: 4,
        proficiency: 'Expert',
        projects: ['Trading Simulator', 'CSCI261 Projects'],
      },
      {
        name: 'C++',
        level: 80,
        bullets: [
          'Implemented Sudoku Solver',
          'Worked with Boost libraries for parsing',
          'Developed memory-intensive programs with Valgrind debugging',
        ],
        category: 'language',
        experience: 3,
        proficiency: 'Advanced',
        projects: ['Sudoku Solver', 'Memory Profiler Project'],
      },
      {
        name: 'JavaScript / TypeScript',
        level: 75,
        bullets: [
          'Built Angular-based frontend projects',
          'React prototypes for dashboards',
          'Integrated APIs into UI components',
        ],
        category: 'language',
        experience: 2,
        proficiency: 'Intermediate',
        projects: ['Dashboard Prototypes', 'Angular Frontend Apps'],
      },
      {
        name: 'SQL',
        level: 85,
        bullets: [
          'Database schema design for coursework',
          'Used in ETL pipelines with Azure Data Factory',
          'Hands-on in RIT Database Management class (CSCI320)',
        ],
        category: 'language',
        experience: 3,
        proficiency: 'Advanced',
        projects: ['ETL Pipelines', 'CSCI320 DB Projects'],
      },
    ],

    frameworksAndLibraries: [
      {
        name: 'Java (Spring Boot)',
        level: 60,
        bullets: [
          'Built REST APIs',
          'Implemented backend services',
          'Unit testing with JUnit',
        ],
        category: 'framework',
        experience: 2,
        proficiency: 'Intermediate',
        projects: ['REST API Project', 'Backend Services App'],
      },
      {
        name: 'Boost C++ Libraries',
        level: 50,
        bullets: [
          'Used Boost for parsing and memory management',
          'Integrated with C++ projects',
        ],
        category: 'framework',
        experience: 2,
        proficiency: 'Intermediate',
        projects: ['C++ Parsing Project', 'Memory Management App'],
      },
      {
        name: 'Selenium',
        level: 75,
        bullets: [
          'Automated UI testing',
          'Regression testing of web applications',
        ],
        category: 'framework',
        experience: 2,
        proficiency: 'Advanced',
        projects: ['Web App Test Suite'],
      },
      {
        name: 'PyTest',
        level: 75,
        bullets: ['Unit testing Python projects', 'CI/CD integration testing'],
        category: 'framework',
        experience: 2,
        proficiency: 'Advanced',
        projects: ['Python Test Suite', 'CI/CD Integration'],
      },
      {
        name: 'JUnit',
        level: 75,
        bullets: ['Java unit testing', 'Test coverage and integration'],
        category: 'framework',
        experience: 2,
        proficiency: 'Advanced',
        projects: ['Java Unit Tests'],
      },
      {
        name: 'Angular',
        level: 80,
        bullets: ['Frontend SPA development', 'Integrated APIs with UI'],
        category: 'framework',
        experience: 3,
        proficiency: 'Advanced',
        projects: ['Angular Dashboard Apps'],
      },
      {
        name: 'React',
        level: 80,
        bullets: ['React dashboards', 'Reusable components with TypeScript'],
        category: 'framework',
        experience: 2,
        proficiency: 'Advanced',
        projects: ['React Dashboard Projects'],
      },
    ],

    toolsAndTechnologies: [
      {
        name: 'Swagger',
        level: 90,
        bullets: ['API documentation', 'REST API design'],
        category: 'tool',
        experience: 3,
        proficiency: 'Expert',
        projects: ['REST API Docs'],
      },
      {
        name: 'Azure Data Factory',
        level: 95,
        bullets: ['ETL pipelines', 'Data transformation workflows'],
        category: 'tool',
        experience: 3,
        proficiency: 'Expert',
        projects: ['ETL Pipeline Project'],
      },
      {
        name: 'Power Automate',
        level: 95,
        bullets: ['Workflow automation', 'Integration with Microsoft apps'],
        category: 'tool',
        experience: 2,
        proficiency: 'Expert',
        projects: ['Workflow Automation Project'],
      },
      {
        name: 'Azure Functions',
        level: 95,
        bullets: ['Serverless computing', 'Event-driven functions'],
        category: 'tool',
        experience: 2,
        proficiency: 'Expert',
        projects: ['Serverless Event App'],
      },
      {
        name: 'REST APIs',
        level: 95,
        bullets: [
          'API development and integration',
          'Backend services for frontend consumption',
        ],
        category: 'tool',
        experience: 4,
        proficiency: 'Expert',
        projects: ['Backend API Services'],
      },
      {
        name: 'SOAP APIs',
        level: 95,
        bullets: ['Legacy API integration', 'Enterprise service workflows'],
        category: 'tool',
        experience: 3,
        proficiency: 'Expert',
        projects: ['Enterprise Service App'],
      },
      {
        name: 'Git',
        level: 90,
        bullets: [
          'Version control',
          'Collaboration workflows',
          'Branch management',
        ],
        category: 'tool',
        experience: 4,
        proficiency: 'Expert',
        projects: ['Team Projects', 'Open Source Contributions'],
      },
      {
        name: 'DLL Interfaces',
        level: 80,
        bullets: ['Dynamic library integration', 'Cross-platform C++ modules'],
        category: 'tool',
        experience: 2,
        proficiency: 'Advanced',
        projects: ['C++ Library Integration'],
      },
      {
        name: 'Wireshark',
        level: 50,
        bullets: ['Network packet analysis', 'Troubleshooting network issues'],
        category: 'tool',
        experience: 1,
        proficiency: 'Intermediate',
        projects: ['Network Analysis Tasks'],
      },
      {
        name: 'Postman',
        level: 90,
        bullets: ['API testing', 'Automated request collections'],
        category: 'tool',
        experience: 3,
        proficiency: 'Expert',
        projects: ['API Testing Automation'],
      },
      {
        name: 'Valgrind',
        level: 60,
        bullets: ['Memory leak detection', 'Performance profiling'],
        category: 'tool',
        experience: 2,
        proficiency: 'Intermediate',
        projects: ['Memory Profiling Projects'],
      },
      {
        name: 'GDB',
        level: 60,
        bullets: ['Debugging C/C++ applications', 'Step-through analysis'],
        category: 'tool',
        experience: 2,
        proficiency: 'Intermediate',
        projects: ['C++ Debugging Projects'],
      },
      {
        name: 'MongoDB',
        level: 60,
        bullets: ['Database design', 'Query optimization'],
        category: 'tool',
        experience: 2,
        proficiency: 'Intermediate',
        projects: ['Database Design Projects'],
      },
    ],

    conceptsAndSkills: [
      {
        name: 'OOP',
        level: 100,
        bullets: [
          'Applied in multiple projects',
          'C#/Java class hierarchy design',
        ],
        category: 'concept',
        experience: 4,
        proficiency: 'Expert',
        projects: ['All OOP Projects'],
      },
      {
        name: 'API Dev & Integration',
        level: 85,
        bullets: ['REST and SOAP APIs', 'Microservice integration'],
        category: 'concept',
        experience: 3,
        proficiency: 'Advanced',
        projects: ['Microservice Integration Project'],
      },
      {
        name: 'Data Processing & ETL',
        level: 85,
        bullets: ['Azure Data Factory', 'Python ETL scripts'],
        category: 'concept',
        experience: 3,
        proficiency: 'Advanced',
        projects: ['ETL Pipeline Project'],
      },
      {
        name: 'Automated Testing',
        level: 85,
        bullets: ['PyTest, JUnit, Selenium', 'CI/CD integration'],
        category: 'concept',
        experience: 3,
        proficiency: 'Advanced',
        projects: ['CI/CD Test Automation'],
      },
      {
        name: 'Software Architecture & Design Patterns',
        level: 80,
        bullets: [
          'MVC, Singleton, Observer patterns',
          'Scalable software design',
        ],
        category: 'concept',
        experience: 3,
        proficiency: 'Advanced',
        projects: ['Scalable Software Projects'],
      },
      {
        name: 'Parallel & Distributed Systems',
        level: 80,
        bullets: ['Multi-threading', 'Cloud-based distributed tasks'],
        category: 'concept',
        experience: 2,
        proficiency: 'Advanced',
        projects: ['Distributed Task Projects'],
      },
      {
        name: 'Data Mining',
        level: 70,
        bullets: ['Web scraping', 'Data analysis projects'],
        category: 'concept',
        experience: 2,
        proficiency: 'Intermediate',
        projects: ['Web Scraping Project', 'Data Analysis Project'],
      },
      {
        name: 'Software Engineering Principles',
        level: 85,
        bullets: ['Agile methodologies', 'Version control best practices'],
        category: 'concept',
        experience: 3,
        proficiency: 'Advanced',
        projects: ['Team Development Projects'],
      },
      {
        name: 'Web Scraping',
        level: 90,
        bullets: [
          'Python and Selenium based scraping',
          'Data extraction automation',
        ],
        category: 'concept',
        experience: 3,
        proficiency: 'Expert',
        projects: ['Financial Web Scraper', 'Data Extraction Automation'],
      },
    ],
  },
};

export default UPDATED_CONFIG;
