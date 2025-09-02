import { Marquee } from '@/components/ui/marquee';
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
import { COLOR_SCHEMA } from '@/interfaces/colorSchema';

const courses = [
  {
    courseName: 'Analysis of Algorithms',
    courseCode: 'CSCI261',
    semester: '2022-2023 Spring',
    image: <CodeIcon style={{ color: '#FFFFFF' }} />,
    backgroundColor: COLOR_SCHEMA.cardBg,
  },
  {
    courseName: 'Concepts of Computer Systems',
    courseCode: 'CSCI250',
    semester: '2023-2024 Fall',
    image: <ComputerIcon style={{ color: '#FFFFFF' }} />,
    backgroundColor: COLOR_SCHEMA.cardBg,
  },
  {
    courseName: 'Concepts of Parallel & Distributed Systems',
    courseCode: 'CSCI251',
    semester: '2023-2024 Fall',
    image: <StorageIcon style={{ color: '#FFFFFF' }} />,
    backgroundColor: COLOR_SCHEMA.cardBg,
  },
  {
    courseName: 'Discrete Math for Computing',
    courseCode: 'MATH190',
    semester: '2021-2022 Spring',
    image: <FunctionsIcon style={{ color: '#FFFFFF' }} />,
    backgroundColor: COLOR_SCHEMA.cardBg,
  },
  {
    courseName: 'Financial Management I',
    courseCode: 'FINC220',
    semester: '2023-2024 Fall',
    image: <AccountBalanceIcon style={{ color: '#FFFFFF' }} />,
    backgroundColor: COLOR_SCHEMA.cardBg,
  },
  {
    courseName: 'Financial Management II',
    courseCode: 'FINC352',
    semester: '2024-2025 Fall',
    image: <AccountBalanceIcon style={{ color: '#FFFFFF' }} />,
    backgroundColor: COLOR_SCHEMA.cardBg,
  },
  {
    courseName: 'Intro to Artificial Intelligence',
    courseCode: 'CSCI331',
    semester: '2024-2025 Fall',
    image: <PsychologyIcon style={{ color: '#FFFFFF' }} />,
    backgroundColor: COLOR_SCHEMA.cardBg,
  },
  {
    courseName: 'Intro to Computer Science Theory',
    courseCode: 'CSCI263',
    semester: '2022-2023 Fall',
    image: <SchoolIcon style={{ color: '#FFFFFF' }} />,
    backgroundColor: COLOR_SCHEMA.cardBg,
  },
  {
    courseName: 'Intro to Options & Futures',
    courseCode: 'FINC470',
    semester: '2024-2025 Fall',
    image: <BusinessIcon style={{ color: '#FFFFFF' }} />,
    backgroundColor: COLOR_SCHEMA.cardBg,
  },
  {
    courseName: 'Intro to Software Engineering',
    courseCode: 'SWEN261',
    semester: '2022-2023 Spring',
    image: <CodeIcon style={{ color: '#FFFFFF' }} />,
    backgroundColor: COLOR_SCHEMA.cardBg,
  },
  {
    courseName: 'Linear Algebra',
    courseCode: 'MATH241',
    semester: '2023-2024 Fall',
    image: <FunctionsIcon style={{ color: '#FFFFFF' }} />,
    backgroundColor: COLOR_SCHEMA.cardBg,
  },
  {
    courseName: 'Machine Learning',
    courseCode: 'CSCI335',
    semester: '2024-2025 Fall',
    image: <ScienceIcon style={{ color: '#FFFFFF' }} />,
    backgroundColor: COLOR_SCHEMA.cardBg,
  },
  {
    courseName: 'Principles of Data Mining',
    courseCode: 'CSCI420',
    semester: '2024-2025 Fall',
    image: <AutoGraphIcon style={{ color: '#FFFFFF' }} />,
    backgroundColor: COLOR_SCHEMA.cardBg,
  },
  {
    courseName: 'Principles of Database Management',
    courseCode: 'CSCI320',
    semester: '2023-2024 Fall',
    image: <StorageIcon style={{ color: '#FFFFFF' }} />,
    backgroundColor: COLOR_SCHEMA.cardBg,
  },
  {
    courseName: 'Stock Market Algorithmic Trading',
    courseCode: 'FINC425',
    semester: '2024-2025 Fall',
    image: <BusinessIcon style={{ color: '#FFFFFF' }} />,
    backgroundColor: COLOR_SCHEMA.cardBg,
  },
];

const ReviewCard = ({
  courseCode,
  courseName,
  semester,
  image,
  backgroundColor,
}: {
  courseCode: string;
  courseName: string;
  semester: string;
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

const MarqueeDemo = () => {
  const firstRow = courses.slice(0, courses.length / 2);
  const secondRow = courses.slice(courses.length / 2);

  return (
    <div
      className="flex items-center justify-between h-full max-w-full px-4 mx-auto overflow-hidden rounded-2xl"
      style={{ backgroundColor: COLOR_SCHEMA.cardBg }}
    >
      <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden rounded-lg">
        <div className="flex items-center justify-between mx-3 mt-5 mb-2">
          <h5
            className="text-lg text-center md:text-xl"
            style={{ color: COLOR_SCHEMA.textPrimary }}
          >
            <span
              className="block border-t-2 border-b-2"
              style={{
                borderColor: COLOR_SCHEMA.accentRed,
                color: COLOR_SCHEMA.textPrimary,
              }}
            >
              Courses
            </span>
          </h5>
        </div>

        <Marquee pauseOnHover className="[--duration:30s] max-w-full">
          {firstRow.map((course) => (
            <ReviewCard key={course.courseCode} {...course} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:30s] max-w-full">
          {secondRow.map((course) => (
            <ReviewCard key={course.courseName} {...course} />
          ))}
        </Marquee>

        <div
          className="absolute inset-y-0 left-0 w-1/4 pointer-events-none"
          style={{
            background: `linear-gradient(to right, ${COLOR_SCHEMA.cardBg}, transparent)`,
          }}
        ></div>
        <div
          className="absolute inset-y-0 right-0 w-1/4 pointer-events-none"
          style={{
            background: `linear-gradient(to left, ${COLOR_SCHEMA.cardBg}, transparent)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default MarqueeDemo;
