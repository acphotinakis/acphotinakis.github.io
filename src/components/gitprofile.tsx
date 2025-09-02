import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { formatDistance } from 'date-fns';
import {
  CustomError,
  GENERIC_ERROR,
  INVALID_CONFIG_ERROR,
  INVALID_GITHUB_USERNAME_ERROR,
  setTooManyRequestError,
} from '../constants/errors';
import { HelmetProvider } from 'react-helmet-async';
import '../assets/index.css';
import { getInitialTheme, getSanitizedConfig, setupHotjar } from '../utils';
import { SanitizedConfig } from '../interfaces/sanitized-config';
import ErrorPage from './section-reusable-components/error-page';
import { DEFAULT_THEMES } from '../constants/default-themes';
import { BG_COLOR } from '../constants';

import { GithubApiProject, GithubProject } from '../interfaces/github-project';
import GithubProjectCard from './section-components/github-project-card';
import EducationHonorSection from './section-components/education-honors-section';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProfileSidebar } from './section-components/website-sidebar-section';
import WorkExperienceSection from './section-components/experience-section';
import WEBSITE_CONFIG from '@/data/page_data/websiteConfigData';
import HomeSection from './section-components/home-section';
import ContactsSection from './section-components/personal-contacts-section';
import CertificationsSection from './section-components/certifications-section';
import CoursesSection from './section-components/courses-section';
import SkillsSection from './section-components/skills-section';
import { Profile } from '@/interfaces/profile';

export type CardSection = {
  name: string;
  id: string;
  path: string;
  dropdown?: CardSection[];
};

export const cardSections: CardSection[] = [
  { name: 'Home', id: 'home', path: '/', dropdown: [] },
  {
    name: 'Contacts',
    id: 'contacts',
    path: '/contacts',
  },
  {
    name: 'Education & Honors',
    id: 'education-honors',
    path: '/education-honors',
  },
  {
    name: 'Work Experiences',
    id: 'work-experiences',
    path: '/work-experiences',
  },
  {
    name: 'Certifications',
    id: 'certifications',
    path: '/certifications',
  },
  {
    name: 'Courses',
    id: 'courses',
    path: '/courses',
  },

  {
    name: 'Skills',
    id: 'skills',
    path: '/skills',
    dropdown: [
      {
        name: 'Programming Languages',
        id: 'programming-languages',
        path: '/skills#programming-languages',
      },
      {
        name: 'Frameworks & Libraries',
        id: 'frameworks-libraries',
        path: '/skills#frameworks-libraries',
      },
      {
        name: 'Tools & Technologies',
        id: 'tools-technologies',
        path: '/skills#tools-technologies',
      },
      {
        name: 'Concepts & Skills',
        id: 'concepts-skills',
        path: '/skills#concepts-skills',
      },
    ],
  },
  {
    name: 'GitHub Projects',
    id: 'github-projects',
    path: '/github-projects',
  },
];

/**
 * Renders the GitProfile component.
 *
 * @param {Object} config - the configuration object
 * @return {JSX.Element} the rendered GitProfile component
 */
const GitProfile = ({ config }: { config: Config }) => {
  const [sanitizedConfig] = useState<SanitizedConfig | Record<string, never>>(
    getSanitizedConfig(config),
  );
  const [theme, setTheme] = useState<string>(DEFAULT_THEMES[0]);
  const [error, setError] = useState<CustomError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [, setProfile] = useState<Profile | null>(null);
  const [githubProjects, setGithubProjects] = useState<GithubProject[]>([]);

  const getGithubProjects = useCallback(
    async (publicRepoCount: number): Promise<GithubProject[]> => {
      let repoDataItems: GithubApiProject[] = [];

      if (sanitizedConfig.projects.github.mode === 'automatic') {
        if (publicRepoCount === 0) return [];

        const excludeRepo =
          sanitizedConfig.projects.github.automatic.exclude.projects
            .map((project) => `+-repo:${project}`)
            .join('');

        const query = `user:${sanitizedConfig.github.username}+fork:${!sanitizedConfig.projects.github.automatic.exclude.forks}${excludeRepo}`;
        const url = `https://api.github.com/search/repositories?q=${query}&sort=${sanitizedConfig.projects.github.automatic.sortBy}&per_page=${sanitizedConfig.projects.github.automatic.limit}&type=Repositories`;

        const repoResponse = await axios.get(url, {
          headers: { 'Content-Type': 'application/vnd.github.v3+json' },
        });
        repoDataItems = repoResponse.data.items;
      } else {
        if (sanitizedConfig.projects.github.manual.projects.length === 0)
          return [];

        const repos = sanitizedConfig.projects.github.manual.projects
          .map((project) => `+repo:${project}`)
          .join('');

        const url = `https://api.github.com/search/repositories?q=${repos}&type=Repositories`;

        const repoResponse = await axios.get(url, {
          headers: { 'Content-Type': 'application/vnd.github.v3+json' },
        });
        repoDataItems = repoResponse.data.items;
      }

      // Map raw GitHub API data to your simplified UI shape
      const mappedProjects: GithubProject[] = repoDataItems.map((repo) => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage || undefined,
        language: repo.language || 'Unknown',
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        license: repo.license || undefined,
        created_at: repo.created_at,
        pushed_at: repo.pushed_at,
        archived: repo.archived,
      }));

      // console.log('Mapped Projects:', mappedProjects); // ✅ debug

      return mappedProjects;
    },
    [
      sanitizedConfig.github.username,
      sanitizedConfig.projects.github.mode,
      sanitizedConfig.projects.github.manual.projects,
      sanitizedConfig.projects.github.automatic.sortBy,
      sanitizedConfig.projects.github.automatic.limit,
      sanitizedConfig.projects.github.automatic.exclude.forks,
      sanitizedConfig.projects.github.automatic.exclude.projects,
    ],
  );

  const loadData = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.github.com/users/${sanitizedConfig.github.username}`,
      );
      const data = response.data;

      setProfile({
        avatar: data.avatar_url,
        name: data.name || ' ',
        bio: data.bio || '',
        location: data.location || '',
        company: data.company || '',
      });

      if (!sanitizedConfig.projects.github.display) {
        return;
      }

      setGithubProjects(await getGithubProjects(data.public_repos));
    } catch (error) {
      handleError(error as AxiosError | Error);
    } finally {
      setLoading(false);
    }
  }, [
    sanitizedConfig.github.username,
    sanitizedConfig.projects.github.display,
    getGithubProjects,
  ]);

  useEffect(() => {
    if (Object.keys(sanitizedConfig).length === 0) {
      setError(INVALID_CONFIG_ERROR);
    } else {
      setError(null);
      setTheme(getInitialTheme(sanitizedConfig.themeConfig));
      setupHotjar(sanitizedConfig.hotjar);
      loadData();
    }
  }, [sanitizedConfig, loadData]);

  useEffect(() => {
    theme && document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleError = (error: AxiosError | Error): void => {
    console.error('Error:', error);

    if (error instanceof AxiosError) {
      try {
        const reset = formatDistance(
          new Date(error.response?.headers?.['x-ratelimit-reset'] * 1000),
          new Date(),
          { addSuffix: true },
        );

        if (typeof error.response?.status === 'number') {
          switch (error.response.status) {
            case 403:
              setError(setTooManyRequestError(reset));
              break;
            case 404:
              setError(INVALID_GITHUB_USERNAME_ERROR);
              break;
            default:
              setError(GENERIC_ERROR);
              break;
          }
        } else {
          setError(GENERIC_ERROR);
        }
      } catch (innerError) {
        setError(GENERIC_ERROR);
      }
    } else {
      setError(GENERIC_ERROR);
    }
  };

  const topStyle: React.CSSProperties = {
    backgroundColor: '#000000', // main background
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
    color: '#F5F5F5',
    fontFamily: 'Roboto Mono, monospace',
  };

  // Modern card background for all pages
  const cardBgClass = 'bg-[#000000]';

  // Helper to get section ID dynamically
  const getSectionId = (name: string) =>
    cardSections.find((section) => section.name === name)?.id ??
    name.toLowerCase().replace(/\s+/g, '-');

  // -------------------------
  // Pages
  // -------------------------
  const HomePage = () => (
    <div className={`min-h-full ${BG_COLOR}`} style={topStyle}>
      <main className="flex-1 p-6 overflow-auto">
        <div className="grid grid-cols-1 gap-8 rounded-box">
          {/* HomeSection Card */}
          {WEBSITE_CONFIG.home_section.paragraphs.length > 0 ? (
            <div
              className={`col-span-1 p-6 ${cardBgClass} scroll-mt-20`}
              id={getSectionId('Home')}
            >
              <HomeSection
                id={getSectionId('Home')}
                loading={loading}
                homeSection={WEBSITE_CONFIG.home_section}
              />
            </div>
          ) : null}

          {/* Contacts Card */}
          {WEBSITE_CONFIG.personal_contacts_section ? (
            <div
              className={`col-span-1 p-6 ${cardBgClass} scroll-mt-20`}
              id={getSectionId('Contacts')}
            >
              <ContactsSection
                id={getSectionId('Contacts')}
                loading={loading}
                personalContacts={WEBSITE_CONFIG.personal_contacts_section}
              />
            </div>
          ) : null}

          {/* Education & Honors */}
          {WEBSITE_CONFIG.education_honors_section.educations.length &&
          WEBSITE_CONFIG.education_honors_section.honors.length ? (
            <div
              id={getSectionId('Education & Honors')}
              className={`col-span-1 p-6 ${cardBgClass} scroll-mt-20`}
            >
              <EducationHonorSection
                id={getSectionId('Education & Honors')}
                loading={loading}
                educationHonors={WEBSITE_CONFIG.education_honors_section}
              />
            </div>
          ) : null}

          {/* Work Experiences */}
          {WEBSITE_CONFIG.work_experiences_section.length ? (
            <div
              className={`col-span-1 p-6 ${cardBgClass} scroll-mt-20`}
              id={getSectionId('Work Experiences')}
            >
              <WorkExperienceSection
                id={getSectionId('Work Experiences')}
                loading={loading}
                workExperiences={WEBSITE_CONFIG.work_experiences_section}
              />
            </div>
          ) : null}

          {/* Certifications  */}
          {WEBSITE_CONFIG.certifications_section.length ? (
            <div
              className={`col-span-1 p-6 ${cardBgClass} scroll-mt-20`}
              id={getSectionId('Certifications')}
            >
              <CertificationsSection
                id={getSectionId('Certifications')}
                loading={loading}
                certifications={WEBSITE_CONFIG.certifications_section}
              />
            </div>
          ) : null}

          {/* CoursesSection Section */}
          {WEBSITE_CONFIG.courses_section.length ? (
            <div
              className={`col-span-1 p-6 ${cardBgClass} scroll-mt-20`}
              id={getSectionId('Courses')}
            >
              <CoursesSection
                id={getSectionId('Courses')}
                loading={loading}
                courses={WEBSITE_CONFIG.courses_section}
              />
            </div>
          ) : null}

          {/* Skills Grid */}
          {WEBSITE_CONFIG.skills_section.programming_languages.length &&
          WEBSITE_CONFIG.skills_section.frameworksAndLibraries.length &&
          WEBSITE_CONFIG.skills_section.toolsAndTechnologies.length &&
          WEBSITE_CONFIG.skills_section.conceptsAndSkills.length ? (
            <div
              className={`col-span-1 p-6 mt-10 ${cardBgClass} scroll-mt-20`}
              id={getSectionId('Skills')}
            >
              <SkillsSection
                loading={loading}
                id={getSectionId('Skills')}
                programming_languages={
                  WEBSITE_CONFIG.skills_section.programming_languages
                }
                frameworksAndLibraries={
                  WEBSITE_CONFIG.skills_section.frameworksAndLibraries
                }
                toolsAndTechnologies={
                  WEBSITE_CONFIG.skills_section.toolsAndTechnologies
                }
                conceptsAndSkills={
                  WEBSITE_CONFIG.skills_section.conceptsAndSkills
                }
              />
            </div>
          ) : null}

          {/* GitHub Projects */}
          {sanitizedConfig.projects.github.display ? (
            <div
              className={`col-span-1 p-6 ${cardBgClass} scroll-mt-20`}
              id={getSectionId('GitHub Projects')}
            >
              <GithubProjectCard
                limit={sanitizedConfig.projects.github.automatic.limit}
                githubProjects={githubProjects}
                loading={loading}
                username={sanitizedConfig.github.username}
                id={getSectionId('GitHub Projects')}
              />
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );

  // -------------------------
  // Individual Pages for routing
  // -------------------------
  const ContactsPage = () => (
    <div className={`min-h-full ${BG_COLOR} mt-19`} style={topStyle}>
      <div className="grid grid-cols-1 gap-8 rounded-box">
        <div
          className={`col-span-1 p-6 ${cardBgClass} scroll-mt-20`}
          id={getSectionId('Contacts')}
        >
          <ContactsSection
            id={getSectionId('Contacts')}
            loading={loading}
            personalContacts={WEBSITE_CONFIG.personal_contacts_section}
          />
        </div>
      </div>
    </div>
  );

  const EducationHonorsPage = () => (
    <div className={`min-h-full ${BG_COLOR} mt-19`} style={topStyle}>
      <div className="grid grid-cols-1 gap-8 rounded-box">
        <div
          className={`col-span-1 p-6 mt-20 ${cardBgClass}`}
          id={getSectionId('Education & Honors')}
        >
          <EducationHonorSection
            id={getSectionId('Education & Honors')}
            loading={loading}
            educationHonors={WEBSITE_CONFIG.education_honors_section}
          />
        </div>
      </div>
    </div>
  );

  const CertificationsExperiencePage = () => (
    <div className={`min-h-full ${BG_COLOR} mt-19`} style={topStyle}>
      <div className="grid grid-cols-1 gap-8 rounded-box">
        <div
          className={`col-span-1 p-6 mt-20 ${cardBgClass}`}
          id={getSectionId('Certifications')}
        >
          <CertificationsSection
            id={getSectionId('Certifications')}
            loading={loading}
            certifications={WEBSITE_CONFIG.certifications_section}
          />
        </div>
      </div>
    </div>
  );

  const SkillsPage = () => (
    <div className={`min-h-full ${BG_COLOR} mt-19`} style={topStyle}>
      <div className="grid grid-cols-1 gap-8 rounded-box">
        <div
          className={`col-span-1 p-6 mt-10 ${cardBgClass} scroll-mt-20`}
          id={getSectionId('Skills')}
        >
          <SkillsSection
            loading={loading}
            id={getSectionId('Skills')}
            programming_languages={
              WEBSITE_CONFIG.skills_section.programming_languages
            }
            frameworksAndLibraries={
              WEBSITE_CONFIG.skills_section.frameworksAndLibraries
            }
            toolsAndTechnologies={
              WEBSITE_CONFIG.skills_section.toolsAndTechnologies
            }
            conceptsAndSkills={WEBSITE_CONFIG.skills_section.conceptsAndSkills}
          />
        </div>
      </div>
    </div>
  );

  const GitHubProjectsPage = () => (
    <div className={`min-h-full ${BG_COLOR} mt-19`} style={topStyle}>
      <div className="grid grid-cols-1 gap-8 rounded-box">
        <div
          className={`col-span-1 p-6 mt-20 ${cardBgClass}`}
          id={getSectionId('GitHub Projects')}
        >
          <GithubProjectCard
            limit={sanitizedConfig.projects.github.automatic.limit}
            githubProjects={githubProjects}
            loading={loading}
            username={sanitizedConfig.github.username}
            id={getSectionId('GitHub Projects')}
          />
        </div>
      </div>
    </div>
  );

  // -------------------------
  // Render Routes
  // -------------------------
  return (
    <HelmetProvider>
      <div className="flex w-screen h-screen font-mono bg-red-900 fade-in">
        {error ? (
          <ErrorPage
            status={error.status}
            title={error.title}
            subTitle={error.subTitle}
          />
        ) : (
          <>
            {/* Sidebar */}
            <ProfileSidebar />

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route
                  path="/education-honors"
                  element={<EducationHonorsPage />}
                />
                <Route
                  path="/certifications-experience"
                  element={<CertificationsExperiencePage />}
                />
                <Route path="/skills" element={<SkillsPage />} />
                <Route
                  path="/github-projects"
                  element={<GitHubProjectsPage />}
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </>
        )}
      </div>
    </HelmetProvider>
  );
};

export default GitProfile;
