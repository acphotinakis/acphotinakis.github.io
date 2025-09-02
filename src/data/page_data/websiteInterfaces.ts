// 🔹 Home Section
export interface CompInputHomeSectionProps {
  id: string;
  loading: boolean;
  homeSection: HomeSectionProps;
}

export interface HomeSectionProps {
  paragraphs: string[];
}

// 🔹 Personal Contacts
export interface CompInputPersonalContactsSectionProps {
  id: string;
  loading: boolean;
  personalContacts: PersonalContactsSectionProps;
}

export interface PersonalContactsSectionProps {
  linkedin: string;
  dev: string;
  github: string;
  stackoverflow: string;
  phone: string;
  email: string;
  location: string;
}

// 🔹 Education & Honors
export interface CompInputEducationHonorsSectionProps {
  id: string;
  loading: boolean;
  educationHonors: EducationHonorsSectionProps;
}

export interface EducationProps {
  institution: string;
  degree: string;
  from: string;
  to: string;
  level: string;
  description: string;
  highlightColor: string;
  special?: boolean;
}

export interface HonorProps {
  honorName: string;
  from: string;
  to: string;
}

export interface EducationHonorsSectionProps {
  educations: EducationProps[];
  honors: HonorProps[];
}

// 🔹 Work Experiences
export interface CompInputWorkExperiencesSectionProps {
  id: string;
  loading: boolean;
  workExperiences: WorkExperience[];
}

export interface WorkExperience {
  company: string;
  position: string;
  from: string;
  to: string;
  companyLink: string;
  details: string;
  skills: string[];
}

export interface WorkExperienceItemProps {
  time: React.ReactNode;
  position: React.ReactNode;
  company: React.ReactNode;
  details: React.ReactNode;
  from: string;
  to: string;
  companyLink: string;
  skills: string[];
}

// 🔹 Certifications
export interface CompInputCertificationsSectionProps {
  id: string;
  loading: boolean;
  certifications: Certification[];
}

export interface Certification {
  name: string;
  body: string;
  year: string;
  link: string;
}

// 🔹 GitHub Projects
export interface CompInputGitHubProjectsSectionProps {
  id: string;
  loading: boolean;
  githubProjects: GitHubProject[];
}

export interface License {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}

export interface GitHubProject {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  license?: License;
  created_at: string;
  pushed_at: string;
  archived: boolean;
}

// 🔹 Courses
export interface CompInputCoursesSectionProps {
  id: string;
  loading: boolean;
  courses: Course[];
}

export interface Course {
  courseName: string;
  courseCode: string;
  semester: string;
}

// 🔹 Skills
export interface CompInputSkillsSectionProps {
  id: string;
  loading: boolean;
  programming_languages: Skill[];
  frameworksAndLibraries: Skill[];
  toolsAndTechnologies: Skill[];
  conceptsAndSkills: Skill[];
}

export interface SkillsSection {
  programming_languages: Skill[];
  frameworksAndLibraries: Skill[];
  toolsAndTechnologies: Skill[];
  conceptsAndSkills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  bullets: string[];
  category: 'language' | 'framework' | 'tool' | 'concept' | string;
  experience: number;
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | string;
  projects: string[];
}

export type SkillNames =
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

// 🔹 The whole config
export interface WebsiteConfig {
  home_section: HomeSectionProps;
  personal_contacts_section: PersonalContactsSectionProps;
  education_honors_section: EducationHonorsSectionProps;
  work_experiences_section: WorkExperience[];
  certifications: Certification[];
  github_projects_section: GitHubProject[];
  courses_section: Course[];
  skills_section: SkillsSection;
}
