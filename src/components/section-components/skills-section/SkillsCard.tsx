import { Skill } from '@/data/page_data/websiteInterfaces';
import { skeleton } from '../../../utils';
import { COLOR_SCHEMA } from '@/interfaces/colorSchema';
import React from 'react';

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
  SiCplusplus,
} from 'react-icons/si';
import { VscJson, VscAzure } from 'react-icons/vsc';
import { TbFileTypeXml } from 'react-icons/tb';
import { PiFileCSharpLight } from 'react-icons/pi';
import { SkillNames } from '@/data/page_data/websiteInterfaces';

// Skill icons mapped to skill names
const SKILL_ICONS: Record<
  SkillNames,
  { icon: React.ReactElement; color: string }
> = {
  Python: {
    icon: <FaPython color={COLOR_SCHEMA.accentYellow} />,
    color: COLOR_SCHEMA.accentYellow,
  },
  Java: {
    icon: <FaJava color={COLOR_SCHEMA.accentYellow} />,
    color: COLOR_SCHEMA.accentYellow,
  },
  'C#': {
    icon: <PiFileCSharpLight color={COLOR_SCHEMA.accentBlue} />,
    color: COLOR_SCHEMA.accentBlue,
  },
  'C++': {
    icon: <SiCplusplus color={COLOR_SCHEMA.accentRed} />,
    color: COLOR_SCHEMA.accentRed,
  },
  C: {
    icon: <SiCplusplus color={COLOR_SCHEMA.accentBlue} />,
    color: COLOR_SCHEMA.accentBlue,
  },
  TypeScript: {
    icon: <SiTypescript color={COLOR_SCHEMA.accentBlue} />,
    color: COLOR_SCHEMA.accentBlue,
  },
  JavaScript: {
    icon: <FaJsSquare color={COLOR_SCHEMA.accentYellow} />,
    color: COLOR_SCHEMA.accentYellow,
  },
  XML: {
    icon: <TbFileTypeXml color={COLOR_SCHEMA.accentBlue} />,
    color: COLOR_SCHEMA.accentBlue,
  },
  SQL: {
    icon: <FaDatabase color={COLOR_SCHEMA.accentYellow} />,
    color: COLOR_SCHEMA.accentYellow,
  },
  'Bash Scripting': {
    icon: <SiGnubash color={COLOR_SCHEMA.accentGreen} />,
    color: COLOR_SCHEMA.accentGreen,
  },
  'Java (Spring Boot)': {
    icon: <SiSpringboot color={COLOR_SCHEMA.accentYellow} />,
    color: COLOR_SCHEMA.accentYellow,
  },
  'Boost C++ Libraries': {
    icon: <SiCplusplus color={COLOR_SCHEMA.accentRed} />,
    color: COLOR_SCHEMA.accentRed,
  },
  Selenium: {
    icon: <SiSelenium color={COLOR_SCHEMA.accentGreen} />,
    color: COLOR_SCHEMA.accentGreen,
  },
  PyTest: {
    icon: <SiPytest color={COLOR_SCHEMA.accentBlue} />,
    color: COLOR_SCHEMA.accentBlue,
  },
  JUnit: {
    icon: <SiJunit5 color={COLOR_SCHEMA.accentGreen} />,
    color: COLOR_SCHEMA.accentGreen,
  },
  Angular: {
    icon: <FaAngular color={COLOR_SCHEMA.accentRed} />,
    color: COLOR_SCHEMA.accentRed,
  },
  React: {
    icon: <FaReact color={COLOR_SCHEMA.accentBlue} />,
    color: COLOR_SCHEMA.accentBlue,
  },
  Swagger: {
    icon: <SiSwagger color={COLOR_SCHEMA.accentGreen} />,
    color: COLOR_SCHEMA.accentGreen,
  },
  'Azure Data Factory': {
    icon: <VscAzure color={COLOR_SCHEMA.accentBlue} />,
    color: COLOR_SCHEMA.accentBlue,
  },
  'Power Automate': {
    icon: <VscAzure color={COLOR_SCHEMA.accentBlue} />,
    color: COLOR_SCHEMA.accentBlue,
  },
  'Azure Functions': {
    icon: <VscAzure color={COLOR_SCHEMA.accentBlue} />,
    color: COLOR_SCHEMA.accentBlue,
  },
  'REST APIs': {
    icon: <VscJson color={COLOR_SCHEMA.accentYellow} />,
    color: COLOR_SCHEMA.accentYellow,
  },
  'SOAP APIs': {
    icon: <VscJson color={COLOR_SCHEMA.accentYellow} />,
    color: COLOR_SCHEMA.accentYellow,
  },
  Git: {
    icon: <FaGitAlt color={COLOR_SCHEMA.accentRed} />,
    color: COLOR_SCHEMA.accentRed,
  },
  'DLL Interfaces': {
    icon: <SiGnubash color={COLOR_SCHEMA.accentGreen} />,
    color: COLOR_SCHEMA.accentGreen,
  },
  Wireshark: {
    icon: <SiWireshark color={COLOR_SCHEMA.accentBlue} />,
    color: COLOR_SCHEMA.accentBlue,
  },
  Postman: {
    icon: <SiPostman color={COLOR_SCHEMA.accentRed} />,
    color: COLOR_SCHEMA.accentRed,
  },
  Valgrind: {
    icon: <SiCplusplus color={COLOR_SCHEMA.borderLight} />,
    color: COLOR_SCHEMA.borderLight,
  },
  GDB: {
    icon: <SiCplusplus color={COLOR_SCHEMA.borderLight} />,
    color: COLOR_SCHEMA.borderLight,
  },
  MongoDB: {
    icon: <SiMongodb color={COLOR_SCHEMA.accentGreen} />,
    color: COLOR_SCHEMA.accentGreen,
  },
  OOP: {
    icon: <FaJava color={COLOR_SCHEMA.accentYellow} />,
    color: COLOR_SCHEMA.accentYellow,
  },
  'API Dev & Integration': {
    icon: <VscJson color={COLOR_SCHEMA.accentYellow} />,
    color: COLOR_SCHEMA.accentYellow,
  },
  'Data Processing & ETL': {
    icon: <FaDatabase color={COLOR_SCHEMA.accentYellow} />,
    color: COLOR_SCHEMA.accentYellow,
  },
  'Automated Testing': {
    icon: <SiSelenium color={COLOR_SCHEMA.accentGreen} />,
    color: COLOR_SCHEMA.accentGreen,
  },
  'Software Architecture & Design Patterns': {
    icon: <FaJava color={COLOR_SCHEMA.accentYellow} />,
    color: COLOR_SCHEMA.accentYellow,
  },
  'Parallel & Distributed Systems': {
    icon: <FaDatabase color={COLOR_SCHEMA.accentYellow} />,
    color: COLOR_SCHEMA.accentYellow,
  },
  'Data Mining': {
    icon: <FaDatabase color={COLOR_SCHEMA.accentYellow} />,
    color: COLOR_SCHEMA.accentYellow,
  },
  'Software Engineering Principles': {
    icon: <FaJava color={COLOR_SCHEMA.accentYellow} />,
    color: COLOR_SCHEMA.accentYellow,
  },
  'Web Scraping': {
    icon: <FaPython color={COLOR_SCHEMA.accentYellow} />,
    color: COLOR_SCHEMA.accentYellow,
  },
};

const SkillListItem = ({ skillObj }: { skillObj: Skill }) => {
  const { name, level, bullets, experience, proficiency, projects } = skillObj;
  const icon = SKILL_ICONS[skillObj.name as SkillNames]?.icon ?? (
    <div className="w-6 h-6" />
  );

  return (
    <div
      className="flex flex-col items-center w-full p-4 mb-4 rounded-xl transition-transform duration-300
             hover:scale-105 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(255,255,255,0.3)]"
      style={{ backgroundColor: COLOR_SCHEMA.cardBg }}
    >
      {/* Icon */}
      <div className="mb-2 text-3xl">{icon}</div>

      {/* Name */}
      <h3
        className="mb-2 font-bold text-center text-md"
        style={{ color: COLOR_SCHEMA.textPrimary }}
      >
        {name}
      </h3>

      {/* Experience & Proficiency */}
      <div className="w-full p-2 mb-3 text-center bg-black rounded-md">
        <span className="block text-xs font-medium text-gray-200">
          Experience: {experience} yrs
        </span>
        <span className="block text-xs font-medium text-gray-200">
          Proficiency: {proficiency}
        </span>
      </div>

      {/* Level Bar */}
      <div className="w-full mb-3">
        <span className="text-xs font-semibold text-gray-300">Level</span>
        <div className="w-full h-2 mt-1 overflow-hidden bg-gray-700 rounded-full">
          <div
            className="h-full transition-all duration-500 rounded-full"
            style={{
              width: `${level}%`,
              background: `linear-gradient(90deg, ${COLOR_SCHEMA.accentRed} 0%, #ffffff 100%)`,
            }}
          />
        </div>
      </div>

      {/* Bullets */}
      {bullets.length > 0 && (
        <div className="w-full mb-3">
          {/* <span className="text-xs font-semibold text-gray-300">Details</span>
          <ul className="mt-1 space-y-1 text-xs text-gray-400 list-disc list-inside">
            {bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul> */}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="w-full">
          {/* <span className="text-xs font-semibold text-gray-300">Projects</span>
          <ul className="mt-1 space-y-1 text-xs text-gray-400 list-disc list-inside">
            {projects.map((project, i) => (
              <li key={i} className="italic">
                {project}
              </li>
            ))}
          </ul> */}
        </div>
      )}
    </div>
  );
};

const SkillsCard = ({
  id,
  loading,
  name,
  skills,
}: {
  id: string;
  loading: boolean;
  name: string;
  skills: Skill[];
}) => {
  const renderSkeleton = () =>
    Array.from({ length: 6 }, (_, i) => (
      <div key={i}>
        {skeleton({
          widthCls: 'w-full',
          heightCls: 'h-24',
          className: 'rounded-lg m-1',
        })}
      </div>
    ));

  return (
    <div
      id={id}
      className="relative z-10 w-full max-w-5xl mx-auto overflow-hidden shadow-2xl rounded-2xl"
      style={{ backgroundColor: COLOR_SCHEMA.cardBg }}
    >
      <div className="flex flex-col items-center w-full px-6 py-6 md:px-8 md:py-8">
        <h1
          className="py-2 mb-6 font-bold text-center border-t-2 border-b-2 text-md w-fit"
          style={{
            borderColor: COLOR_SCHEMA.accentRed,
            color: COLOR_SCHEMA.textPrimary,
          }}
        >
          {loading ? '...' : name}
        </h1>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? renderSkeleton()
            : skills.map((skillObj) => (
                <SkillListItem key={skillObj.name} skillObj={skillObj} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
