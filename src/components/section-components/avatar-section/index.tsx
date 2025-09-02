import { BoxReveal } from '../../ui/box-reveal';
import { COLOR_SCHEMA } from '@/interfaces/colorSchema';

interface AvatarCardProps {
  loading?: boolean;
  resumeFileUrl?: string;
  id: string;
}

const AvatarCard: React.FC<AvatarCardProps> = ({ id }) => {
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
      {/* Heading */}
      <div className="flex flex-col items-center justify-center w-full mb-6 text-center">
        <h5 className="text-lg text-center text-[#F5F5F5] card-title md:text-xl">
          <span className="block text-center border-t-2 border-b-2 border-[#E53935] py-1">
            Home
          </span>
        </h5>
      </div>

      {/* Description Section */}
      <div className="flex items-center justify-center w-full">
        <BoxReveal boxColor={COLOR_SCHEMA.accentRed} duration={0.9}>
          <div className="mt-4 space-y-5 text-sm leading-relaxed text-left sm:text-base">
            <p style={{ color: COLOR_SCHEMA.textSecondary }}>
              I’m a 5th-year Computer Science student at RIT with a minor in
              Finance. I’m passionate about using AI, machine learning,
              algorithmic trading, and cloud computing to develop innovative
              solutions that bridge technology and finance. My focus is on
              building quant strategies and tools that combine analytical rigor
              with practical applications.
            </p>
            <p style={{ color: COLOR_SCHEMA.textSecondary }}>
              Beyond academics, I’m fueled by classic rock—bands like AC/DC,
              Journey, Def Leppard, Poison, Mötley Crüe, Scorpions, and Guns N’
              Roses keep me energized and inspired.
            </p>
            <p style={{ color: COLOR_SCHEMA.textSecondary }}>
              I tackle challenges with persistence, curiosity, and creativity. I
              enjoy experimenting, exploring new ideas, and finding practical
              solutions to complex problems.
            </p>
            <p style={{ color: COLOR_SCHEMA.textSecondary }}>
              This year, I had the incredible opportunity to study abroad across
              Europe and the Mediterranean, visiting Hungary, Italy, Slovenia,
              Greece, Croatia, and Malta—including Budapest, Florence, Venice,
              Ljubljana, Athens, Paros, Zagreb, Split, and Mdina. These
              experiences broadened my perspective, strengthened my
              adaptability, and reinforced my passion for learning in diverse
              environments.
            </p>
          </div>
        </BoxReveal>
      </div>
    </section>
  );
};

export default AvatarCard;
