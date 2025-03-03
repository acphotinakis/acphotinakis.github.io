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

const courses = [
  {
    courseName: 'Analysis of Algorithms',
    courseCode: 'CSCI261',
    semester: '2022-2023 Spring',
    image: <CodeIcon />,
    backgroundColor: 'bg-blue-200', // Blue background for this course
  },
  {
    courseName: 'Concepts of Computer Systems',
    courseCode: 'CSCI250',
    semester: '2023-2024 Fall',
    image: <ComputerIcon />,
    backgroundColor: 'bg-green-200', // Green background
  },
  {
    courseName: 'Concepts of Parallel & Distributed Systems',
    courseCode: 'CSCI251',
    semester: '2023-2024 Fall',
    image: <StorageIcon />,
    backgroundColor: 'bg-yellow-200', // Yellow background
  },
  {
    courseName: 'Discrete Math for Computing',
    courseCode: 'MATH190',
    semester: '2021-2022 Spring',
    image: <FunctionsIcon />,
    backgroundColor: 'bg-purple-200', // Purple background
  },
  {
    courseName: 'Financial Management I',
    courseCode: 'FINC220',
    semester: '2023-2024 Fall',
    image: <AccountBalanceIcon />,
    backgroundColor: 'bg-red-200', // Red background
  },
  {
    courseName: 'Financial Management II',
    courseCode: 'FINC352',
    semester: '2024-2025 Fall',
    image: <AccountBalanceIcon />,
    backgroundColor: 'bg-pink-200', // Pink background
  },
  {
    courseName: 'Intro to Artificial Intelligence',
    courseCode: 'CSCI331',
    semester: '2024-2025 Fall',
    image: <PsychologyIcon />,
    backgroundColor: 'bg-indigo-200', // Indigo background
  },
  {
    courseName: 'Intro to Computer Science Theory',
    courseCode: 'CSCI263',
    semester: '2022-2023 Fall',
    image: <SchoolIcon />,
    backgroundColor: 'bg-teal-200', // Teal background
  },
  {
    courseName: 'Intro to Options & Futures',
    courseCode: 'FINC470',
    semester: '2024-2025 Fall',
    image: <BusinessIcon />,
    backgroundColor: 'bg-orange-200', // Orange background
  },
  {
    courseName: 'Intro to Software Engineering',
    courseCode: 'SWEN261',
    semester: '2022-2023 Spring',
    image: <CodeIcon />,
    backgroundColor: 'bg-gray-200', // Gray background
  },
  {
    courseName: 'Linear Algebra',
    courseCode: 'MATH241',
    semester: '2023-2024 Fall',
    image: <FunctionsIcon />,
    backgroundColor: 'bg-yellow-100', // Light Yellow background
  },
  {
    courseName: 'Machine Learning',
    courseCode: 'CSCI335',
    semester: '2024-2025 Fall',
    image: <ScienceIcon />,
    backgroundColor: 'bg-green-100', // Light Green background
  },
  {
    courseName: 'Principles of Data Mining',
    courseCode: 'CSCI420',
    semester: '2024-2025 Fall',
    image: <AutoGraphIcon />,
    backgroundColor: 'bg-indigo-100', // Light Indigo background
  },
  {
    courseName: 'Principles of Database Management',
    courseCode: 'CSCI320',
    semester: '2023-2024 Fall',
    image: <StorageIcon />,
    backgroundColor: 'bg-teal-100', // Light Teal background
  },
  {
    courseName: 'Stock Market Algorithmic Trading',
    courseCode: 'FINC425',
    semester: '2024-2025 Fall',
    image: <BusinessIcon />,
    backgroundColor: 'bg-orange-100', // Light Orange background
  },
  {
    courseName: 'The Mechanics of Programming',
    courseCode: 'CSCI243',
    semester: '2022-2023 Fall',
    image: <CodeIcon />,
    backgroundColor: 'bg-blue-100', // Light Blue background
  },
];

const firstRow = courses.slice(0, courses.length / 2);
const secondRow = courses.slice(courses.length / 2);
const ReviewCard = ({
  courseCode,
  courseName,
  semester,
  image, // Accept image as a prop
  backgroundColor, // Accept background color as a prop
}: {
  courseCode: string;
  courseName: string;
  semester: string;
  image: JSX.Element;
  backgroundColor: string;
}) => {
  return (
    <figure className="relative w-64 p-4 overflow-hidden text-white transition-all duration-300 bg-black border border-white cursor-pointer rounded-xl hover:bg-white hover:text-black">
      <div className="flex flex-row items-center gap-3">
        {/* Render the passed icon with dynamic background color */}
        <div className={`p-2 ${backgroundColor} rounded-full`}>{image}</div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{semester}</figcaption>
          <p className="text-xs font-medium opacity-80">{courseCode}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{courseName}</blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden bg-black border rounded-lg card bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((course) => (
          <ReviewCard key={course.courseCode} {...course} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((course) => (
          <ReviewCard key={course.courseName} {...course} />
        ))}
      </Marquee>
      <div className="absolute inset-y-0 left-0 w-1/3 pointer-events-none bg-gradient-to-r from-dark white:from-background"></div>
      <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default MarqueeDemo;
