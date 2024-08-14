import React from 'react';
import {
  SanitizedEducation,
  SanitizedHonor,
} from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import Amsterdam from '../../assets/amsterdam.jpg';

const EducationListItem = ({
  time,
  degree,
  institution,
}: {
  time: React.ReactNode;
  degree?: React.ReactNode;
  institution?: React.ReactNode;
}) => (
  <li className="mb-5 ml-4 text-black">
    <div
      className="absolute w-2 h-2 bg-black rounded-full border border-black mt-1.5"
      style={{ left: '-4.0px' }}
    ></div>
    <div className="my-0.5 text-xs">{time}</div>
    <h3 className="font-semibold">{degree}</h3>
    <div className="mb-4 font-normal">{institution}</div>
  </li>
);

const HonorListItem = ({ honorName }: { honorName: React.ReactNode }) => (
  <>
    <div className="my-0.5 text-xs pt-2 text-black">{honorName}</div>
  </>
);

const EducationHonorCard = ({
  loading,
  educations,
  honors,
}: {
  loading: boolean;
  educations: SanitizedEducation[];
  honors: SanitizedHonor[];
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
      className="card shadow-2xl compact italic w-full max-w-full shadow-2xl grid md:grid-cols-2 rounded-2xl"
      id="education-honor-card"
    >
      <div
        className="bg-cover bg-center h-full rounded-l-2xl"
        style={{
          backgroundImage: `url(${Amsterdam})`,
          backgroundPosition: 'center 40%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.5,
        }}
      ></div>
      <div className="card-body ml-10">
        <div className="flex">
          <div className="flex-1">
            <div className="mx-3 text-white">
              <h5 className="card-title text-white">
                {loading ? (
                  skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500 block">
                    Education
                  </span>
                )}
              </h5>
            </div>
            <div className="text-base-content text-opacity-100">
              <ol className="relative border-l border-black my-2 mx-4 text-black">
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
          <div className="flex-1">
            <div className="mx-3 text-white">
              <h5 className="card-title text-white">
                {loading ? (
                  skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500 block">
                    Honors
                  </span>
                )}
              </h5>
            </div>
            <div className="text-base-content text-opacity-100 text-black">
              <ol className="relative my-2 mx-4 text-white">
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
