import { Profile } from '../../interfaces/profile';
import { skeleton } from '../../utils';
import AcropolisImage from '../../assets/acropolis.jpg';
import { MdLocationOn } from 'react-icons/md';
import { useEffect, useState } from 'react';

interface AvatarCardProps {
  profile: Profile | null;
  loading: boolean;
  resumeFileUrl?: string;
  id: string;
}

const AvatarCard: React.FC<AvatarCardProps> = ({
  profile,
  loading,
  id,
}): JSX.Element => {
  const [backgroundHeight, setBackgroundHeight] = useState<string>('1000px');
  const [backgroundSize, setBackgroundSize] = useState<string>('cover');

  // Function to handle responsive background image
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setBackgroundHeight('600px'); // Adjust height for smaller screens
      setBackgroundSize('contain'); // Use 'contain' for smaller screens to ensure the image fits
    } else {
      setBackgroundHeight('1000px'); // Default height for larger screens
      setBackgroundSize('cover'); // Use 'cover' for larger screens
    }
  };

  // Add event listener for window resize
  useEffect(() => {
    handleResize(); // Set initial values
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      id={id}
      className="flex max-w-full min-h-screen italic bg-gray-100 shadow-2xl card compact w-9/10"
      style={{
        backgroundImage: `url(${AcropolisImage})`,
        backgroundPosition: 'center 40%',
        backgroundSize: backgroundSize,
        backgroundRepeat: 'no-repeat',
        opacity: 1.0,
        height: backgroundHeight,
      }}
    >
      <div className="relative z-10 grid w-full grid-cols-1 gap-4 px-8 py-8 mx-auto mt-10 text-center opacity-90">
        <div className="mt-10 text-white opacity-100 text-base-content">
          <div className="absolute flex items-center space-x-2 text-white top-10 right-10">
            <MdLocationOn size={24} color="red" />
            <span>Athens, Greece</span>
          </div>
          <h5 className="mt-10 text-2xl font-bold">
            {loading || !profile ? (
              skeleton({ widthCls: 'w-48', heightCls: 'h-8' })
            ) : (
              <span
                className={`text-base-content opacity-100 text-white typing-effect`}
                style={{ fontSize: '60px', lineHeight: '1.2' }}
              >
                {profile.name}
              </span>
            )}
          </h5>
          <div
            className="mt-3 font-bold max-w-[90%] sm:max-w-[50%] mx-auto px-4 break-words"
            style={{
              maxWidth: '50%',
            }}
          >
            {loading || !profile ? (
              skeleton({ widthCls: 'w-48', heightCls: 'h-5' })
            ) : (
              <span
                style={{
                  fontStyle: 'italic',
                  fontSize: '20px',
                  textDecoration: 'underline',
                  textDecorationColor: 'dodgerblue',
                  textDecorationThickness: '2px',
                  textUnderlineOffset: '4px',
                  display: 'inline-block',
                  lineHeight: '1.6',
                }}
              >
                "Imagination is more important than knowledge. For knowledge is
                limited, whereas imagination embraces the entire world,
                stimulating progress, giving birth to evolution."
              </span>
            )}
          </div>

          <div className="mt-3 font-bold">
            {loading || !profile ? (
              skeleton({ widthCls: 'w-48', heightCls: 'h-5' })
            ) : (
              <span style={{ fontStyle: 'italic', fontSize: '20px' }}>
                - Albert Einstein
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;
