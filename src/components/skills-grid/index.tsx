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
  | 'Object-Oriented Programming (OOP)'
  | 'API Development & Integration'
  | 'Data Processing & ETL'
  | 'Automated Testing'
  | 'Software Architecture & Design Patterns'
  | 'Parallel & Distributed Systems'
  | 'Data Mining'
  | 'Software Engineering Principles'
  | 'Web Scraping';

const SkillsGrid = ({
  loading,
  sanitizedConfig,
}: {
  loading: boolean;
  sanitizedConfig: SanitizedConfig | Record<string, never>;
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
    <div className="col-span-1 lg:col-span-2 text-black" id="skills-grid">
      <div className="flex flex-col gap-6">
        <div className="card compact shadow bg-opacity-40">
          <div className="card-body text-black">
            <div className="mx-3 flex items-center justify-between mb-2 text-black">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-70"></span>
                )}
              </h5>
            </div>
            {/* Moved grid layout outside */}
            <div className="flex flex-col gap-6 text-black grid grid-cols-2 gap-4 w-full">
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
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;
