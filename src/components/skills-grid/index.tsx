import { skeleton } from '../../utils';
import { SanitizedConfig } from '../../interfaces/sanitized-config';
import SkillCard from '../skill-card';

// Define a union type for valid skill keys
type SkillName =
  | 'Python'
  | 'Java'
  | 'C#'
  | 'C++'
  | 'C'
  | 'TypeScript'
  | 'JavaScript'
  | 'XML'
  | 'SQL'
  | 'Bash Scripting'
  | 'Java (Spring Boot)'
  | 'Boost C++ Libraries'
  | 'Selenium'
  | 'PyTest'
  | 'JUnit'
  | 'Angular'
  | 'React'
  | 'Swagger'
  | 'Azure Data Factory'
  | 'Power Automate'
  | 'Azure Functions'
  | 'REST APIs'
  | 'SOAP APIs'
  | 'Git'
  | 'DLL Interfaces'
  | 'Wireshark'
  | 'Postman'
  | 'Valgrind'
  | 'GDB'
  | 'MongoDB'
  | 'OOP'
  | 'API Dev & Integration'
  | 'Data Processing & ETL'
  | 'Automated Testing'
  | 'Software Architecture & Design Patterns'
  | 'Parallel & Distributed Systems'
  | 'Data Mining'
  | 'Software Engineering Principles'
  | 'Web Scraping';

type CardSection = {
  name: string;
  id: string;
  path: string;
  dropdown?: CardSection[];
};

const SkillsGrid = ({
  loading,
  sanitizedConfig,
  id,
  dropdown,
}: {
  loading: boolean;
  sanitizedConfig: SanitizedConfig | Record<string, never>;
  id: string;
  dropdown: CardSection[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < array.length; index++) {
      array.push(
        <div
          className="text-black shadow-2xl card compact bg-base-100"
          key={index}
        >
          <div className="w-full h-full p-8">
            <div className="flex flex-col items-center">
              <div className="w-full">
                <div className="px-4 text-black">
                  <div className="w-full text-center text-black">
                    <h2 className="mb-2">
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto',
                      })}
                    </h2>
                    <div>
                      {skeleton({
                        widthCls: 'w-20',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                    <div>
                      {skeleton({
                        widthCls: 'w-20',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                    <div>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                    <div>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                    <div>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  return (
    <div
      className="bg-white card flex italic w-[95vw] mx-auto shadow-[0_4px_8px_rgba(0,_0,_0,_0.5),_0_-4px_8px_rgba(0,_0,_0,_0.5)] items-center justify-between flex-col gap-6 rounded-2xl overflow-hidden h-auto col-span-1 lg:col-span-2 text-black"
      id={id}
    >
      <div className="w-full shadow card compact bg-opacity-40">
        <div className="items-center text-black card-body">
          <div className="flex items-center justify-between mx-3 mb-2 text-black">
            <h5 className="text-lg text-center text-black card-title md:text-xl">
              <span className="block text-black border-t-2 border-b-2 border-blue-500 opacity-100 text-base-content">
                Skills
              </span>
            </h5>
          </div>
          {/* Grid layout with responsive columns */}
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            {loading ? (
              renderSkeleton()
            ) : (
              <>
                {sanitizedConfig.languages.length !== 0 && (
                  <SkillCard
                    loading={loading}
                    skills={sanitizedConfig.languages as Array<SkillName>}
                    // levels={sanitizedConfig.languagesLevel}
                    name="Programming Languages"
                    id={
                      dropdown.find(
                        (section) => section.name === 'Programming Languages',
                      )?.id ?? 'programming-languages'
                    }
                  />
                )}
                {sanitizedConfig.frameworksAndLibraries.length !== 0 && (
                  <SkillCard
                    loading={loading}
                    skills={
                      sanitizedConfig.frameworksAndLibraries as Array<SkillName>
                    }
                    // levels={sanitizedConfig.frameworksAndLibrariesLevel}
                    name="Frameworks & Libraries"
                    id={
                      dropdown.find(
                        (section) => section.name === 'Frameworks & Libraries',
                      )?.id ?? 'frameworks-libraries'
                    }
                  />
                )}
                {sanitizedConfig.toolsAndTechnologies.length !== 0 && (
                  <SkillCard
                    loading={loading}
                    skills={
                      sanitizedConfig.toolsAndTechnologies as Array<SkillName>
                    }
                    // levels={sanitizedConfig.toolsAndTechnologiesLevel}
                    name="Tools & Technologies"
                    id={
                      dropdown.find(
                        (section) => section.name === 'Tools & Technologies',
                      )?.id ?? 'tools-technologies'
                    }
                  />
                )}
                {sanitizedConfig.conceptsAndSkills.length !== 0 && (
                  <SkillCard
                    loading={loading}
                    skills={
                      sanitizedConfig.conceptsAndSkills as Array<SkillName>
                    }
                    // levels={sanitizedConfig.conceptsAndSkillsLevel}
                    name="Concepts & Skills"
                    id={
                      dropdown.find(
                        (section) => section.name === 'Concepts & Skills',
                      )?.id ?? 'concepts-skills'
                    }
                  />
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
