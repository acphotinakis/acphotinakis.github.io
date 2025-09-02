import { skeleton } from '../../../utils';
import { COLOR_SCHEMA } from '@/interfaces/colorSchema';
import { SKILL_ICONS, SKILL } from '@/interfaces/skills';

const SkillListItem = ({ skillObj }: { skillObj: SKILL }) => {
  const { name, level, bullets, experience, proficiency, projects } = skillObj;
  const icon = SKILL_ICONS[name]?.icon ?? <></>;

  return (
    <div
      className="flex flex-col items-center w-full p-4 mb-4 shadow-md rounded-xl"
      style={{
        backgroundColor: COLOR_SCHEMA.cardBg,
        boxShadow: COLOR_SCHEMA.shadowDark,
      }}
    >
      {/* Icon */}
      <div className="mb-2 text-2xl">{icon}</div>

      {/* Name */}
      <span
        className="mb-2 text-lg font-bold text-center"
        style={{ color: COLOR_SCHEMA.textPrimary }}
      >
        {name}
      </span>

      {/* Experience & Proficiency */}
      <div
        className="w-full p-2 mb-2 text-center rounded-md"
        style={{ backgroundColor: COLOR_SCHEMA.disabledBg }}
      >
        <span className="text-xs font-medium text-gray-200">
          Experience: {experience} yrs
        </span>
        <br />
        <span className="text-xs font-medium text-gray-200">
          Proficiency: {proficiency}
        </span>
      </div>

      {/* Level bar */}
      <div className="w-full mb-2">
        <span className="text-xs font-semibold text-gray-300">Level</span>
        <div
          className="w-full h-2 mt-1 overflow-hidden rounded-full"
          style={{ backgroundColor: COLOR_SCHEMA.cardBg }}
        >
          <div
            className="h-full transition-all duration-500 rounded-full"
            style={{
              width: `${level}%`,
              background: `linear-gradient(90deg, ${COLOR_SCHEMA.accentRed} 0%, #FFFFFF 100%)`,
            }}
          />
        </div>
      </div>

      {/* Bullets */}
      {bullets.length > 0 && (
        <div className="w-full mb-2">
          <span className="text-xs font-semibold text-gray-300">Details</span>
          <ul
            className="mt-1 space-y-1 text-xs list-disc list-inside"
            style={{ color: COLOR_SCHEMA.textSecondary }}
          >
            {bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="w-full">
          <span className="text-xs font-semibold text-gray-300">Projects</span>
          <ul
            className="mt-1 space-y-1 text-xs list-disc list-inside"
            style={{ color: COLOR_SCHEMA.textSecondary }}
          >
            {projects.map((project, i) => (
              <li key={i} className="italic">
                {project}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

interface SkillsCardProps {
  loading: boolean;
  skills: SKILL[];
  name: string;
  id: string;
}

const SkillsCard = ({ loading, skills, name, id }: SkillsCardProps) => {
  const renderSkeleton = () =>
    Array.from({ length: 12 }, (_, i) => (
      <div key={i} className="mb-2">
        {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
      </div>
    ));

  return (
    <div
      id={id}
      className="relative z-10 w-full max-w-5xl mx-auto overflow-hidden shadow-2xl rounded-2xl card compact"
      style={{
        backgroundColor: COLOR_SCHEMA.cardBg,
      }}
    >
      <div className="flex flex-col items-center w-full px-6 py-6 md:px-8 md:py-8">
        <h1
          className="py-1 mx-auto mb-6 text-sm font-bold text-center border-t-2 border-b-2 md:text-2xl w-fit"
          style={{
            borderColor: COLOR_SCHEMA.accentRed,
            color: COLOR_SCHEMA.textPrimary,
          }}
        >
          {loading ? renderSkeleton() : name}
        </h1>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? renderSkeleton()
            : skills.map((skillObj) => (
                <SkillListItem key={skillObj.name} skillObj={skillObj} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
