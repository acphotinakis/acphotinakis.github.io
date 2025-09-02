import React from 'react';
import { skeleton } from '../../../utils';
import LinkIcon from '@mui/icons-material/Link';
import PlataniasImage from '../../../assets/platanias.jpg';
import { MdLocationOn } from 'react-icons/md';
import { COLOR_SCHEMA } from '@/interfaces/colorSchema';
import { CompInputCertificationsSectionProps } from '@/data/page_data/websiteInterfaces';

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
  <li className="relative mb-5" style={{ color: COLOR_SCHEMA.white }}>
    <div
      className="absolute w-2 h-2 rounded-full border mt-1.5"
      style={{
        backgroundColor: COLOR_SCHEMA.accentRed,
        borderColor: COLOR_SCHEMA.accentRed,
        left: '-4.5px',
      }}
    ></div>
    {/* Timeline Line */}
    <div
      className="absolute top-0 bottom-0 left-0 w-px"
      style={{
        backgroundColor: COLOR_SCHEMA.accentRed,
        left: '-1px',
        bottom: '-23px',
        top: '5px',
      }}
    ></div>

    <div className="ml-2">
      <div
        className="my-0.5 text-xs sm:text-sm flex items-center"
        style={{ color: COLOR_SCHEMA.textMuted }}
      >
        <span>{year}</span>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <span
              className="flex items-center ml-2 hover:underline"
              style={{ color: COLOR_SCHEMA.accentRed }}
            >
              <LinkIcon />
            </span>
          </a>
        )}
      </div>
      <div className="text-sm font-medium sm:text-base md:text-md">
        <span>{name}</span>
      </div>
    </div>
  </li>
);

const CertificationsSection = ({
  id,
  loading,
  certifications,
}: CompInputCertificationsSectionProps) => {
  const renderCertificationSkeleton = () =>
    Array.from({ length: 2 }, (_, index) => (
      <CertificationListItem
        key={index}
        year={skeleton({ widthCls: 'w-5/12', heightCls: 'h-4' })}
        name={skeleton({
          widthCls: 'w-6/12',
          heightCls: 'h-4',
          className: 'my-1.5',
        })}
        body={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
      />
    ));

  return (
    <div
      className="grid w-full max-w-5xl grid-cols-1 mx-auto overflow-hidden shadow-lg card md:grid-cols-2 rounded-2xl"
      id={id}
      style={{
        backgroundColor: COLOR_SCHEMA.black,
        boxShadow: `0 4px 15px rgba(0,0,0,0.5)`,
      }}
    >
      <div className="flex card-body">
        <div className="flex">
          {/* Certifications */}
          <div className="flex-1 text-lg md:text-base sm:text-sm">
            <div className="mx-3" style={{ color: COLOR_SCHEMA.white }}>
              <h5 className="card-title">
                {loading ? (
                  skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
                ) : (
                  <span
                    className="block border-t-2 border-b-2"
                    style={{
                      borderColor: COLOR_SCHEMA.accentRed,
                      color: COLOR_SCHEMA.white,
                    }}
                  >
                    Certifications
                  </span>
                )}
              </h5>
            </div>
            <ol
              className="relative mx-4 my-2 border-l"
              style={{
                color: COLOR_SCHEMA.white,
                borderColor: COLOR_SCHEMA.accentRed,
              }}
            >
              {loading
                ? renderCertificationSkeleton()
                : certifications.map((cert, i) => (
                    <CertificationListItem
                      key={i}
                      year={cert.year}
                      name={cert.name}
                      link={cert.link}
                    />
                  ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Image */}
      <div
        className="relative hidden md:block min-h-[300px] bg-center bg-cover"
        style={{
          backgroundImage: `url(${PlataniasImage})`,
          backgroundPosition: 'center 40%',
          backgroundSize: 'cover',
        }}
      >
        <div
          className="absolute flex items-center space-x-2 top-10 right-10"
          style={{ color: COLOR_SCHEMA.white }}
        >
          <MdLocationOn size={24} style={{ color: COLOR_SCHEMA.accentRed }} />
          <span>Crete, Greece</span>
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;
