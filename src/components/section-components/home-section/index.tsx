import { CompInputHomeSectionProps } from '@/data/page_data/websiteInterfaces';
import { BoxReveal } from '../../ui/box-reveal';
import { COLOR_SCHEMA } from '@/interfaces/colorSchema';

const HomeSection: React.FC<CompInputHomeSectionProps> = ({
  id,
  loading,
  homeSection,
}: CompInputHomeSectionProps) => {
  const { paragraphs } = homeSection;

  const renderSkeleton = () => (
    <div className="mt-4 space-y-5 text-sm leading-relaxed text-left sm:text-base">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="w-full h-4 bg-gray-700 rounded animate-pulse"
          style={{ backgroundColor: COLOR_SCHEMA.textSecondary }}
        ></div>
      ))}
    </div>
  );

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
          {loading ? (
            renderSkeleton()
          ) : (
            <div className="mt-4 space-y-5 text-sm leading-relaxed text-left sm:text-base">
              {paragraphs.map((para: string, index: number) => (
                <p key={index} style={{ color: COLOR_SCHEMA.textSecondary }}>
                  {para}
                </p>
              ))}
            </div>
          )}
        </BoxReveal>
      </div>
    </section>
  );
};

export default HomeSection;
