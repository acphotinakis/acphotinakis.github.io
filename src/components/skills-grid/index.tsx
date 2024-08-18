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
          className="card shadow-2xl compact bg-base-100 text-black"
          key={index}
        >
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="px-4 text-black">
                  <div className="text-center w-full text-black">
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
      <div className="card compact shadow bg-opacity-40 w-full">
        <div className="card-body items-center text-black">
          <div className="mx-3 flex items-center justify-between mb-2 text-black">
            <h5 className="card-title text-black text-lg md:text-xl text-center">
              <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500 block">
                Skills
              </span>
            </h5>
          </div>
          {/* Grid layout with responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
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
