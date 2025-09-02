import { skeleton } from '../../../utils';
import SkillsCard from './SkillsCard';
import {
  CompInputSkillsSectionProps,
  Skill,
} from '@/data/page_data/websiteInterfaces';
import { COLOR_SCHEMA } from '@/interfaces/colorSchema';

const SkillsSection = ({
  id,
  loading,
  programming_languages,
  frameworksAndLibraries,
  toolsAndTechnologies,
  conceptsAndSkills,
}: CompInputSkillsSectionProps) => {
  const renderSkeletonCard = (key: number) => (
    <div key={key} className="text-white shadow-2xl card compact bg-base-100">
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
  );

  const renderSection = (
    skills: Skill[],
    sectionName: string,
    sectionId: string,
  ) => (
    <SkillsCard
      id={sectionId}
      loading={loading}
      name={sectionName}
      skills={skills}
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
            <h2 className="text-lg text-center text-[#F5F5F5] card-title md:text-xl mb-6">
              <span className="block text-center border-t-2 border-b-2 border-[#E53935] py-1">
                Skills
              </span>
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2">
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => renderSkeletonCard(i))
            ) : (
              <>
                {programming_languages.length > 0 &&
                  renderSection(
                    programming_languages,
                    'Programming Languages',
                    'programming-languages',
                  )}
                {frameworksAndLibraries.length > 0 &&
                  renderSection(
                    frameworksAndLibraries,
                    'Frameworks & Libraries',
                    'frameworks-libraries',
                  )}
                {toolsAndTechnologies.length > 0 &&
                  renderSection(
                    toolsAndTechnologies,
                    'Tools & Technologies',
                    'tools-technologies',
                  )}
                {conceptsAndSkills.length > 0 &&
                  renderSection(
                    conceptsAndSkills,
                    'Concepts & Skills',
                    'concepts-skills',
                  )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
