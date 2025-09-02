import React from 'react';
import { skeleton } from '../../../utils';
import { COLOR_SCHEMA } from '@/interfaces/colorSchema';
import { CompInputEducationHonorsSectionProps } from '@/data/page_data/websiteInterfaces';
import ReusableSectionComponent from '@/components/section-reusable-components/section-starter';

const EducationListItem = ({
  time,
  degree,
  institution,
}: {
  time: React.ReactNode;
  degree?: React.ReactNode;
  institution?: React.ReactNode;
}) => (
  <li className="relative mb-5" style={{ color: COLOR_SCHEMA.white }}>
    <div
      className="absolute w-2 h-2 rounded-full border mt-1.5"
      style={{
        backgroundColor: COLOR_SCHEMA.accentRed,
        borderColor: COLOR_SCHEMA.accentRed,
        left: '-4.5px',
      }}
    />
    <div
      className="absolute top-0 bottom-0 left-0 w-px"
      style={{
        backgroundColor: COLOR_SCHEMA.accentRed,
        left: '-1px',
        bottom: '-23px',
        top: '5px',
      }}
    />
    <div className="ml-3">
      <div
        className="flex items-center mb-1 text-xs font-medium sm:text-sm md:text-sm"
        style={{ color: COLOR_SCHEMA.midGray }}
      >
        {time}
      </div>
      <div className="text-sm sm:text-base md:text-base font-semibold mb-0.5">
        {institution}
      </div>
      <div
        className="text-sm font-medium sm:text-base md:text-base"
        style={{ color: COLOR_SCHEMA.textSecondary }}
      >
        {degree}
      </div>
    </div>
  </li>
);

const HonorListItem = ({ honorName }: { honorName: React.ReactNode }) => (
  <li className="relative mb-5" style={{ color: COLOR_SCHEMA.white }}>
    <div
      className="absolute w-2 h-2 rounded-full border mt-1.5"
      style={{
        backgroundColor: COLOR_SCHEMA.accentRed,
        borderColor: COLOR_SCHEMA.accentRed,
        left: '-4.5px',
      }}
    />
    <div
      className="absolute top-0 bottom-0 left-0 w-px"
      style={{
        backgroundColor: COLOR_SCHEMA.accentRed,
        left: '-1px',
        bottom: '-23px',
        top: '5px',
      }}
    />
    <div
      className="pt-1 ml-3 text-sm font-medium sm:text-base md:text-base"
      style={{ color: COLOR_SCHEMA.textSecondary }}
    >
      {honorName}
    </div>
  </li>
);

const EducationHonorSection = ({
  id,
  loading,
  educationHonors,
}: CompInputEducationHonorsSectionProps) => {
  const { educations, honors } = educationHonors;

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <EducationListItem
          key={index}
          time={skeleton({ widthCls: 'w-5/12', heightCls: 'h-4' })}
          degree={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          institution={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }
    return array;
  };

  const content = (
    <div className="flex flex-col gap-6 md:flex-row">
      {/* Education */}
      <div className="flex-1">
        <h1 className="text-md sm:text-xl md:text-2xl mb-4 text-[#F5F5F5] card-title">
          <span className="block text-base text-[#F5F5F5] border-t-2 border-b-2 border-[#E53935] py-1">
            Education
          </span>
        </h1>
        <ol className="relative mx-2 md:mx-4 my-2 border-l border-[#E53935]">
          {educations.map((item, index) => (
            <EducationListItem
              key={index}
              time={`${item.from} - ${item.to}`}
              degree={item.degree}
              institution={item.institution}
            />
          ))}
        </ol>
      </div>

      {/* Honors */}
      <div className="flex-1">
        <h5 className="text-lg sm:text-xl md:text-2xl mb-4 text-[#F5F5F5] card-title">
          <span className="block text-base text-[#F5F5F5] border-t-2 border-b-2 border-[#E53935] py-1">
            Honors
          </span>
        </h5>
        <ol className="relative mx-2 md:mx-4 my-2 border-l border-[#E53935]">
          {honors.map((item, index) => (
            <HonorListItem key={index} honorName={item.honorName} />
          ))}
        </ol>
      </div>
    </div>
  );

  return (
    <ReusableSectionComponent
      id={id}
      loading={loading}
      header="Education & Honors"
      skeletonFunction={renderSkeleton}
      content={content}
    />
  );
};

export default EducationHonorSection;
