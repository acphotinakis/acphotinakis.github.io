import { useEffect, useState } from 'react';
import { Profile } from '../../interfaces/profile';
import { skeleton } from '../../utils';
import AcropolisImage from '../../assets/acropolis.jpg';
// import ResumeFile from '../../assets/Resume.pdf';

interface AvatarCardProps {
  profile: Profile | null;
  loading: boolean;
  // avatarRing: boolean;
  resumeFileUrl?: string;
}

const AvatarCard: React.FC<AvatarCardProps> = ({
  profile,
  loading,
  // avatarRing,
}): JSX.Element => {
  const [animationState, setAnimationState] = useState<'typing' | 'deleting'>(
    'typing',
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState((prev) => (prev === 'typing' ? 'deleting' : 'typing'));
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="avatar-card"
      className="card shadow-2xl compact italic w-full max-w-full shadow-2xl flex min-h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${AcropolisImage})`,
        backgroundPosition: 'center 40%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 1.0,
        height: '1000px',
      }}
    >
      <style>
        {`
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
  
        @keyframes deleting {
          from { width: 100%; }
          to { width: 0; }
        }
  
        .typing-effect {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 0.15em solid white; /* Cursor effect */
          animation: typing 3s steps(30, end) infinite,
                     deleting 3s steps(30, end) infinite;
        }
      `}
      </style>
      <div className="grid grid-cols-1 gap-4 py-8 px-8 relative z-10 text-center mx-auto w-full opacity-90 mt-10">
        <div className="text-base-content opacity-100 text-white mt-10">
          <h5 className="font-bold text-2xl mt-10">
            {loading || !profile ? (
              skeleton({ widthCls: 'w-48', heightCls: 'h-8' })
            ) : (
              <span
                className={`text-base-content opacity-100 text-white typing-effect ${
                  animationState === 'typing' ? 'typing' : 'deleting'
                }`}
                style={{ fontSize: '60px', lineHeight: '1.2' }}
              >
                {profile.name}
              </span>
            )}
          </h5>
          <div
            className="mt-3 font-bold"
            style={{ width: '50%', margin: '0 auto' }}
          >
            {loading || !profile ? (
              skeleton({ widthCls: 'w-48', heightCls: 'h-5' })
            ) : (
              <span style={{ fontStyle: 'italic', fontSize: '20px' }}>
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
