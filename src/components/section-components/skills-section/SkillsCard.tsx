import { skeleton } from '../../../utils';
import { COLOR_SCHEMA } from '@/interfaces/colorSchema';
import { SKILL_ICONS, SKILL } from '@/interfaces/skills';

const SkillListItem = ({ skillObj }: { skillObj: SKILL }) => {
  const { name, level, bullets, experience, proficiency, projects } = skillObj;
  const icon = SKILL_ICONS[name]?.icon ?? <></>;

  return (
    <div
      className="flex flex-col items-center w-full p-4 mb-4 rounded-xl transition-transform duration-300
             hover:scale-105 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(255,255,255,0.3)]"
      style={{ backgroundColor: COLOR_SCHEMA.cardBg }}
    >
      {/* Icon */}
      <div className="mb-2 text-3xl">{icon}</div>

      {/* Name */}
      <h3
        className="mb-2 font-bold text-center text-md"
        style={{ color: COLOR_SCHEMA.textPrimary }}
      >
        {name}
      </h3>

      {/* Experience & Proficiency */}
      <div className="w-full p-2 mb-3 text-center bg-black rounded-md">
        <span className="block text-xs font-medium text-gray-200">
          Experience: {experience} yrs
        </span>
        <span className="block text-xs font-medium text-gray-200">
          Proficiency: {proficiency}
        </span>
      </div>

      {/* Level Bar */}
      <div className="w-full mb-3">
        <span className="text-xs font-semibold text-gray-300">Level</span>
        <div className="w-full h-2 mt-1 overflow-hidden bg-gray-700 rounded-full">
          <div
            className="h-full transition-all duration-500 rounded-full"
            style={{
              width: `${level}%`,
              background: `linear-gradient(90deg, ${COLOR_SCHEMA.accentRed} 0%, #ffffff 100%)`,
            }}
          />
        </div>
      </div>

      {/* Bullets */}
      {bullets.length > 0 && (
        <div className="w-full mb-3">
          {/* <span className="text-xs font-semibold text-gray-300">Details</span> */}
          {/* <ul className="mt-1 space-y-1 text-xs text-gray-400 list-disc list-inside">
            {bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul> */}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="w-full">
          {/* <span className="text-xs font-semibold text-gray-300">Projects</span> */}
          {/* <ul className="mt-1 space-y-1 text-xs text-gray-400 list-disc list-inside">
            {projects.map((project, i) => (
              <li key={i} className="italic">
                {project}
              </li>
            ))}
          </ul> */}
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
    Array.from({ length: 6 }, (_, i) => (
      <div key={i}>
        {skeleton({
          widthCls: 'w-full',
          heightCls: 'h-24',
          className: 'rounded-lg m-1',
        })}
      </div>
    ));

  return (
    <div
      id={id}
      className="relative z-10 w-full max-w-5xl mx-auto overflow-hidden shadow-2xl rounded-2xl"
      style={{ backgroundColor: COLOR_SCHEMA.cardBg }}
    >
      <div className="flex flex-col items-center w-full px-6 py-6 md:px-8 md:py-8">
        <h1
          className="py-2 mb-6 font-bold text-center border-t-2 border-b-2 text-md w-fit"
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

// import { skeleton } from '../../../utils';
// import { COLOR_SCHEMA } from '@/interfaces/colorSchema';
// import { SKILL_ICONS, SKILL } from '@/interfaces/skills';

// const SkillListItem = ({ skillObj }: { skillObj: SKILL }) => {
//   const { name, level, bullets, experience, proficiency, projects } = skillObj;
//   const icon = SKILL_ICONS[name]?.icon ?? <></>;

//   return (
//     <div
//       className="flex flex-col items-center w-full p-4 mb-4 shadow-md rounded-xl"
//       style={{
//         backgroundColor: COLOR_SCHEMA.cardBg,
//         boxShadow: COLOR_SCHEMA.shadowDark,
//       }}
//     >
//       {/* Icon */}
//       <div className="mb-2 text-2xl">{icon}</div>

//       {/* Name */}
//       <span
//         className="mb-2 text-lg font-bold text-center"
//         style={{ color: COLOR_SCHEMA.textPrimary }}
//       >
//         {name}
//       </span>

//       {/* Experience & Proficiency */}
//       <div
//         className="w-full p-2 mb-2 text-center rounded-md"
//         style={{ backgroundColor: COLOR_SCHEMA.black }}
//       >
//         <span className="text-xs font-medium text-gray-200">
//           Experience: {experience} yrs
//         </span>
//         <br />
//         <span className="text-xs font-medium text-gray-200">
//           Proficiency: {proficiency}
//         </span>
//       </div>

//       {/* Level bar */}
//       <div className="w-full mb-2">
//         <span className="text-xs font-semibold text-gray-300">Level</span>
//         <div
//           className="w-full h-2 mt-1 overflow-hidden rounded-full"
//           style={{ backgroundColor: COLOR_SCHEMA.cardBg }}
//         >
//           <div
//             className="h-full transition-all duration-500 rounded-full"
//             style={{
//               width: `${level}%`,
//               background: `linear-gradient(90deg, ${COLOR_SCHEMA.accentRed} 0%, #FFFFFF 100%)`,
//             }}
//           />
//         </div>
//       </div>

//       {/* Bullets */}
//       {bullets.length > 0 && (
//         <div className="w-full mb-2">
//           <span className="text-xs font-semibold text-gray-300">Details</span>
//           <ul
//             className="mt-1 space-y-1 text-xs list-disc list-inside"
//             style={{ color: COLOR_SCHEMA.textSecondary }}
//           >
//             {bullets.map((bullet, i) => (
//               <li key={i}>{bullet}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Projects */}
//       {projects.length > 0 && (
//         <div className="w-full">
//           <span className="text-xs font-semibold text-gray-300">Projects</span>
//           <ul
//             className="mt-1 space-y-1 text-xs list-disc list-inside"
//             style={{ color: COLOR_SCHEMA.textSecondary }}
//           >
//             {projects.map((project, i) => (
//               <li key={i} className="italic">
//                 {project}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// interface SkillsCardProps {
//   loading: boolean;
//   skills: SKILL[];
//   name: string;
//   id: string;
// }

// const SkillsCard = ({ loading, skills, name, id }: SkillsCardProps) => {
//   const renderSkeleton = () =>
//     Array.from({ length: 12 }, (_, i) => (
//       <div key={i} className="mb-2">
//         {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
//       </div>
//     ));

//   return (
//     <div
//       id={id}
//       className="relative z-10 w-full max-w-5xl mx-auto overflow-hidden shadow-2xl rounded-2xl card compact"
//       style={{
//         backgroundColor: COLOR_SCHEMA.cardBg,
//       }}
//     >
//       <div className="flex flex-col items-center w-full px-6 py-6 md:px-8 md:py-8">
//         <h1
//           className="py-1 mx-auto mb-6 font-bold text-center border-t-2 border-b-2 text-md w-fit"
//           style={{
//             borderColor: COLOR_SCHEMA.accentRed,
//             color: COLOR_SCHEMA.textPrimary,
//           }}
//         >
//           {loading ? renderSkeleton() : name}
//         </h1>

//         <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//           {loading
//             ? renderSkeleton()
//             : skills.map((skillObj) => (
//                 <SkillListItem key={skillObj.name} skillObj={skillObj} />
//               ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillsCard;
