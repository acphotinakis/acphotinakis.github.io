import React from 'react';
import {
  SanitizedEducation,
  SanitizedHonor,
} from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import Amsterdam from '../../assets/amsterdam.jpg';
import { MdLocationOn } from 'react-icons/md';

const EducationListItem = ({
  time,
  degree,
  institution,
}: {
  time: React.ReactNode;
  degree?: React.ReactNode;
  institution?: React.ReactNode;
}) => (
  <li className="mb-5 ml-4 text-white">
    <div
      className="absolute w-2 h-2 bg-black rounded-full border border-white mt-1.5"
      style={{ left: '-4.0px' }}
    ></div>
    <div className="my-0.5 text-xs sm:text-sm text-white">{time}</div>
    <h3 className="text-sm font-semibold sm:text-base md:text-md">{degree}</h3>
    <div className="mb-4 text-sm font-normal sm:text-base">{institution}</div>
  </li>
);

const HonorListItem = ({ honorName }: { honorName: React.ReactNode }) => (
  <li className="mb-5 ml-4 text-white">
    <div
      className="absolute w-2 h-2 bg-black rounded-full border border-white mt-1.5"
      style={{ left: '-4.0px' }}
    ></div>
    <div className="my-0.5 text-xs pt-1 text-lg md:text-base sm:text-sm text-white">
      {honorName}
    </div>
  </li>
);

const EducationHonorCard = ({
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
      className="bg-black card flex h-full w-[95vw] compact italic mx-auto shadow shadow-[0_4px_8px_rgba(0,_0,_0,_0.5),_0_-4px_8px_rgba(0,_0,_0,_0.5)] items-center justify-between grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden h-auto scroll-mt-16"
      id={id}
    >
      <div
        className="hidden h-full bg-center bg-cover rounded-l-2xl md:block"
        style={{
          backgroundImage: `url(${Amsterdam})`,
          backgroundPosition: 'center 40%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 1.0,
        }}
      >
        <div className="absolute flex items-center space-x-2 text-white top-10 left-10">
          <MdLocationOn size={24} color="red" />
          <span>Amsterdam, Netherlands</span>
        </div>
      </div>
      <div className="ml-10 card-body">
        <div className="flex">
          <div className="flex-1 text-lg md:text-base sm:text-sm">
            <div className="mx-3 text-white">
              <h5 className="text-white card-title">
                {loading ? (
                  skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
                ) : (
                  <span className="block text-white border-t-2 border-b-2 border-blue-500 opacity-100 text-base-content">
                    Education
                  </span>
                )}
              </h5>
            </div>
            <div className="text-opacity-100 text-base-content">
              <ol className="relative mx-4 my-2 text-white border-l border-white">
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
          </div>
          <div className="flex-1 text-lg md:text-base sm:text-sm">
            <div className="mx-3 text-white">
              <h5 className="text-white card-title">
                {loading ? (
                  skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
                ) : (
                  <span className="block text-white border-t-2 border-b-2 border-blue-500 opacity-100 text-base-content">
                    Honors
                  </span>
                )}
              </h5>
            </div>
            <div className="ml-3 text-white text-opacity-100 text-base-content">
              <ol className="relative mx-4 my-2 text-white border-l border-white">
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
    </div>
  );
};

export default EducationHonorCard;
