import React from 'react';
import { skeleton } from '../../../utils';
import AmsterdamImage from '../../../assets/amsterdam.jpg';
import { MdLocationOn } from 'react-icons/md';
import { COLOR_SCHEMA } from '@/interfaces/colorSchema';

// Color palette constants
const COLORS = {
  primaryRed: '#e63946',
  black: '#121212',
  darkGray: '#1e1e1e',
  midGray: '#9e9e9e',
  white: '#f5f5f5',
};

const educations = [
  {
    institution: 'Rochester Institute of Technology',
    degree: 'M.Sc. Computer Science',
    from: 'August 2025',
    to: 'December 2026',
    level: 'Master’s',
    description:
      'Specializing in advanced AI, machine learning, and algorithmic trading systems.',
    highlightColor: '#F87171', // red for masters to stand out
    special: true,
  },
  {
    institution: 'Rochester Institute of Technology',
    degree: 'B.Sc. Computer Science',
    from: 'August 2021',
    to: 'May 2025',
    level: 'Bachelor’s',
    description:
      'Pursuing a strong foundation in software engineering, algorithms, and systems design.',
    highlightColor: '#4ADE80', // green for bachelors
  },
  {
    institution: 'Rochester Institute of Technology',
    degree: 'Minor in Finance',
    from: 'August 2022',
    to: 'December 2024',
    level: 'Bachelor’s',
    description:
      'Exploring financial markets, investing, and the intersection of technology and finance.',
    highlightColor: '#4ADE80',
  },
];

const honors = [
  { honorName: 'RIT Presidential Scholar', from: '2021', to: '2026' },
  { honorName: "Dean's List Spring '25", from: '2025', to: '2025' },
  { honorName: "Dean's List Fall '24", from: '2024', to: '2024' },
  { honorName: "Dean's List Fall '23", from: '2023', to: '2023' },
  { honorName: "Dean's List Fall '22", from: '2022', to: '2022' },
  { honorName: "Dean's List Spring '22", from: '2022', to: '2022' },
];

const EducationListItem = ({
  time,
  degree,
  institution,
}: {
  time: React.ReactNode;
  degree?: React.ReactNode;
  institution?: React.ReactNode;
}) => (
  <li className="relative mb-5" style={{ color: COLORS.white }}>
    {/* Dot */}
    <div
      className="absolute w-2 h-2 rounded-full border mt-1.5"
      style={{
        backgroundColor: COLORS.primaryRed,
        borderColor: COLORS.primaryRed,
        left: '-4.5px',
      }}
    />
    {/* Timeline Line */}
    <div
      className="absolute top-0 bottom-0 left-0 w-px"
      style={{
        backgroundColor: COLORS.primaryRed,
        left: '-1px',
        bottom: '-23px',
        top: '5px',
      }}
    />
    <div className="ml-3">
      <div
        className="flex items-center mb-1 text-xs font-medium sm:text-sm md:text-sm"
        style={{ color: COLORS.midGray }}
      >
        {time}
      </div>
      <div className="text-sm sm:text-base md:text-base font-semibold mb-0.5">
        {institution}
      </div>
      <div
        className="text-sm sm:text-base md:text-base font-medium text-[#F5F5F5]"
        style={{ color: COLOR_SCHEMA.textSecondary }}
      >
        {degree}
      </div>
    </div>
  </li>
);

const HonorListItem = ({ honorName }: { honorName: React.ReactNode }) => (
  <li className="relative mb-5" style={{ color: COLORS.white }}>
    {/* Dot */}
    <div
      className="absolute w-2 h-2 rounded-full border mt-1.5"
      style={{
        backgroundColor: COLOR_SCHEMA.accentRed,
        borderColor: COLOR_SCHEMA.accentRed,
        left: '-4.5px',
      }}
    />
    {/* Timeline Line */}
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
  loading,
  id,
}: {
  loading: boolean;
  id: string;
}) => {
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

  return (
    <div
      className="flex w-full h-full max-w-5xl mx-auto overflow-hidden shadow-lg rounded-2xl scroll-mt-16"
      id={id}
      style={{
        backgroundColor: COLOR_SCHEMA.black,
        boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
      }}
    >
      {/* Image */}
      <div
        className="relative hidden md:block min-h-[300px] bg-center bg-cover"
        style={{
          backgroundImage: `url(${AmsterdamImage})`,
          backgroundPosition: 'center 40%',
          backgroundSize: 'cover',
        }}
      >
        <div
          className="absolute flex items-center space-x-2 top-10 right-10"
          style={{ color: COLORS.white }}
        >
          <MdLocationOn size={24} style={{ color: COLORS.primaryRed }} />
          <span className="text-sm md:text-base">Amsterdam, Netherlands</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 px-6 py-6 md:px-8 md:py-8">
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Education */}
          <div className="flex-1">
            <h1 className="text-md sm:text-xl md:text-2xl mb-4 text-[#F5F5F5] card-title">
              {loading ? (
                skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
              ) : (
                <span className="block text-base text-[#F5F5F5] border-t-2 border-b-2 border-[#E53935] py-1">
                  Education
                </span>
              )}
            </h1>
            <ol className="relative mx-2 md:mx-4 my-2 border-l border-[#E53935]">
              {loading
                ? renderSkeleton()
                : educations.map((item, index) => (
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
              {loading ? (
                skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
              ) : (
                <span className="block text-base text-[#F5F5F5] border-t-2 border-b-2 border-[#E53935] py-1">
                  Honors
                </span>
              )}
            </h5>
            <ol className="relative mx-2 md:mx-4 my-2 border-l border-[#E53935]">
              {loading
                ? renderSkeleton()
                : honors.map((item, index) => (
                    <HonorListItem key={index} honorName={item.honorName} />
                  ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationHonorSection;
