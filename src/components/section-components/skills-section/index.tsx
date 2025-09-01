import { skeleton } from '../../../utils';
import { COLOR_SCHEMA } from '@/interfaces/colorSchema';
import SkillsCard from './SkillsCard';
import UPDATED_CONFIG from '@/updated-data-interfaces/config_data';
import { SKILL } from '@/interfaces/skills';

type CardSection = {
  name: string;
  id: string;
  path: string;
  dropdown?: CardSection[];
};

const SkillsGrid = ({
  loading,
  id,
  dropdown,
}: {
  loading: boolean;
  id: string;
  dropdown: CardSection[];
}) => {
  const renderSkeleton = () =>
    Array.from({ length: 6 }, (_, index) => (
      <div
        key={index}
        className="text-white shadow-2xl card compact bg-base-100"
      >
        <div className="flex flex-col items-center w-full h-full p-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-full mb-2 text-center">
              {skeleton({
                widthCls: i === 0 ? 'w-32' : 'w-full',
                heightCls: i === 0 ? 'h-8' : 'h-4',
                className: 'mx-auto mb-2',
              })}
            </div>
          ))}
        </div>
      </div>
    ));

  const renderSection = (skills: SKILL[], sectionName: string) => (
    <SkillsCard
      loading={loading}
      skills={skills}
      name={sectionName}
      id={
        dropdown.find((section) => section.name === sectionName)?.id ??
        sectionName.toLowerCase().replace(/ /g, '-')
      }
    />
  );

  return (
    <div
      className="bg-[#2C2C25] card flex w-full max-w-5xl mx-auto shadow-lg shadow-black/50 rounded-2xl overflow-hidden h-auto"
      id={id}
      style={{
        backgroundColor: COLOR_SCHEMA.cardBg,
        boxShadow: `0 4px 15px rgba(0,0,0,0.5)`,
      }}
    >
      <div className="w-full shadow card compact bg-opacity-40">
        <div className="items-center text-white card-body">
          <div className="flex items-center justify-between mx-3 mb-2 text-white">
            <h5 className="text-lg text-center text-[#F5F5F5] card-title md:text-xl mb-6">
              <span className="block text-center border-t-2 border-b-2 border-[#E53935] py-1">
                Skills
              </span>
            </h5>
          </div>

          {/* Grid layout with responsive columns */}
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-1">
            {loading ? (
              renderSkeleton()
            ) : (
              <>
                {UPDATED_CONFIG.skillsData.updated_languages?.length > 0 &&
                  renderSection(
                    UPDATED_CONFIG.skillsData.updated_languages as SKILL[],
                    'Programming Languages',
                  )}

                {UPDATED_CONFIG.skillsData.frameworksAndLibraries?.length > 0 &&
                  renderSection(
                    UPDATED_CONFIG.skillsData.frameworksAndLibraries as SKILL[],
                    'Frameworks & Libraries',
                  )}

                {UPDATED_CONFIG.skillsData.toolsAndTechnologies?.length > 0 &&
                  renderSection(
                    UPDATED_CONFIG.skillsData.toolsAndTechnologies as SKILL[],
                    'Tools & Technologies',
                  )}

                {UPDATED_CONFIG.skillsData.conceptsAndSkills?.length > 0 &&
                  renderSection(
                    UPDATED_CONFIG.skillsData.conceptsAndSkills as SKILL[],
                    'Concepts & Skills',
                  )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;
