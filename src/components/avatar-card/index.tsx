import { Profile } from '../../interfaces/profile';
import { BoxReveal } from '../ui/box-reveal';
import { Button } from '../ui/button';

interface AvatarCardProps {
  profile: Profile | null;
  loading: boolean;
  resumeFileUrl?: string;
  id: string;
}

const AvatarCard: React.FC<AvatarCardProps> = ({
  profile,
  id,
}): JSX.Element => {
  return (
    <div
      id={id}
      className="mt-11 mx-auto card flex flex-col items-center justify-center max-w-screen-md w-[95vw] p-8 bg-black rounded-2xl shadow-lg text-center"
    >
      <BoxReveal boxColor={'#5046e6'} duration={0.8}>
        <p className="text-[3.5rem] font-semibold text-white">
          <span className="text-[#5046e6]">{profile?.name}</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={'#5046e6'} duration={0.8}>
        <div className="mt-6 leading-relaxed text-white">
          <p>
            → 4th year Computer Science Student at Rochester Institute of
            Technology, studying
            <span className="font-semibold text-[#5046e6]">
              {' '}
              Computer Science
            </span>{' '}
            &<span className="font-semibold text-[#5046e6]"> Finance</span>
          </p>
        </div>
      </BoxReveal>
    </div>
  );
};

export default AvatarCard;
