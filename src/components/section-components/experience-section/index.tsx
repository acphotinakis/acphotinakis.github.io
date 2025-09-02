import React from 'react';
import { skeleton } from '../../../utils';
import { COLOR_SCHEMA } from '@/interfaces/colorSchema';
import {
  CompInputWorkExperiencesSectionProps,
  WorkExperience,
  WorkExperienceItemProps,
} from '@/data/page_data/websiteInterfaces';
import ReusableSectionComponent from '@/components/section-reusable-components/section-starter';

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

const WorkExperienceSection = ({
  id,
  loading,
  workExperiences,
}: CompInputWorkExperiencesSectionProps) => {
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
    <ReusableSectionComponent
      id={id}
      loading={false}
      header="Work Experience"
      skeletonFunction={() => <div>Loading...</div>}
      content={
        <ol className="relative pl-4 ">
          {loading
            ? renderSkeletons()
            : workExperiences.map((exp: WorkExperience, idx: number) => (
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
      }
    />
  );
};

export default WorkExperienceSection;
