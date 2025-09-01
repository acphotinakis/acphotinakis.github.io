import { Profile } from '../../../interfaces/profile';
import { BoxReveal } from '../../ui/box-reveal';
import { COLOR_SCHEMA } from '@/interfaces/colorSchema';

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
      className="flex flex-col items-center justify-center w-full max-w-5xl p-8 mx-auto text-center shadow-lg mt-11 rounded-2xl shadow-black/50 scroll-mt-20"
      style={{ backgroundColor: COLOR_SCHEMA.cardBackground }}
    >
      <div className="flex grid w-full h-full grid-cols-1 gap-6 md:grid-cols-2">
        {/* Name Section */}
        <div className="flex items-center justify-center">
          <BoxReveal boxColor={COLOR_SCHEMA.accentRed} duration={0.9}>
            <p
              className="text-[3.5rem] font-semibold"
              style={{ color: COLOR_SCHEMA.textPrimary }}
            >
              <span style={{ color: COLOR_SCHEMA.accentRed }}>
                {profile?.name}
              </span>
            </p>
          </BoxReveal>
        </div>

        {/* Description Section */}
        <div className="flex items-center justify-center">
          <BoxReveal boxColor={COLOR_SCHEMA.accentRed} duration={0.9}>
            <div
              className="mt-6 leading-relaxed"
              style={{ color: COLOR_SCHEMA.textPrimary }}
            >
              <p className="mb-2">
                → 4th year Computer Science Student at Rochester Institute of
                Technology, studying
                <span
                  className="font-semibold"
                  style={{ color: COLOR_SCHEMA.accentRed }}
                >
                  {' '}
                  Computer Science
                </span>{' '}
                &
                <span
                  className="font-semibold"
                  style={{ color: COLOR_SCHEMA.accentRed }}
                >
                  {' '}
                  Finance
                </span>
              </p>
              <p>
                → Strong interests in
                <span
                  className="font-semibold"
                  style={{ color: COLOR_SCHEMA.accentRed }}
                >
                  {' '}
                  Software Engineering
                </span>
                ,
                <span
                  className="font-semibold"
                  style={{ color: COLOR_SCHEMA.accentRed }}
                >
                  {' '}
                  Data Science
                </span>
                ,
                <span
                  className="font-semibold"
                  style={{ color: COLOR_SCHEMA.accentRed }}
                >
                  {' '}
                  Cloud Computing
                </span>
                , &
                <span
                  className="font-semibold"
                  style={{ color: COLOR_SCHEMA.accentRed }}
                >
                  {' '}
                  High-Frequency/Algorithmic Trading
                </span>
                .
              </p>
            </div>
          </BoxReveal>
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;
