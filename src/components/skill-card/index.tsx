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
  SiCplusplus,
  SiTypescript,
  SiSpringboot,
  SiSelenium,
  SiPytest,
  SiJunit5,
  SiSwagger,
  SiPostman,
  SiMongodb,
  SiWireshark,
  SiGnubash,
  SiPython,
} from 'react-icons/si';
import { VscJson, VscAzure } from 'react-icons/vsc';
import { TbFileTypeXml } from 'react-icons/tb';
import { PiFileCSharpLight } from 'react-icons/pi';

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
  | 'OOP'
  | 'API Dev & Integration'
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
  'C#': { icon: <PiFileCSharpLight color="#178600" />, color: '#68217A' },
  'C++': { icon: <SiCplusplus color="#00599C" />, color: '#f34b7d' },
  C: { icon: <SiCplusplus color="#00599C" />, color: '#A8B9CC' },
  TypeScript: { icon: <SiTypescript color="#3178C6" />, color: '#007ACC' },
  JavaScript: { icon: <FaJsSquare color="#F7DF1E" />, color: '#F0DB4F' },
  XML: { icon: <TbFileTypeXml color="#0060AC" />, color: '#FFA500' },
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
    icon: <VscAzure color="#0078D4" />,
    color: '#00BCF2',
  },
  'Power Automate': {
    icon: <VscAzure color="#0078D4" />,
    color: '#00BCF2',
  },
  'Azure Functions': {
    icon: <VscAzure color="#0078D4" />,
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
  OOP: {
    icon: <FaJava color="#5382A1" />,
    color: '#FFA518',
  },
  'API Dev & Integration': {
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
    className="flex flex-col justify-center items-center mb-2 px-8 bg-black rounded-lg shadow-[0_4px_8px_rgba(0,_0,_0,_0.5),_0_-4px_8px_rgba(0,_0,_0,_0.5)] w-full h-32 overflow-hidden"
  >
    <div className="mb-2 text-xl">{icon}</div>
    <span className="text-sm text-center text-white break-words">{skill}</span>
  </div>
);

const SkillCard = ({
  loading,
  skills,
  name,
  id,
}: {
  loading: boolean;
  skills: Array<SkillName>;
  name: string;
  id: string;
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
    <div
      id={id}
      className="card shadow-2xl compact italic w-9/10 rounded-2xl relative z-10 shadow shadow-[0_4px_8px_rgba(0,_0,_0,_0.3),_0_-4px_8px_rgba(0,_0,_0,_0.3)]"
    >
      <div className="relative z-10 flex flex-col items-center px-5 py-4 card-body md:py-8 md:px-8">
        <div className="p-3 mx-3">
          <h5 className="text-lg text-white card-title md:text-xl">
            {loading ? (
              renderSkeleton()
            ) : (
              <span className="block text-white border-t-2 border-b-2 border-blue-500 opacity-100 text-base-content">
                {name}
              </span>
            )}
          </h5>
        </div>
        <div className="w-full m-3 card">
          <div className="p-3">
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-3">
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
