import React, { Fragment } from 'react';
import {
  SanitizedCertification,
  SanitizedExperience,
} from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import LinkIcon from '@mui/icons-material/Link';
import PlataniasImage from '../../assets/platanias.jpg';
import { MdLocationOn } from 'react-icons/md';

const CertificationListItem = ({
  year,
  name,
  link,
}: {
  year?: React.ReactNode;
  name?: React.ReactNode;
  body?: React.ReactNode;
  link?: string;
}) => (
  <li className="mb-5 relative text-black">
    <div
      className="absolute w-2 h-2 bg-black rounded-full border border-black mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="ml-2">
      <div className="my-0.5 text-xs sm:text-sm flex items-center">
        <span>{year}</span>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <span className="ml-2 text-blue-500 hover:underline flex items-center">
              <LinkIcon />
            </span>
          </a>
        )}
      </div>
      <div className="font-medium text-sm sm:text-base md:text-md">
        <span>{name}</span>
      </div>
    </div>
  </li>
);

const ExperienceListItem = ({
  time,
  position,
  company,
  companyLink,
}: {
  time: React.ReactNode;
  position?: React.ReactNode;
  company?: React.ReactNode;
  companyLink?: string;
}) => (
  <li className="mb-5 text-black relative">
    <div
      className="absolute w-2 h-2 bg-black rounded-full border border-black mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="ml-2">
      <div className="my-0.5 text-xs sm:text-sm text-black">{time}</div>
      <h3 className="font-semibold text-sm sm:text-base md:text-md">
        {position}
      </h3>
      <div className="mb-4 font-normal text-sm sm:text-base">
        <a href={companyLink} target="_blank" rel="noreferrer">
          <u className="text-blue-500 hover:underline">{company}</u>
        </a>
      </div>
    </div>
  </li>
);

const CertExpCard = ({
  loading,
  certifications,
  experiences,
  id,
}: {
  loading: boolean;
  certifications: SanitizedCertification[];
  experiences: SanitizedExperience[];
  id: string;
}) => {
  const renderExperienceSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ExperienceListItem
          key={index}
          time={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          position={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          company={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }

    return array;
  };

  const renderCertificationSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <CertificationListItem
          key={index}
          year={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          name={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          body={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }

    return array;
  };

  return (
    <div
      className="bg-white card flex compact italic  w-[95vw] mx-auto shadow shadow-[0_4px_8px_rgba(0,_0,_0,_0.5),_0_-4px_8px_rgba(0,_0,_0,_0.5)] items-center justify-between grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden h-auto"
      id={id}
    >
      <div className="card-body flex">
        <div className="flex">
          <div className="flex-1 text-lg md:text-base sm:text-sm">
            <div className="mx-3 text-black">
              <h5 className="card-title text-black">
                {loading ? (
                  skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500 block">
                    Experience
                  </span>
                )}
              </h5>
            </div>
            <div className="text-base-content text-opacity-100">
              <ol className="relative border-l border-black my-2 mx-4 text-black items-center justify-between">
                {loading ? (
                  renderExperienceSkeleton()
                ) : (
                  <Fragment>
                    {experiences.map((experience, index) => (
                      <ExperienceListItem
                        key={index}
                        time={`${experience.from} - ${experience.to}`}
                        position={experience.position}
                        company={experience.company}
                        companyLink={
                          experience.companyLink
                            ? experience.companyLink
                            : undefined
                        }
                      />
                    ))}
                  </Fragment>
                )}
              </ol>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="flex-1 text-lg md:text-base sm:text-sm">
            <div className="mx-3 text-black">
              <h5 className="card-title text-black">
                {loading ? (
                  skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500 block">
                    Certifications
                  </span>
                )}
              </h5>
            </div>
            <div className="text-base-content text-opacity-100">
              <ol className="relative border-l border-black my-2 mx-4 text-black ">
                {loading ? (
                  renderCertificationSkeleton()
                ) : (
                  <>
                    {certifications.map((certification, index) => (
                      <CertificationListItem
                        key={index}
                        year={certification.year}
                        name={certification.name}
                        link={certification.link}
                      />
                    ))}
                  </>
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="bg-cover bg-center h-full rounded-r-2xl hidden md:block"
        style={{
          backgroundImage: `url(${PlataniasImage})`,
          backgroundPosition: 'center 40%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 1.0,
        }}
      >
        {' '}
        <div className="absolute top-10 right-10 flex items-center space-x-2 text-white">
          <MdLocationOn size={24} color="red" />
          <span>Crete, Greece</span>
        </div>
      </div>
    </div>
  );
};

export default CertExpCard;
