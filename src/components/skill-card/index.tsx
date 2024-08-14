import {
  FaJava,
  FaJsSquare,
  FaPython,
  FaDatabase,
  FaAngular,
  FaReact,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiCsharp,
  SiCplusplus,
  SiTypescript,
  SiXaml,
  SiSpringboot,
  SiSelenium,
  SiPytest,
  SiJunit5,
  SiSwagger,
  SiAzurefunctions,
  SiPostman,
  SiMongodb,
  SiWireshark,
  SiGnubash,
  SiPython,
} from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';
import { skeleton } from '../../utils';

// Define a union type for valid skill keys
type SkillName =
  | 'Python'
  | 'Java'
  | 'C#'
  | 'C++'
  | 'C'
  | 'TypeScript'
  | 'JavaScript'
  | 'XML'
  | 'SQL'
  | 'Bash Scripting'
  | 'Java (Spring Boot)'
  | 'Boost C++ Libraries'
  | 'Selenium'
  | 'PyTest'
  | 'JUnit'
  | 'Angular'
  | 'React'
  | 'Swagger'
  | 'Azure Data Factory'
  | 'Power Automate'
  | 'Azure Functions'
  | 'REST APIs'
  | 'SOAP APIs'
  | 'Git'
  | 'DLL Interfaces'
  | 'Wireshark'
  | 'Postman'
  | 'Valgrind'
  | 'GDB'
  | 'MongoDB'
  | 'Object-Oriented Programming (OOP)'
  | 'API Development & Integration'
  | 'Data Processing & ETL'
  | 'Automated Testing'
  | 'Software Architecture & Design Patterns'
  | 'Parallel & Distributed Systems'
  | 'Data Mining'
  | 'Software Engineering Principles'
  | 'Web Scraping';

// Define the skills and their associated icons and colors
const skillIcons: Record<SkillName, { icon: JSX.Element; color: string }> = {
  Python: { icon: <FaPython color="#306998" />, color: '#FFD43B' },
  Java: { icon: <FaJava color="#5382A1" />, color: '#FFA518' },
  'C#': { icon: <SiCsharp color="#178600" />, color: '#68217A' },
  'C++': { icon: <SiCplusplus color="#00599C" />, color: '#f34b7d' },
  C: { icon: <SiCplusplus color="#00599C" />, color: '#A8B9CC' },
  TypeScript: { icon: <SiTypescript color="#3178C6" />, color: '#007ACC' },
  JavaScript: { icon: <FaJsSquare color="#F7DF1E" />, color: '#F0DB4F' },
  XML: { icon: <SiXaml color="#0060AC" />, color: '#FFA500' },
  SQL: { icon: <FaDatabase color="#00618A" />, color: '#E38C00' },
  'Bash Scripting': { icon: <SiGnubash color="#4EAA25" />, color: '#000000' },
  'Java (Spring Boot)': {
    icon: <SiSpringboot color="#6DB33F" />,
    color: '#FFA518',
  },
  'Boost C++ Libraries': {
    icon: <SiCplusplus color="#00599C" />,
    color: '#f34b7d',
  },
  Selenium: { icon: <SiSelenium color="#43B02A" />, color: '#34B25F' },
  PyTest: { icon: <SiPytest color="#4B8BBE" />, color: '#306998' },
  JUnit: { icon: <SiJunit5 color="#25A162" />, color: '#E34F26' },
  Angular: { icon: <FaAngular color="#DD0031" />, color: '#E23237' },
  React: { icon: <FaReact color="#61DAFB" />, color: '#282C34' },
  Swagger: { icon: <SiSwagger color="#85EA2D" />, color: '#0C7B46' },
  'Azure Data Factory': {
    icon: <SiAzurefunctions color="#0078D4" />,
    color: '#00BCF2',
  },
  'Power Automate': {
    icon: <SiAzurefunctions color="#0078D4" />,
    color: '#00BCF2',
  },
  'Azure Functions': {
    icon: <SiAzurefunctions color="#0078D4" />,
    color: '#00BCF2',
  },
  'REST APIs': { icon: <VscJson color="#FFCA28" />, color: '#0C7B46' },
  'SOAP APIs': { icon: <VscJson color="#FFCA28" />, color: '#0C7B46' },
  Git: { icon: <FaGitAlt color="#F05032" />, color: '#E94E32' },
  'DLL Interfaces': { icon: <SiGnubash color="#4EAA25" />, color: '#000000' },
  Wireshark: { icon: <SiWireshark color="#1679A7" />, color: '#0073BB' },
  Postman: { icon: <SiPostman color="#FF6C37" />, color: '#FF6C37' },
  Valgrind: { icon: <SiCplusplus color="#00599C" />, color: '#5E5E5E' },
  GDB: { icon: <SiCplusplus color="#00599C" />, color: '#5E5E5E' },
  MongoDB: { icon: <SiMongodb color="#47A248" />, color: '#4DB33D' },
  'Object-Oriented Programming (OOP)': {
    icon: <FaJava color="#5382A1" />,
    color: '#FFA518',
  },
  'API Development & Integration': {
    icon: <VscJson color="#FFCA28" />,
    color: '#0C7B46',
  },
  'Data Processing & ETL': {
    icon: <FaDatabase color="#00618A" />,
    color: '#E38C00',
  },
  'Automated Testing': {
    icon: <SiSelenium color="#43B02A" />,
    color: '#34B25F',
  },
  'Software Architecture & Design Patterns': {
    icon: <FaJava color="#5382A1" />,
    color: '#FFA518',
  },
  'Parallel & Distributed Systems': {
    icon: <FaDatabase color="#00618A" />,
    color: '#E38C00',
  },
  'Data Mining': { icon: <FaDatabase color="#00618A" />, color: '#E38C00' },
  'Software Engineering Principles': {
    icon: <FaJava color="#5382A1" />,
    color: '#FFA518',
  },
  'Web Scraping': { icon: <SiPython color="#306998" />, color: '#FFD43B' },
};

const SkillListItem = ({
  icon,
  skill,
}: {
  icon: JSX.Element;
  skill: SkillName;
}) => (
  <div
    key={skill}
    className="flex flex-col justify-center items-center mb-2 p-4 bg-white rounded-lg shadow-md w-full h-32"
  >
    <div className="mb-2 text-xl">{icon}</div>
    <span className="text-base text-black">{skill}</span>
  </div>
);

const SkillCard = ({
  loading,
  skills,
  name,
}: {
  loading: boolean;
  skills: Array<SkillName>;
  name: string;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index} className="mb-2">
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
        </div>,
      );
    }
    return array;
  };

  return (
    <div className="card shadow-2xl compact italic w-full rounded-2xl relative z-10">
      <div className="card-body flex flex-col items-center py-4 px-4 md:py-8 md:px-8 relative z-10">
        <div className="mx-3 p-3">
          <h5 className="card-title text-black text-lg md:text-xl">
            {loading ? (
              renderSkeleton()
            ) : (
              <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500 block">
                {name}
              </span>
            )}
          </h5>
        </div>
        <div className="card m-3">
          <div className="p-3">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-3 grid-cols-1 w-full">
              {loading
                ? renderSkeleton()
                : skills.map((skill) => {
                    const { icon } = skillIcons[skill];
                    return (
                      <SkillListItem key={skill} icon={icon} skill={skill} />
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
