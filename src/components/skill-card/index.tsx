import { skeleton } from '../../utils';
import ProgressBar from '@ramonak/react-progress-bar';

const SkillCard = ({
  loading,
  skills,
  levels,
  name,
}: {
  loading: boolean;
  skills: Array<string>;
  levels: Array<number>;
  name: string;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index} className="mb-2">
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
        </div>,
      );
    }
    return array;
  };

  return (
    <div className="card shadow-2xl compact italic w-full rounded-2xl relative z-10">
      <div className="card-body">
        <div className="mx-3 p-3">
          <h5 className="card-title text-black text-lg md:text-xl">
            {loading ? (
              renderSkeleton()
            ) : (
              <span className="text-base-content opacity-100 text-black">
                {name}
              </span>
            )}
          </h5>
        </div>
        <div className="card m-3">
          <div className="p-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
              {loading
                ? renderSkeleton()
                : skills.map((skill, index) => {
                    const level = levels[index];
                    return (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row items-start sm:items-center text-black text-xs font-mono leading-snug px-3 py-2 badge-primary bg-inherit"
                      >
                        <span className="block text-black text-md text-center flex-grow mb-2 sm:mb-0">
                          {skill}
                        </span>
                        <div className="w-full sm:w-48 mt-2 sm:mt-0 ml-2">
                          <ProgressBar
                            completed={level}
                            bgColor={'rgb(75, 0, 130)'}
                            height="13px"
                            width="100%"
                          />
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
