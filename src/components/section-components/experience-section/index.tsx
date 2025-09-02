import React from 'react';
import { skeleton } from '../../../utils';
import { COLOR_SCHEMA } from '@/interfaces/colorSchema';

interface Experience {
  company: string;
  position: string;
  from: string;
  to: string;
  companyLink: string;
  details: string;
  skills: string[];
}

interface WorkExperienceItemProps {
  time: React.ReactNode;
  position: React.ReactNode;
  company: React.ReactNode;
  details: React.ReactNode;
  from: string;
  to: string;
  companyLink: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    company: 'PricewaterhouseCoopers (PwC)',
    position: 'Software Engineer & Cyber Risk Consulting Intern',
    from: 'June 2025',
    to: 'August 2025',
    companyLink: 'https://www.pwc.com/',
    details: `
During my internship at PwC, I accelerated an AI-driven document processing pipeline by 2x by consolidating Python and .NET workflows into a unified C# (.NET Core) system, improving reliability and maintainability for LLM orchestration and YAML validation. I enhanced dashboard refresh speed and accuracy by designing a modular Angular frontend integrated with Node.js and BigQuery, enabling real-time metric visualizations in Google Cloud Console for faster business insights. Additionally, I reduced manual setup time by 90% with a cross-platform Avalonia UI automation tool and mitigated Vertex AI YAML hallucinations by 80% by implementing robust prompt-safe schema constraints, improving overall system stability and user trust.
    `,
    skills: [
      'C# (.NET Core)',
      'Python',
      'Angular',
      'Node.js',
      'BigQuery',
      'YAML',
      'LLM orchestration',
    ],
  },
  {
    company: 'TechSource, Inc.',
    position: 'Software Engineering Co-op',
    from: 'Jan 2023',
    to: 'Present',
    companyLink: 'https://techsource-inc.com/',
    details: `
Led development of a fully automated Java data pipeline on Azure Function Apps, cutting execution time by 98% and improving data accuracy and flexibility. Integrated Swagger and SOAP APIs with modular Java libraries to achieve 99% data transfer accuracy and streamline complex workflows. Built reusable UI components with TypeScript, TailwindCSS, and Next.js for the U.S. Department of Energy’s GPT-4-powered AI platform, enhancing UX and frontend performance.
    `,
    skills: [
      'Java',
      'Azure Function Apps',
      'Swagger',
      'SOAP',
      'TypeScript',
      'TailwindCSS',
      'Next.js',
    ],
  },
  {
    company: 'Herrick Technology Labs, Inc.',
    position: 'Software Engineer Co-op',
    from: 'May 2023',
    to: 'Aug 2023',
    companyLink: 'https://www.herricktechlabs.com/',
    details: `
Developed a dynamic linking library using Boost C++ and DLL interfaces to integrate HTL radios with third-party software, improving Vita49 stream generation and reliability by 50%. Optimized cross-system data flow, reduced integration errors, and automated functional and regression UI testing using Selenium and PyTest, increasing testing efficiency by 80% and ensuring consistent system reliability.
    `,
    skills: [
      'C++',
      'Boost',
      'DLL',
      'Selenium',
      'PyTest',
      'Vita49',
      'Radio Integration',
    ],
  },
];

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  time,
  position,
  company,
  details,
  companyLink,
  skills,
}) => (
  <li className="relative pl-6 mb-8">
    {/* Timeline Dot */}
    <span
      className="absolute left-0 w-3 h-3 rounded-full top-2"
      style={{ backgroundColor: COLOR_SCHEMA.accentRed }}
    />
    {/* Timeline Line */}
    <span
      className="absolute left-1.5 top-5 bottom-0 w-0.5"
      style={{ backgroundColor: COLOR_SCHEMA.accentRed }}
    />
    <div>
      <div
        className="mb-1 text-xs"
        style={{ color: COLOR_SCHEMA.textSecondary }}
      >
        {time}
      </div>
      <h3
        className="text-sm font-semibold sm:text-base"
        style={{ color: COLOR_SCHEMA.textPrimary }}
      >
        {position}
      </h3>
      <div
        className="mb-2 text-sm font-medium"
        style={{ color: COLOR_SCHEMA.textPrimary }}
      >
        {companyLink ? (
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{
              color: COLOR_SCHEMA.accentRed,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = COLOR_SCHEMA.accentRedHover)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = COLOR_SCHEMA.accentRed)
            }
          >
            {company}
          </a>
        ) : (
          <span className="underline">{company}</span>
        )}
      </div>

      <p
        className="text-sm whitespace-pre-line"
        style={{ color: COLOR_SCHEMA.textSecondary }}
      >
        {details}
      </p>
      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-6">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-2 py-1 text-xs font-medium rounded-full"
            style={{
              backgroundColor: COLOR_SCHEMA.accentRed,
              color: COLOR_SCHEMA.textPrimary,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </li>
);

const WorkExperienceSection: React.FC<{ loading?: boolean; id?: string }> = ({
  loading = false,
  id,
}) => {
  const renderSkeletons = () =>
    Array.from({ length: 3 }).map((_, idx) => (
      <WorkExperienceItem
        key={idx}
        time={skeleton({ widthCls: 'w-24', heightCls: 'h-3' })}
        position={skeleton({
          widthCls: 'w-36',
          heightCls: 'h-4',
          className: 'my-1',
        })}
        company={skeleton({ widthCls: 'w-32', heightCls: 'h-3' })}
        details={skeleton({ widthCls: 'w-full', heightCls: 'h-3' })}
        from=""
        to=""
        companyLink=""
        skills={[]}
      />
    ));

  return (
    <div
      className="bg-[#2C2C25] card flex w-full max-w-5xl mx-auto shadow-lg shadow-black/50 rounded-2xl overflow-hidden h-auto"
      id={id}
      style={{
        backgroundColor: COLOR_SCHEMA.cardBg,
        boxShadow: `0 4px 15px rgba(0,0,0,0.5)`,
      }}
    >
      <div className="flex flex-col items-center gap-6 p-4">
        <div className="relative z-10 flex flex-col w-full max-w-screen-lg px-4 py-4 md:py-8 md:px-8">
          <div className="flex flex-col items-center justify-center mb-4 text-center">
            <h5 className="text-lg text-center text-[#F5F5F5] card-title md:text-xl mb-6">
              <span className="block text-center border-t-2 border-b-2 border-[#E53935] py-1">
                Work Experience
              </span>
            </h5>
          </div>
          <ol className="relative pl-4 ">
            {loading
              ? renderSkeletons()
              : experiences.map((exp, idx) => (
                  <WorkExperienceItem
                    key={idx}
                    time={`${exp.from} - ${exp.to}`}
                    from={exp.from}
                    to={exp.to}
                    position={exp.position}
                    company={exp.company}
                    companyLink={exp.companyLink}
                    details={exp.details}
                    skills={exp.skills}
                  />
                ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceSection;
