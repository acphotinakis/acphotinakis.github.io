import React from 'react';
import {
  SanitizedEducation,
  SanitizedHonor,
} from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import AmsterdamImage from '../../assets/amsterdam.jpg';
import { MdLocationOn } from 'react-icons/md';

// Color palette constants
const COLORS = {
  primaryRed: '#e63946',
  black: '#121212',
  darkGray: '#1e1e1e',
  midGray: '#9e9e9e',
  white: '#f5f5f5',
};

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
    <div
      className="absolute w-2 h-2 rounded-full border mt-1.5"
      style={{
        backgroundColor: COLORS.primaryRed,
        borderColor: COLORS.primaryRed,
        left: '-4.5px',
      }}
    ></div>
    {/* Timeline Line */}
    <div
      className="absolute top-0 bottom-0 left-0 w-px"
      style={{
        backgroundColor: COLORS.primaryRed,
        left: '-1px',
        bottom: '-23px',
        top: '5px',
      }}
    ></div>

    <div className="ml-2">
      <div
        className="my-0.5 text-xs sm:text-sm flex items-center"
        style={{ color: COLORS.midGray }}
      >
        <span>{time}</span>
      </div>
      <div className="text-sm font-medium sm:text-base md:text-md">
        <span>{institution}</span>
      </div>
      <div className="text-sm font-medium sm:text-base md:text-md">
        <span>{degree}</span>
      </div>
    </div>
  </li>
);

const HonorListItem = ({ honorName }: { honorName: React.ReactNode }) => (
  <li className="relative mb-5" style={{ color: COLORS.white }}>
    {/* Timeline Dot */}
    <div
      className="absolute w-2 h-2 rounded-full border mt-1.5"
      style={{
        backgroundColor: COLORS.primaryRed,
        borderColor: COLORS.primaryRed,
        left: '-4.5px',
      }}
    ></div>
    {/* Timeline Line */}
    <div
      className="absolute top-0 bottom-0 left-0 w-px"
      style={{
        backgroundColor: COLORS.primaryRed,
        left: '-1px',
        bottom: '-23px',
        top: '5px',
      }}
    ></div>
    <div className="ml-2 my-0.5 text-xs pt-1 text-lg md:text-base sm:text-sm text-[#F5F5F5]">
      {honorName}
    </div>
  </li>
);

const EducationHonorPage = ({
  loading,
  educations,
  honors,
  id,
}: {
  loading: boolean;
  educations: SanitizedEducation[];
  honors: SanitizedHonor[];
  id: string;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <EducationListItem
          key={index}
          time={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
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
      className="flex w-full h-full max-w-5xl mx-auto overflow-hidden shadow-lg card rounded-2xl shadow-black/50 scroll-mt-16"
      id={id}
      style={{
        backgroundColor: COLORS.black,
        boxShadow: `0 4px 15px rgba(0,0,0,0.5)`,
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
          <span>Amsterdam, Netherlands</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 px-8 py-8">
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Education */}
          <div className="flex-1">
            <h5 className="text-lg md:text-xl mb-4 text-[#F5F5F5] card-title">
              {loading ? (
                skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
              ) : (
                <span className="block text-[#F5F5F5] border-t-2 border-b-2 border-[#E53935] py-1">
                  Education
                </span>
              )}
            </h5>
            <ol className="relative mx-4 my-2 border-l border-[#E53935]">
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
            <h5 className="text-lg md:text-xl mb-4 text-[#F5F5F5] card-title">
              {loading ? (
                skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
              ) : (
                <span className="block text-[#F5F5F5] border-t-2 border-b-2 border-[#E53935] py-1">
                  Honors
                </span>
              )}
            </h5>
            <ol className="relative mx-4 my-2 border-l border-[#E53935]">
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

export default EducationHonorPage;
