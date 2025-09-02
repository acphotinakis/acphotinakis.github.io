import { AiFillGithub } from 'react-icons/ai';
import { FaDev, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { RiMailFill, RiPhoneFill } from 'react-icons/ri';
import { skeleton } from '../../../utils';
import BarcelonaImage from '../../../assets/barcelona.jpg';
import ResumePdfFile from '../../../assets/Photinakis_Andrew_Resume_2026.pdf';
import { COLOR_SCHEMA } from '@/interfaces/colorSchema';
import { CompInputPersonalContactsSectionProps } from '@/data/page_data/websiteInterfaces';

const ListItem: React.FC<{
  icon: React.ReactNode;
  title: React.ReactNode;
  value: React.ReactNode;
  link?: string;
  skeleton?: boolean;
  color?: string;
}> = ({ icon, title, value, link, skeleton = false, color }) => {
  return (
    <div className="flex items-center px-4 py-2 sm:px-6">
      <div className="flex items-center flex-grow gap-2 my-1 text-sm font-medium sm:text-base md:text-md">
        <span style={{ color }}>{icon}</span> {title}
      </div>
      <div
        className={`${
          skeleton ? 'flex-grow' : ''
        } text-sm sm:text-base md:text-md font-normal text-right mr-2 ml-3 ${link ? 'truncate' : ''}`}
        style={{
          wordBreak: 'break-word',
          color: '#F5F5F5',
        }}
      >
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-1 py-2 text-sm sm:text-base md:text-md"
          >
            {value}
          </a>
        ) : (
          value
        )}
      </div>
    </div>
  );
};

const ContactsSection = ({
  id,
  loading,
  personalContacts,
}: CompInputPersonalContactsSectionProps) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 4; index++) {
      array.push(
        <ListItem
          key={index}
          skeleton={true}
          icon={skeleton({ widthCls: 'w-4', heightCls: 'h-4' })}
          title={skeleton({ widthCls: 'w-24', heightCls: 'h-4' })}
          value={skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
          color="#B0B0B0"
        />,
      );
    }
    return array;
  };

  return (
    <div
      className="flex flex-col w-full max-w-5xl mx-auto overflow-hidden shadow-lg card shadow-black/50 rounded-2xl md:flex-row"
      id={id}
      style={{
        backgroundColor: COLOR_SCHEMA.cardBg,
        boxShadow: `0 4px 15px rgba(0,0,0,0.5)`,
      }}
    >
      {/* Text Content */}
      <div className="flex-1 px-4 py-6 sm:px-6 md:px-8 md:py-8">
        {loading ? (
          renderSkeleton()
        ) : (
          <>
            <h5 className="text-lg text-[#F5F5F5] card-title md:text-xl mb-4 px-2 sm:px-6 text-center lg:text-center">
              <span className="border-t-2 border-b-2 border-[#E53935] py-1 inline-block">
                Contacts
              </span>
            </h5>

            <div className="flex flex-col w-full gap-2">
              {personalContacts.location && (
                <ListItem
                  icon={<MdLocationOn />}
                  title="Based in:"
                  value={personalContacts.location}
                  color="#E53935"
                />
              )}

              <ListItem
                icon={<AiFillGithub />}
                title="GitHub:"
                value={personalContacts.github}
                link={`https://github.com/${personalContacts.github}`}
                color={COLOR_SCHEMA.accentRed}
              />

              {personalContacts?.linkedin && (
                <ListItem
                  icon={<FaLinkedin />}
                  title="LinkedIn:"
                  value={personalContacts.linkedin}
                  link={`https://www.linkedin.com/in/${personalContacts.linkedin}`}
                  color={COLOR_SCHEMA.accentRed}
                />
              )}

              {personalContacts?.dev && (
                <ListItem
                  icon={<FaDev />}
                  title="Dev:"
                  value={personalContacts.dev}
                  link={`https://dev.to/${personalContacts.dev}`}
                  color={COLOR_SCHEMA.accentRed}
                />
              )}

              {personalContacts?.stackoverflow && (
                <ListItem
                  icon={<FaStackOverflow />}
                  title="Stack Overflow:"
                  value={personalContacts.stackoverflow.split('/').slice(-1)}
                  link={`https://stackoverflow.com/users/${personalContacts.stackoverflow}`}
                  color={COLOR_SCHEMA.accentRed}
                />
              )}

              {personalContacts?.phone && (
                <ListItem
                  icon={<RiPhoneFill />}
                  title="Phone:"
                  value={personalContacts.phone}
                  link={`tel:${personalContacts.phone}`}
                  color={COLOR_SCHEMA.accentRed}
                />
              )}

              {personalContacts?.email && (
                <ListItem
                  icon={<RiMailFill />}
                  title="Email:"
                  value={personalContacts.email}
                  link={`mailto:${personalContacts.email}`}
                  color={COLOR_SCHEMA.accentRed}
                />
              )}

              {ResumePdfFile && !loading && (
                <a
                  href={ResumePdfFile}
                  target="_blank"
                  className="mt-6 text-xs sm:text-sm text-white transition-colors duration-300 border-[#E53935] opacity-100 btn btn-outline btn-sm rounded-2xl hover:border-[#E53935] hover:bg-[#E53935] hover:text-white"
                  download
                  rel="noreferrer"
                >
                  Download Resume (.pdf)
                </a>
              )}
            </div>
          </>
        )}
      </div>

      {/* Image Section */}
      <div
        className="relative w-full h-48 bg-center bg-cover sm:h-64 md:h-auto md:w-1/2 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none"
        style={{
          backgroundImage: `url(${BarcelonaImage})`,
          backgroundPosition: 'center 40%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute flex items-center space-x-2 text-white top-4 right-4 sm:top-10 sm:right-10">
          <MdLocationOn size={24} color="#E53935" />
          <span>Barcelona, Spain</span>
        </div>
      </div>
    </div>
  );
};

export default ContactsSection;
