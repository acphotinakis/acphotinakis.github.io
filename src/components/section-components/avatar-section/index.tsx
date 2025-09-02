import { Profile } from '../../../interfaces/profile';
import { BoxReveal } from '../../ui/box-reveal';
import { COLOR_SCHEMA } from '@/interfaces/colorSchema';

interface AvatarCardProps {
  profile: Profile | null;
  loading?: boolean;
  resumeFileUrl?: string;
  id: string;
}

const AvatarCard: React.FC<AvatarCardProps> = ({ profile, id }) => {
  return (
    <section
      id={id}
      className="flex flex-col items-center justify-center w-full max-w-5xl p-8 mx-auto mt-11 rounded-2xl scroll-mt-20"
      style={{
        backgroundColor: COLOR_SCHEMA.black,
        boxShadow: `
          -4px 0 6px -2px ${COLOR_SCHEMA.border},
           4px 0 6px -2px ${COLOR_SCHEMA.border},
           0 4px 6px -2px ${COLOR_SCHEMA.border}
        `,
      }}
    >
      {/* Description Section */}
      <div className="flex items-center justify-center">
        <BoxReveal boxColor={COLOR_SCHEMA.accentRed} duration={0.9}>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-left sm:text-base">
            <p style={{ color: COLOR_SCHEMA.textSecondary }}>
              I’m a Computer Science student with a minor in Finance. I’m
              passionate about leveraging AI, machine learning, algorithmic
              trading, and cloud computing to develop quant strategies and
              trading solutions that bridge technology and finance.
            </p>
            <p style={{ color: COLOR_SCHEMA.textSecondary }}>
              Outside of academics, I enjoy classic rock—bands like AC/DC,
              Journey, Def Leppard, Poison, Mötley Crüe, Scorpions, and Guns N’
              Roses keep me motivated and relaxed.
            </p>
            <p style={{ color: COLOR_SCHEMA.textSecondary }}>
              When facing challenges, I rely on persistence, curiosity, and
              creativity. I like to approach problems with an open mind,
              experiment, and find solutions that work.
            </p>
            <p style={{ color: COLOR_SCHEMA.textSecondary }}>
              This year, I had the opportunity to study abroad across Europe and
              the Mediterranean. I explored Hungary, Italy, Slovenia, Greece,
              Croatia, and Malta—including Budapest, Florence, Venice,
              Ljubljana, Athens, Paros, Zagreb, Split, and Mdina. Traveling has
              broadened my perspective and taught me adaptability in new
              environments.
            </p>
          </div>
        </BoxReveal>
      </div>
    </section>
  );
};

export default AvatarCard;
