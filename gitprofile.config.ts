// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'acphotinakis', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 30, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['acphotinakis/acphotinakis.github.io'],
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'],
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
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
    title: 'Portfolio of Andrew Photinakis',
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
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '(301)-569-0221',
    email: 'andrewcphotinakis@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
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
    'Bash scripting',
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
    'Object-Oriented Programming (OOP)',
    'API Development & Integration',
    'Data Processing & ETL',
    'Automated Testing',
    'Software Architecture & Design Patterns',
    'Parallel & Distributed Systems',
    'Data Mining',
    'Software Engineering Principles',
    'Web Scraping',
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
    // 'Docker',
    // 'JUnit',
    // 'Valgrind',
    // 'GDB',
    // 'MongoDB',
    // 'Object-Oriented Programming (OOP)',
    // 'Web Development',
    // 'API Development & Integration',
    // 'Data Processing & ETL',
    // 'Automated Testing',
    // 'Version Control (Git)',
    // 'Software Architecture & Design Patterns',
    // 'Problem Solving',
    // 'Critical Thinking',
    // 'Project Management',
    // 'UI/UX Design & Testing',
    // 'Network Protocol Analysis',
    // 'Database Management (NoSQL, JSON)',
    // 'Machine Learning (basic coursework)',
    // 'Financial Management & Economics (related coursework)',
    // 'Parallel & Distributed Systems',
    // 'Data Mining',
    // 'Software Engineering Principles',
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
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
