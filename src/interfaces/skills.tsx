// @/interfaces/skills.tsx

export type SKILL_NAMES =
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

export type SKILL_CATEGORIES = 'language' | 'framework' | 'tool' | 'concept';

export type SKILL_PROFICIENCY =
  | 'Beginner'
  | 'Intermediate'
  | 'Advanced'
  | 'Expert';

export interface SKILL {
  name: SKILL_NAMES;
  level: number; // 0-100
  bullets: string[];
  category: SKILL_CATEGORIES;
  experience: number;
  proficiency: SKILL_PROFICIENCY;
  projects: string[];
}

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
import { COLOR_SCHEMA } from './colorSchema';
import React from 'react';

// Skill icons mapped to skill names
export const SKILL_ICONS: Record<
  SKILL_NAMES,
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
