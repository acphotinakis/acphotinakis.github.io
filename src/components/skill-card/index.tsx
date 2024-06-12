import { skeleton } from '../../utils';

const SkillCard = ({
  loading,
  skills,
  name,
}: {
  loading: boolean;
  skills: string[];
  name: string;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
        </div>,
      );
    }

    return array;
  };

  return (
    <div className="border-white border-1 font-mono">
      <div className="card shadow-2xl compact text-white">
        <div className="card-body">
          <div className="mx-3">
            <h5 className="card-title text-white">
              {loading ? (
                renderSkeleton() // Adjusted to call renderSkeleton function
              ) : (
                <span className="text-base-content opacity-100 text-white">
                  {name}
                </span>
              )}
            </h5>
          </div>
          <div className="p-3 flow-root">
            <div className="-m-1 flex flex-wrap justify-center">
              {loading
                ? renderSkeleton() // Adjusted to call renderSkeleton function
                : skills.map((skill, index) => (
                    <div
                      key={index}
                      className="m-1 text-white text-xs inline-flex items-center font-mono leading-sm px-3 py-1 badge-primary rounded-full bg-inherit"
                    >
                      {skill}
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
