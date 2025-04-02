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
import ErrorPage from './error-page';
import { DEFAULT_THEMES } from '../constants/default-themes';
import { BG_COLOR } from '../constants';
import AvatarCard from './avatar-card';
import { Profile } from '../interfaces/profile';
import DetailsCard from './details-card';
import { GithubProject } from '../interfaces/github-project';
import GithubProjectCard from './github-project-card';
import EducationHonorCard from './education-honors-card';
import CertExpCard from './certs-exp-card';
import SkillsGrid from './skills-grid';
import BlogCard from './blog-card';
import PublicationCard from './publication-card';
// import NavbarComp from './nav-bar';
import OptionsPLTable from './options-pl-table';
// import { ArticleGrid } from './articles';
import React from 'react';
import MarqueeDemo from './course-marquee';
import { Routes, Route, Navigate } from 'react-router-dom';

type CardSection = {
  name: string;
  id: string;
  path: string;
  dropdown?: CardSection[]; // Fixed to CardSection[]
};

const cardSections: CardSection[] = [
  { name: 'Home', id: 'home', path: '/', dropdown: [] },
  { name: 'Contacts', id: 'contacts', path: '/contacts', dropdown: [] },
  {
    name: 'Education & Honors',
    id: 'education-honors',
    path: '/education-honors',
  },
  {
    name: 'Stock Options Ledger',
    id: 'stock-options-ledger',
    path: '/stock-options-ledger',
  },
  {
    name: 'Certifications & Experience',
    id: 'certifications-experience',
    path: '/certifications-experience',
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
  // {
  //   name: 'Publications',
  //   id: 'publications',
  //   path: '/publications',
  //   dropdown: [],
  // },
  // { name: 'Blog', id: 'blog', path: '/blog', dropdown: [] },
];

// Example usage
// const articles = [
//   {
//     title: 'How to Learn React',
//     description: 'Tips and tricks for mastering React development.',
//     image: 'https://via.placeholder.com/300x200',
//   },
//   {
//     title: 'Understanding JavaScript Closures',
//     description: 'A deep dive into closures and their practical applications.',
//     image: 'https://via.placeholder.com/300x200',
//   },
//   {
//     title: 'CSS Grid vs Flexbox',
//     description: 'When to use CSS Grid and when to use Flexbox.',
//     image: 'https://via.placeholder.com/300x200',
//   },
// ];

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
  const [profile, setProfile] = useState<Profile | null>(null);
  const [githubProjects, setGithubProjects] = useState<GithubProject[]>([]);

  const getGithubProjects = useCallback(
    async (publicRepoCount: number): Promise<GithubProject[]> => {
      if (sanitizedConfig.projects.github.mode === 'automatic') {
        if (publicRepoCount === 0) {
          return [];
        }

        const excludeRepo =
          sanitizedConfig.projects.github.automatic.exclude.projects
            .map((project) => `+-repo:${project}`)
            .join('');

        const query = `user:${sanitizedConfig.github.username}+fork:${!sanitizedConfig.projects.github.automatic.exclude.forks}${excludeRepo}`;
        const url = `https://api.github.com/search/repositories?q=${query}&sort=${sanitizedConfig.projects.github.automatic.sortBy}&per_page=${sanitizedConfig.projects.github.automatic.limit}&type=Repositories`;

        const repoResponse = await axios.get(url, {
          headers: { 'Content-Type': 'application/vnd.github.v3+json' },
        });
        const repoData = repoResponse.data;

        return repoData.items;
      } else {
        if (sanitizedConfig.projects.github.manual.projects.length === 0) {
          return [];
        }
        const repos = sanitizedConfig.projects.github.manual.projects
          .map((project) => `+repo:${project}`)
          .join('');

        const url = `https://api.github.com/search/repositories?q=${repos}&type=Repositories`;

        const repoResponse = await axios.get(url, {
          headers: { 'Content-Type': 'application/vnd.github.v3+json' },
        });
        const repoData = repoResponse.data;
        console.log(repoData);

        return repoData.items;
      }
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
    backgroundColor: 'rgb(17, 24, 39)',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  };

  // Component for the Home page, which shows all content
  const HomePage = () => (
    <div className={`min-h-full ${BG_COLOR}`} style={topStyle}>
      <div className="grid grid-cols-1 gap-8 rounded-box">
        {/* Avatar Card */}
        <div
          className="col-span-1 p-6 bg-gray-900 scroll-mt-10"
          id={
            cardSections.find((section) => section.name === 'Home')?.id ??
            'home'
          }
        >
          <AvatarCard profile={profile} loading={loading} id={''} />
        </div>

        {/* Details Card */}
        <div
          className="col-span-1 p-6 bg-gray-900 scroll-mt-20"
          id={
            cardSections.find((section) => section.name === 'Contacts')?.id ??
            'contacts'
          }
        >
          <DetailsCard
            profile={profile}
            loading={loading}
            github={sanitizedConfig.github}
            social={sanitizedConfig.social}
            id={''}
          />
        </div>

        {/* Education & Honors Card */}
        {sanitizedConfig.educations.length !== 0 &&
          sanitizedConfig.honors.length !== 0 && (
            <div
              className="col-span-1 p-6 bg-gray-900 scroll-mt-20"
              id={
                cardSections.find(
                  (section) => section.name === 'Education & Honors',
                )?.id ?? 'education-honors'
              }
            >
              <EducationHonorCard
                loading={loading}
                educations={sanitizedConfig.educations}
                honors={sanitizedConfig.honors}
                id={''}
              />
            </div>
          )}

        {/* Marquee Section */}
        <div className="col-span-1 p-6 bg-gray-900">
          <MarqueeDemo />
        </div>

        {/* Certifications & Experience */}
        {sanitizedConfig.certifications.length !== 0 &&
          sanitizedConfig.experiences.length !== 0 && (
            <div
              className="col-span-1 p-6 bg-gray-900 scroll-mt-20"
              id={
                cardSections.find(
                  (section) => section.name === 'Certifications & Experience',
                )?.id ?? 'certifications-experience'
              }
            >
              <CertExpCard
                loading={loading}
                certifications={sanitizedConfig.certifications}
                experiences={sanitizedConfig.experiences}
                id={''}
              />
            </div>
          )}

        {/* Skills Grid */}
        <div
          className="col-span-1 p-6 mt-10 bg-gray-900 scroll-mt-20"
          id={
            cardSections.find((section) => section.name === 'Skills')?.id ??
            'skills'
          }
        >
          <SkillsGrid
            loading={loading}
            sanitizedConfig={sanitizedConfig}
            id={''}
            dropdown={
              cardSections.find((section) => section.name === 'Skills')
                ?.dropdown ?? []
            }
          />
        </div>

        {/* GitHub Projects */}
        {sanitizedConfig.projects.github.display && (
          <div
            className="col-span-1 p-6 bg-gray-900 scroll-mt-20"
            id={
              cardSections.find((section) => section.name === 'GitHub Projects')
                ?.id ?? 'github-projects'
            }
          >
            <GithubProjectCard
              header={sanitizedConfig.projects.github.header}
              limit={sanitizedConfig.projects.github.automatic.limit}
              githubProjects={githubProjects}
              loading={loading}
              username={sanitizedConfig.github.username}
              id={''}
            />
          </div>
        )}

        {/* Publications */}
        {sanitizedConfig.publications.length !== 0 && (
          <div className="col-span-1 p-6 bg-gray-900 scroll-mt-20">
            <PublicationCard
              loading={loading}
              publications={sanitizedConfig.publications}
              id={
                cardSections.find((section) => section.name === 'Publications')
                  ?.id ?? 'publications'
              }
            />
          </div>
        )}

        {/* Blog Section */}
        {sanitizedConfig.blog.display && (
          <div className="col-span-1 p-6 bg-gray-900 scroll-mt-20">
            <BlogCard
              loading={loading}
              googleAnalyticsId={sanitizedConfig.googleAnalytics.id}
              blog={sanitizedConfig.blog}
              id={
                cardSections.find((section) => section.name === 'Blog')?.id ??
                'blog'
              }
            />
          </div>
        )}

        {/* Options Ledger */}
        <div
          className="col-span-1 p-6 bg-gray-900 scroll-mt-20"
          id={
            cardSections.find(
              (section) => section.name === 'Stock Options Ledger',
            )?.id ?? 'stock-options-ledger'
          }
        >
          <OptionsPLTable loading={loading} id={''} />
        </div>
      </div>
    </div>
  );

  // Component for the Contacts page
  const ContactsPage = () => (
    <div className={`min-h-full ${BG_COLOR} mt-19`} style={topStyle}>
      <div className="grid grid-cols-1 gap-8 rounded-box">
        <div className="col-span-1 p-6 mt-20 bg-gray-900">
          <DetailsCard
            profile={profile}
            loading={loading}
            github={sanitizedConfig.github}
            social={sanitizedConfig.social}
            id={''}
          />
        </div>
      </div>
    </div>
  );

  // Component for the Education & Honors page
  const EducationHonorsPage = () => (
    <div className={`min-h-full ${BG_COLOR} mt-19`} style={topStyle}>
      <div className="grid grid-cols-1 gap-8 rounded-box">
        <div className="col-span-1 p-6 mt-20 bg-gray-900">
          <EducationHonorCard
            loading={loading}
            educations={sanitizedConfig.educations}
            honors={sanitizedConfig.honors}
            id={''}
          />
        </div>
      </div>
    </div>
  );

  // Component for the Stock Options Ledger page
  const StockOptionsLedgerPage = () => (
    <div className={`min-h-full ${BG_COLOR} mt-19`} style={topStyle}>
      <div className="grid grid-cols-1 gap-8 rounded-box">
        <div className="col-span-1 p-6 mt-20 bg-gray-900">
          <OptionsPLTable loading={loading} id={''} />
        </div>
      </div>
    </div>
  );

  // Component for the Certifications & Experience page
  const CertificationsExperiencePage = () => (
    <div className={`min-h-full ${BG_COLOR} mt-19`} style={topStyle}>
      <div className="grid grid-cols-1 gap-8 rounded-box">
        <div className="col-span-1 p-6 mt-20 bg-gray-900">
          <CertExpCard
            loading={loading}
            certifications={sanitizedConfig.certifications}
            experiences={sanitizedConfig.experiences}
            id={''}
          />
        </div>
      </div>
    </div>
  );

  // Component for the Skills page
  const SkillsPage = () => (
    <div className={`min-h-full ${BG_COLOR} mt-19`} style={topStyle}>
      <div className="grid grid-cols-1 gap-8 rounded-box">
        <div className="col-span-1 p-6 mt-20 bg-gray-900">
          <SkillsGrid
            loading={loading}
            sanitizedConfig={sanitizedConfig}
            id={''}
            dropdown={
              cardSections.find((section) => section.name === 'Skills')
                ?.dropdown ?? []
            }
          />
        </div>
      </div>
    </div>
  );

  // Component for the GitHub Projects page
  const GitHubProjectsPage = () => (
    <div className={`min-h-full ${BG_COLOR} mt-19`} style={topStyle}>
      <div className="grid grid-cols-1 gap-8 rounded-box">
        <div className="col-span-1 p-6 mt-20 bg-gray-900">
          <GithubProjectCard
            header={sanitizedConfig.projects.github.header}
            limit={sanitizedConfig.projects.github.automatic.limit}
            githubProjects={githubProjects}
            loading={loading}
            username={sanitizedConfig.github.username}
            id={''}
          />
        </div>
      </div>
    </div>
  );

  return (
    <HelmetProvider>
      <div className="h-screen bg-gray-900 fade-in">
        {error ? (
          <ErrorPage
            status={error.status}
            title={error.title}
            subTitle={error.subTitle}
          />
        ) : (
          <>
            {/* <NavbarComp cardSections={cardSections} /> */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route
                path="/education-honors"
                element={<EducationHonorsPage />}
              />
              <Route
                path="/stock-options-ledger"
                element={<StockOptionsLedgerPage />}
              />
              <Route
                path="/certifications-experience"
                element={<CertificationsExperiencePage />}
              />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/github-projects" element={<GitHubProjectsPage />} />
              {/* Redirect any unmatched routes to the home page */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </>
        )}
      </div>
    </HelmetProvider>
  );
};

export default GitProfile;

// import { useCallback, useEffect, useState } from 'react';
// import axios, { AxiosError } from 'axios';
// import { formatDistance } from 'date-fns';
// import {
//   CustomError,
//   GENERIC_ERROR,
//   INVALID_CONFIG_ERROR,
//   INVALID_GITHUB_USERNAME_ERROR,
//   setTooManyRequestError,
// } from '../constants/errors';
// import { HelmetProvider } from 'react-helmet-async';
// import '../assets/index.css';
// import { getInitialTheme, getSanitizedConfig, setupHotjar } from '../utils';
// import { SanitizedConfig } from '../interfaces/sanitized-config';
// import ErrorPage from './error-page';
// import { DEFAULT_THEMES } from '../constants/default-themes';
// import { BG_COLOR } from '../constants';
// import AvatarCard from './avatar-card';
// import { Profile } from '../interfaces/profile';
// import DetailsCard from './details-card';
// import { GithubProject } from '../interfaces/github-project';
// import GithubProjectCard from './github-project-card';
// import EducationHonorCard from './education-honors-card';
// import CertExpCard from './certs-exp-card';
// import SkillsGrid from './skills-grid';
// import BlogCard from './blog-card';
// import PublicationCard from './publication-card';
// // import NavbarComp from './nav-bar';
// import OptionsPLTable from './options-pl-table';
// // import { ArticleGrid } from './articles';
// import React from 'react';
// import MarqueeDemo from './course-marquee';
// import NavbarComp from './nav-bar';

// type CardSection = {
//   name: string;
//   id: string;
//   path: string;
//   dropdown?: CardSection[]; // Fixed to CardSection[]
// };

// const cardSections: CardSection[] = [
//   { name: 'Home', id: 'home', path: '/', dropdown: [] },
//   { name: 'Contacts', id: 'contacts', path: '/contacts', dropdown: [] },
//   {
//     name: 'Education & Honors',
//     id: 'education-honors',
//     path: '/education-honors',
//   },
//   {
//     name: 'Stock Options Ledger',
//     id: 'stock-options-ledger',
//     path: '/stock-options-ledger',
//   },
//   {
//     name: 'Certifications & Experience',
//     id: 'certifications-experience',
//     path: '/certifications-experience',
//   },
//   {
//     name: 'Skills',
//     id: 'skills',
//     path: '/skills',
//     dropdown: [
//       {
//         name: 'Programming Languages',
//         id: 'programming-languages',
//         path: '/skills#programming-languages',
//       },
//       {
//         name: 'Frameworks & Libraries',
//         id: 'frameworks-libraries',
//         path: '/skills#frameworks-libraries',
//       },
//       {
//         name: 'Tools & Technologies',
//         id: 'tools-technologies',
//         path: '/skills#tools-technologies',
//       },
//       {
//         name: 'Concepts & Skills',
//         id: 'concepts-skills',
//         path: '/skills#concepts-skills',
//       },
//     ],
//   },
//   {
//     name: 'GitHub Projects',
//     id: 'github-projects',
//     path: '/github-projects',
//   },
//   // {
//   //   name: 'Publications',
//   //   id: 'publications',
//   //   path: '/publications',
//   //   dropdown: [],
//   // },
//   // { name: 'Blog', id: 'blog', path: '/blog', dropdown: [] },
// ];

// // Example usage
// // const articles = [
// //   {
// //     title: 'How to Learn React',
// //     description: 'Tips and tricks for mastering React development.',
// //     image: 'https://via.placeholder.com/300x200',
// //   },
// //   {
// //     title: 'Understanding JavaScript Closures',
// //     description: 'A deep dive into closures and their practical applications.',
// //     image: 'https://via.placeholder.com/300x200',
// //   },
// //   {
// //     title: 'CSS Grid vs Flexbox',
// //     description: 'When to use CSS Grid and when to use Flexbox.',
// //     image: 'https://via.placeholder.com/300x200',
// //   },
// // ];

// /**
//  * Renders the GitProfile component.
//  *
//  * @param {Object} config - the configuration object
//  * @return {JSX.Element} the rendered GitProfile component
//  */
// const GitProfile = ({ config }: { config: Config }) => {
//   const [sanitizedConfig] = useState<SanitizedConfig | Record<string, never>>(
//     getSanitizedConfig(config),
//   );
//   const [theme, setTheme] = useState<string>(DEFAULT_THEMES[0]);
//   const [error, setError] = useState<CustomError | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [profile, setProfile] = useState<Profile | null>(null);
//   const [githubProjects, setGithubProjects] = useState<GithubProject[]>([]);

//   const getGithubProjects = useCallback(
//     async (publicRepoCount: number): Promise<GithubProject[]> => {
//       if (sanitizedConfig.projects.github.mode === 'automatic') {
//         if (publicRepoCount === 0) {
//           return [];
//         }

//         const excludeRepo =
//           sanitizedConfig.projects.github.automatic.exclude.projects
//             .map((project) => `+-repo:${project}`)
//             .join('');

//         const query = `user:${sanitizedConfig.github.username}+fork:${!sanitizedConfig.projects.github.automatic.exclude.forks}${excludeRepo}`;
//         const url = `https://api.github.com/search/repositories?q=${query}&sort=${sanitizedConfig.projects.github.automatic.sortBy}&per_page=${sanitizedConfig.projects.github.automatic.limit}&type=Repositories`;

//         const repoResponse = await axios.get(url, {
//           headers: { 'Content-Type': 'application/vnd.github.v3+json' },
//         });
//         const repoData = repoResponse.data;

//         return repoData.items;
//       } else {
//         if (sanitizedConfig.projects.github.manual.projects.length === 0) {
//           return [];
//         }
//         const repos = sanitizedConfig.projects.github.manual.projects
//           .map((project) => `+repo:${project}`)
//           .join('');

//         const url = `https://api.github.com/search/repositories?q=${repos}&type=Repositories`;

//         const repoResponse = await axios.get(url, {
//           headers: { 'Content-Type': 'application/vnd.github.v3+json' },
//         });
//         const repoData = repoResponse.data;
//         console.log(repoData);

//         return repoData.items;
//       }
//     },
//     [
//       sanitizedConfig.github.username,
//       sanitizedConfig.projects.github.mode,
//       sanitizedConfig.projects.github.manual.projects,
//       sanitizedConfig.projects.github.automatic.sortBy,
//       sanitizedConfig.projects.github.automatic.limit,
//       sanitizedConfig.projects.github.automatic.exclude.forks,
//       sanitizedConfig.projects.github.automatic.exclude.projects,
//     ],
//   );

//   const loadData = useCallback(async () => {
//     try {
//       setLoading(true);

//       const response = await axios.get(
//         `https://api.github.com/users/${sanitizedConfig.github.username}`,
//       );
//       const data = response.data;

//       setProfile({
//         avatar: data.avatar_url,
//         name: data.name || ' ',
//         bio: data.bio || '',
//         location: data.location || '',
//         company: data.company || '',
//       });

//       if (!sanitizedConfig.projects.github.display) {
//         return;
//       }

//       setGithubProjects(await getGithubProjects(data.public_repos));
//     } catch (error) {
//       handleError(error as AxiosError | Error);
//     } finally {
//       setLoading(false);
//     }
//   }, [
//     sanitizedConfig.github.username,
//     sanitizedConfig.projects.github.display,
//     getGithubProjects,
//   ]);

//   useEffect(() => {
//     if (Object.keys(sanitizedConfig).length === 0) {
//       setError(INVALID_CONFIG_ERROR);
//     } else {
//       setError(null);
//       setTheme(getInitialTheme(sanitizedConfig.themeConfig));
//       setupHotjar(sanitizedConfig.hotjar);
//       loadData();
//     }
//   }, [sanitizedConfig, loadData]);

//   useEffect(() => {
//     theme && document.documentElement.setAttribute('data-theme', theme);
//   }, [theme]);

//   const handleError = (error: AxiosError | Error): void => {
//     console.error('Error:', error);

//     if (error instanceof AxiosError) {
//       try {
//         const reset = formatDistance(
//           new Date(error.response?.headers?.['x-ratelimit-reset'] * 1000),
//           new Date(),
//           { addSuffix: true },
//         );

//         if (typeof error.response?.status === 'number') {
//           switch (error.response.status) {
//             case 403:
//               setError(setTooManyRequestError(reset));
//               break;
//             case 404:
//               setError(INVALID_GITHUB_USERNAME_ERROR);
//               break;
//             default:
//               setError(GENERIC_ERROR);
//               break;
//           }
//         } else {
//           setError(GENERIC_ERROR);
//         }
//       } catch (innerError) {
//         setError(GENERIC_ERROR);
//       }
//     } else {
//       setError(GENERIC_ERROR);
//     }
//   };

//   const topStyle: React.CSSProperties = {
//     backgroundColor: 'rgb(17, 24, 39)',
//     width: '100%',
//     minHeight: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: -1,
//   };

//   return (
//     <HelmetProvider>
//       <div className="h-screen bg-gray-900 fade-in">
//         {error ? (
//           <ErrorPage
//             status={error.status}
//             title={error.title}
//             subTitle={error.subTitle}
//           />
//         ) : (
//           <>
//             <div>
//               <NavbarComp cardSections={cardSections} />
//             </div>
//             <div className={`min-h-full ${BG_COLOR} mt-19`} style={topStyle}>
//               <div className="grid grid-cols-1 gap-8 rounded-box">
//                 {/* Avatar Card */}
//                 <div
//                   className="col-span-1 p-6 mt-20 bg-gray-900 scroll-mt-20"
//                   id={
//                     cardSections.find((section) => section.name === 'Home')
//                       ?.id ?? 'home'
//                   }
//                 >
//                   <AvatarCard profile={profile} loading={loading} id={''} />
//                 </div>

//                 {/* Details Card */}
//                 <div
//                   className="col-span-1 p-6 bg-gray-900 scroll-mt-20"
//                   id={
//                     cardSections.find((section) => section.name === 'Contacts')
//                       ?.id ?? 'contacts'
//                   }
//                 >
//                   <DetailsCard
//                     profile={profile}
//                     loading={loading}
//                     github={sanitizedConfig.github}
//                     social={sanitizedConfig.social}
//                     id={''}
//                   />
//                 </div>

//                 {/* Education & Honors Card */}
//                 {sanitizedConfig.educations.length !== 0 &&
//                   sanitizedConfig.honors.length !== 0 && (
//                     <div
//                       className="col-span-1 p-6 bg-gray-900 scroll-mt-20"
//                       id={
//                         cardSections.find(
//                           (section) => section.name === 'Education & Honors',
//                         )?.id ?? 'education-honors'
//                       }
//                     >
//                       <EducationHonorCard
//                         loading={loading}
//                         educations={sanitizedConfig.educations}
//                         honors={sanitizedConfig.honors}
//                         id={''}
//                       />
//                     </div>
//                   )}

//                 {/* Marquee Section */}
//                 <div className="col-span-1 p-6 bg-gray-900">
//                   <MarqueeDemo />
//                 </div>

//                 {/* Certifications & Experience */}
//                 {sanitizedConfig.certifications.length !== 0 &&
//                   sanitizedConfig.experiences.length !== 0 && (
//                     <div
//                       className="col-span-1 p-6 bg-gray-900 scroll-mt-20"
//                       id={
//                         cardSections.find(
//                           (section) =>
//                             section.name === 'Certifications & Experience',
//                         )?.id ?? 'certifications-experience'
//                       }
//                     >
//                       <CertExpCard
//                         loading={loading}
//                         certifications={sanitizedConfig.certifications}
//                         experiences={sanitizedConfig.experiences}
//                         id={''}
//                       />
//                     </div>
//                   )}

//                 {/* Skills Grid */}
//                 <div
//                   className="col-span-1 p-6 mt-10 bg-gray-900 scroll-mt-20"
//                   id={
//                     cardSections.find((section) => section.name === 'Skills')
//                       ?.id ?? 'skills'
//                   }
//                 >
//                   <SkillsGrid
//                     loading={loading}
//                     sanitizedConfig={sanitizedConfig}
//                     id={''}
//                     dropdown={
//                       cardSections.find((section) => section.name === 'Skills')
//                         ?.dropdown ?? []
//                     }
//                   />
//                 </div>

//                 {/* GitHub Projects */}
//                 {sanitizedConfig.projects.github.display && (
//                   <div
//                     className="col-span-1 p-6 bg-gray-900 scroll-mt-20"
//                     id={
//                       cardSections.find(
//                         (section) => section.name === 'GitHub Projects',
//                       )?.id ?? 'github-projects'
//                     }
//                   >
//                     <GithubProjectCard
//                       header={sanitizedConfig.projects.github.header}
//                       limit={sanitizedConfig.projects.github.automatic.limit}
//                       githubProjects={githubProjects}
//                       loading={loading}
//                       username={sanitizedConfig.github.username}
//                       id={''}
//                     />
//                   </div>
//                 )}

//                 {/* Publications */}
//                 {sanitizedConfig.publications.length !== 0 && (
//                   <div className="col-span-1 p-6 bg-gray-900 scroll-mt-20">
//                     <PublicationCard
//                       loading={loading}
//                       publications={sanitizedConfig.publications}
//                       id={
//                         cardSections.find(
//                           (section) => section.name === 'Publications',
//                         )?.id ?? 'publications'
//                       }
//                     />
//                   </div>
//                 )}

//                 {/* Blog Section */}
//                 {sanitizedConfig.blog.display && (
//                   <div className="col-span-1 p-6 bg-gray-900 scroll-mt-20">
//                     <BlogCard
//                       loading={loading}
//                       googleAnalyticsId={sanitizedConfig.googleAnalytics.id}
//                       blog={sanitizedConfig.blog}
//                       id={
//                         cardSections.find((section) => section.name === 'Blog')
//                           ?.id ?? 'blog'
//                       }
//                     />
//                   </div>
//                 )}

//                 {/* Options Ledger */}
//                 <div
//                   className="col-span-1 p-6 bg-gray-900 scroll-mt-20"
//                   id={
//                     cardSections.find(
//                       (section) => section.name === 'Stock Options Ledger',
//                     )?.id ?? 'stock-options-ledger'
//                   }
//                 >
//                   <OptionsPLTable loading={loading} id={''} />
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </HelmetProvider>
//   );
// };

// export default GitProfile;
