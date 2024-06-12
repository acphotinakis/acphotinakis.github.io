import { skeleton } from '../../utils';
import { SanitizedConfig } from '../../interfaces/sanitized-config';
import SkillCard from '../skill-card';

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
        <div className="card shadow-2xl compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="px-4">
                  <div className="text-center w-full">
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
    <div className="col-span-1 lg:col-span-2">
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <div className="card compact shadow bg-opacity-40">
            <div className="card-body">
              <div className="mx-3 flex items-center justify-between mb-2">
                <h5 className="card-title">
                  {loading ? (
                    skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                  ) : (
                    <span className="text-base-content opacity-70"></span>
                  )}
                </h5>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {loading ? (
                  renderSkeleton()
                ) : (
                  <>
                    {sanitizedConfig.languages.length !== 0 && (
                      <SkillCard
                        loading={loading}
                        skills={sanitizedConfig.languages}
                        name="Programming Languages"
                      />
                    )}
                    {sanitizedConfig.frameworksAndLibraries.length !== 0 && (
                      <SkillCard
                        loading={loading}
                        skills={sanitizedConfig.frameworksAndLibraries}
                        name="Frameworks & Libraries"
                      />
                    )}
                    {sanitizedConfig.toolsAndTechnologies.length !== 0 && (
                      <SkillCard
                        loading={loading}
                        skills={sanitizedConfig.toolsAndTechnologies}
                        name="Tools & Technologies"
                      />
                    )}
                    {sanitizedConfig.conceptsAndSkills.length !== 0 && (
                      <SkillCard
                        loading={loading}
                        skills={sanitizedConfig.conceptsAndSkills}
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
    </div>
  );
};

export default SkillsGrid;
