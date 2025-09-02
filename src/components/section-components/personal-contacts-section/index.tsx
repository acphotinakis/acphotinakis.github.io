import { AiFillGithub } from 'react-icons/ai';
import { FaDev, FaGlobe, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { RiMailFill, RiPhoneFill } from 'react-icons/ri';
import { Profile } from '../../../interfaces/profile';
import {
  SanitizedGithub,
  SanitizedSocial,
} from '../../../interfaces/sanitized-config';
import { skeleton } from '../../../utils';
import BarcelonaImage from '../../../assets/barcelona.jpg';
import ResumePdfFile from '../../../assets/Photinakis_Andrew_Resume_SWE.pdf';
import { COLOR_SCHEMA } from '@/interfaces/colorSchema';

type Props = {
  profile: Profile | null;
  loading: boolean;
  social: SanitizedSocial;
  github: SanitizedGithub;
  id: string;
};

const ListItem: React.FC<{
  icon: React.ReactNode;
  title: React.ReactNode;
  value: React.ReactNode;
  link?: string;
  skeleton?: boolean;
  color?: string;
}> = ({ icon, title, value, link, skeleton = false, color }) => {
  return (
    <div className="flex items-center px-6 py-2">
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
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center px-1 py-2 text-sm sm:text-base md:text-md"
        >
          {value}
        </a>
      </div>
    </div>
  );
};

const colorMap: Record<string, string> = {
  github: '#E53935',
  linkedin: '#E53935',
  dev: '#E53935',
  stackoverflow: '#E53935',
  phone: '#E53935',
  email: '#E53935',
  website: '#E53935',
};

/** Details Card */
const DetailsCard = ({ profile, loading, social, github, id }: Props) => {
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
      className="flex w-full h-auto max-w-5xl mx-auto overflow-hidden shadow-lg card shadow-black/50 rounded-2xl"
      id={id}
      style={{
        backgroundColor: COLOR_SCHEMA.cardBg,
        boxShadow: `0 4px 15px rgba(0,0,0,0.5)`,
      }}
    >
      <div className="flex flex-col w-full h-full md:flex-row">
        {/* Text Content */}
        <div className="flex-1 px-8 py-8">
          {loading || !profile ? (
            renderSkeleton()
          ) : (
            <>
              <h5 className="text-lg text-[#F5F5F5] card-title md:text-xl mb-4 px-6">
                <span className="border-t-2 border-b-2 border-[#E53935] py-1 inline-block">
                  Contacts
                </span>
              </h5>

              <div className="flex flex-col w-full gap-2 items-left">
                {profile.location && (
                  <ListItem
                    icon={<MdLocationOn />}
                    title="Based in:"
                    value={profile.location}
                    color="#E53935"
                  />
                )}

                <ListItem
                  icon={<AiFillGithub />}
                  title="GitHub:"
                  value={github.username}
                  link={`https://github.com/${github.username}`}
                  color={colorMap.github}
                />

                {social?.linkedin && (
                  <ListItem
                    icon={<FaLinkedin />}
                    title="LinkedIn:"
                    value={social.linkedin}
                    link={`https://www.linkedin.com/in/${social.linkedin}`}
                    color={colorMap.linkedin}
                  />
                )}

                {social?.dev && (
                  <ListItem
                    icon={<FaDev />}
                    title="Dev:"
                    value={social.dev}
                    link={`https://dev.to/${social.dev}`}
                    color={colorMap.dev}
                  />
                )}

                {social?.stackoverflow && (
                  <ListItem
                    icon={<FaStackOverflow />}
                    title="Stack Overflow:"
                    value={social.stackoverflow.split('/').slice(-1)}
                    link={`https://stackoverflow.com/users/${social.stackoverflow}`}
                    color={colorMap.stackoverflow}
                  />
                )}

                {social?.website && (
                  <ListItem
                    icon={<FaGlobe />}
                    title="Website:"
                    value={social.website.replace(/^https?:\/\//, '')}
                    link={
                      social.website.startsWith('http')
                        ? social.website
                        : `http://${social.website}`
                    }
                    color={colorMap.website}
                  />
                )}

                {social?.phone && (
                  <ListItem
                    icon={<RiPhoneFill />}
                    title="Phone:"
                    value={social.phone}
                    link={`tel:${social.phone}`}
                    color={colorMap.phone}
                  />
                )}

                {social?.email && (
                  <ListItem
                    icon={<RiMailFill />}
                    title="Email:"
                    value={social.email}
                    link={`mailto:${social.email}`}
                    color={colorMap.email}
                  />
                )}

                {ResumePdfFile && !loading && (
                  <a
                    href={ResumePdfFile}
                    target="_blank"
                    className="mt-6 text-xs text-white transition-colors duration-300 border-[#E53935] opacity-100 btn btn-outline btn-sm rounded-2xl hover:border-[#E53935] hover:bg-[#E53935] hover:text-white"
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
          className="relative hidden bg-center bg-cover md:block md:w-1/2 rounded-r-2xl"
          style={{
            backgroundImage: `url(${BarcelonaImage})`,
            backgroundPosition: 'center 40%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute flex items-center space-x-2 text-white top-10 right-10">
            <MdLocationOn size={24} color="#E53935" />
            <span>Barcelona, Spain</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
