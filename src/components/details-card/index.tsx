import { AiFillGithub } from 'react-icons/ai';
import { FaDev, FaGlobe, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { RiMailFill, RiPhoneFill } from 'react-icons/ri';
import { Profile } from '../../interfaces/profile';
import {
  SanitizedGithub,
  SanitizedSocial,
} from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import BarcelonaImage from '../../assets/barcelona.jpg';
import ResumePdfFile from '../../assets/Photinakis_Andrew_Resume_SWE.pdf';

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
  color?: string; // New color prop
}> = ({ icon, title, value, link, skeleton = false, color }) => {
  return (
    <div className="flex py-2 px-10 items-center">
      <div className="flex-grow font-medium gap-2 flex items-center my-1 text-sm sm:text-base md:text-md">
        <span style={{ color }}>{icon}</span> {title}
      </div>
      <div
        className={`${
          skeleton ? 'flex-grow' : ''
        } text-sm sm:text-base md:text-md font-normal text-right mr-2 ml-3 ${link ? 'truncate' : ''}`}
        style={{
          wordBreak: 'break-word',
          color: 'black',
        }}
      >
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex py-2 px-1 items-center text-sm sm:text-base md:text-md"
        >
          {value}
        </a>
      </div>
    </div>
  );
};

const colorMap: Record<string, string> = {
  github: '#333', // GitHub dark color
  linkedin: '#0077b5', // LinkedIn blue
  dev: '#34B25F', // Dev dark color
  stackoverflow: '#f48024', // Stack Overflow orange
  phone: '#0078D4', // Phone dark color
  email: '#d44638', // Email color
};

/**
 * Renders the details card component.
 *
 * @param {Object} profile - The profile object.
 * @param {boolean} loading - Indicates whether the data is loading.
 * @param {Object} social - The social object.
 * @param {Object} github - The GitHub object.
 * @return {JSX.Element} The details card component.
 */
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
          color="gray" // Example color for skeleton
        />,
      );
    }

    return array;
  };

  return (
    <div
      className="bg-black card flex compact italic w-[95vw] mx-auto shadow shadow-[0_4px_8px_rgba(0,_0,_0,_0.5),_0_-4px_8px_rgba(0,_0,_0,_0.5)] rounded-2xl overflow-hidden h-auto"
      id={id}
    >
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Text Content */}
        <div className="flex-1 card-body flex flex-col py-8 px-8 relative z-10">
          <div className="text-base-content text-opacity-100 text-white flex flex-col py-8 px-8 relative z-10 items-center justify-center">
            {loading || !profile ? (
              renderSkeleton()
            ) : (
              <>
                <h5 className="card-title text-white text-lg md:text-xl text-center">
                  <span className="text-base-content opacity-100 text-white border-t-2 border-b-2 border-blue-500 block text-center">
                    Contacts
                  </span>
                </h5>
                <div className="relative mx-4 text-white flex flex-col text-sm sm:text-base md:text-md w-full items-center">
                  {profile.location && (
                    <ListItem
                      icon={<MdLocationOn />}
                      title="Based in:"
                      value={profile.location}
                      color="#E23237"
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
                      value={social.website
                        .replace('https://', '')
                        .replace('http://', '')}
                      link={
                        !social.website.startsWith('http')
                          ? `http://${social.website}`
                          : social.website
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
                  {ResumePdfFile &&
                    (loading ? (
                      <div className="mt-6">
                        {skeleton({ widthCls: 'w-40', heightCls: 'h-8' })}
                      </div>
                    ) : (
                      <>
                        <a
                          href={ResumePdfFile}
                          target="_blank"
                          className="btn btn-outline btn-sm text-xs mt-6 opacity-100 rounded-2xl border-black text-white hover:border-black-500 hover:text-white-500 transition-colors duration-300"
                          download
                          rel="noreferrer"
                        >
                          Download Resume (.pdf)
                        </a>
                        {/* <a
                          href={ResumeDocxFile}
                          target="_blank"
                          className="btn btn-outline btn-sm text-xs mt-6 opacity-100 rounded-2xl border-black text-white hover:border-black-500 hover:text-white-500 transition-colors duration-300"
                          download
                          rel="noreferrer"
                        >
                          Download Resume (.docx)
                        </a> */}
                      </>
                    ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div
          className="bg-cover bg-center md:w-1/2 rounded-r-2xl hidden md:block"
          style={{
            backgroundImage: `url(${BarcelonaImage})`,
            backgroundPosition: 'center 40%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: 1.0,
          }}
        >
          <div className="absolute top-10 right-10 flex items-center space-x-2 text-white">
            <MdLocationOn size={24} color="red" />
            <span>Barcelona, Spain</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
