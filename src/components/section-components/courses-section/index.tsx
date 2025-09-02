import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import FunctionsIcon from '@mui/icons-material/Functions';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ScienceIcon from '@mui/icons-material/Science';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import BusinessIcon from '@mui/icons-material/Business';
import ComputerIcon from '@mui/icons-material/Computer';
import { COLOR_SCHEMA } from '../../../interfaces/colorSchema';
import { Marquee } from '@/components/ui/marquee';
import { CompInputCoursesSectionProps } from '@/data/page_data/websiteInterfaces';

const ICONS = [
  { name: 'School', icon: <SchoolIcon /> },
  { name: 'Code', icon: <CodeIcon /> },
  { name: 'Storage', icon: <StorageIcon /> },
  { name: 'Functions', icon: <FunctionsIcon /> },
  { name: 'Finance', icon: <AccountBalanceIcon /> },
  { name: 'Psychology', icon: <PsychologyIcon /> },
  { name: 'Science', icon: <ScienceIcon /> },
  { name: 'Statistics', icon: <AutoGraphIcon /> },
  { name: 'Business', icon: <BusinessIcon /> },
  { name: 'Computer', icon: <ComputerIcon /> },
];

const ReviewCard = ({
  courseCode,
  courseName,
  semester,
  image,
  backgroundColor,
}: {
  courseCode: React.ReactNode;
  courseName: React.ReactNode;
  semester: React.ReactNode;
  image: React.ReactNode;
  backgroundColor: string;
}) => {
  return (
    <figure
      className="relative w-64 p-4 overflow-hidden transition-all duration-300 border rounded-xl hover:scale-105"
      style={{
        backgroundColor: backgroundColor,
        borderColor: COLOR_SCHEMA.borderLight,
        color: COLOR_SCHEMA.textPrimary,
      }}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="p-2 rounded-full"
          style={{
            backgroundColor: COLOR_SCHEMA.accentRed,
          }}
        >
          {image}
        </div>
        <div className="flex flex-col">
          <figcaption
            className="text-sm font-semibold"
            style={{ color: COLOR_SCHEMA.textPrimary }}
          >
            {semester}
          </figcaption>
          <p
            className="text-xs font-medium"
            style={{ color: COLOR_SCHEMA.textSecondary }}
          >
            {courseCode}
          </p>
        </div>
      </div>
      <blockquote
        className="mt-2 text-sm font-medium"
        style={{ color: COLOR_SCHEMA.textMuted }}
      >
        {courseName}
      </blockquote>
    </figure>
  );
};
const CoursesSection = ({
  id,
  loading,
  courses,
}: CompInputCoursesSectionProps) => {
  const firstRow = courses.slice(0, Math.ceil(courses.length / 2));
  const secondRow = courses.slice(Math.ceil(courses.length / 2));

  const renderSkeletons = (count: number) =>
    Array.from({ length: count }).map((_, idx) => (
      <div
        key={idx}
        className="w-40 m-2 rounded-lg h-36 animate-pulse"
        style={{ backgroundColor: COLOR_SCHEMA.cardBg }}
      ></div>
    ));

  return (
    <div
      className="bg-[#2C2C25] card flex w-full max-w-5xl mx-auto shadow-lg shadow-black/50 rounded-2xl overflow-hidden h-auto relative"
      id={id}
      style={{
        backgroundColor: COLOR_SCHEMA.cardBg,
        boxShadow: `0 4px 15px rgba(0,0,0,0.5)`,
      }}
    >
      <div className="w-full shadow card compact bg-opacity-40">
        <div className="relative items-center text-white card-body">
          <div className="flex items-center justify-between mx-3 mb-2 text-white">
            <h2 className="text-lg text-center text-[#F5F5F5] card-title md:text-xl mb-6">
              <span className="block text-center border-t-2 border-b-2 border-[#E53935] py-1">
                Courses
              </span>
            </h2>
          </div>

          {loading ? (
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 overflow-x-auto">
                {renderSkeletons(6)}
              </div>
              <div className="flex gap-4 overflow-x-auto">
                {renderSkeletons(6)}
              </div>
            </div>
          ) : (
            <>
              <Marquee pauseOnHover className="[--duration:30s] max-w-full">
                {firstRow.map((course, idx) => (
                  <ReviewCard
                    key={course.courseCode}
                    courseCode={course.courseCode}
                    courseName={course.courseName}
                    semester={course.semester}
                    image={ICONS[idx % ICONS.length].icon}
                    backgroundColor={COLOR_SCHEMA.cardBg}
                  />
                ))}
              </Marquee>

              <Marquee
                reverse
                pauseOnHover
                className="[--duration:30s] max-w-full"
              >
                {secondRow.map((course, idx) => (
                  <ReviewCard
                    key={course.courseName}
                    courseCode={course.courseCode}
                    courseName={course.courseName}
                    semester={course.semester}
                    image={ICONS[(idx + firstRow.length) % ICONS.length].icon}
                    backgroundColor={COLOR_SCHEMA.cardBg}
                  />
                ))}
              </Marquee>
            </>
          )}

          {/* Gradient overlay */}
          <div
            className="absolute inset-y-0 left-0 w-1/4 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${COLOR_SCHEMA.cardBg}, transparent)`,
            }}
          />
          <div
            className="absolute inset-y-0 right-0 w-1/4 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${COLOR_SCHEMA.cardBg}, transparent)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
