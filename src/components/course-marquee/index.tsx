import { Marquee } from '@/components/ui/marquee';
import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import { cn } from '@/lib/utils';
import StorageIcon from '@mui/icons-material/Storage';
import FunctionsIcon from '@mui/icons-material/Functions';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ScienceIcon from '@mui/icons-material/Science';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import BusinessIcon from '@mui/icons-material/Business';
import ComputerIcon from '@mui/icons-material/Computer';

// const courses = [
//   {
//     courseName: 'Analysis of Algorithms',
//     courseCode: 'CSCI261',
//     semester: '2022-2023 Spring',
//     image: <CodeIcon />,
//   },
//   {
//     courseName: 'Concepts of Computer Systems',
//     courseCode: 'CSCI250',
//     semester: '2023-2024 Fall',
//     image: <ComputerIcon />,
//   },
//   {
//     courseName: 'Concepts of Parallel & Distributed Systems',
//     courseCode: 'CSCI251',
//     semester: '2023-2024 Fall',
//     image: <StorageIcon />,
//   },
//   {
//     courseName: 'Discrete Math for Computing',
//     courseCode: 'MATH190',
//     semester: '2021-2022 Spring',
//     image: <FunctionsIcon />,
//   },
//   {
//     courseName: 'Financial Management I',
//     courseCode: 'FINC220',
//     semester: '2023-2024 Fall',
//     image: <AccountBalanceIcon />,
//   },
//   {
//     courseName: 'Financial Management II',
//     courseCode: 'FINC352',
//     semester: '2024-2025 Fall',
//     image: <AccountBalanceIcon />,
//   },
//   {
//     courseName: 'Intro to Artificial Intelligence',
//     courseCode: 'CSCI331',
//     semester: '2024-2025 Fall',
//     image: <PsychologyIcon />,
//   },
//   {
//     courseName: 'Intro to Computer Science Theory',
//     courseCode: 'CSCI263',
//     semester: '2022-2023 Fall',
//     image: <SchoolIcon />,
//   },
//   {
//     courseName: 'Intro to Options & Futures',
//     courseCode: 'FINC470',
//     semester: '2024-2025 Fall',
//     image: <BusinessIcon />,
//   },
//   {
//     courseName: 'Intro to Software Engineering',
//     courseCode: 'SWEN261',
//     semester: '2022-2023 Spring',
//     image: <CodeIcon />,
//   },
//   {
//     courseName: 'Linear Algebra',
//     courseCode: 'MATH241',
//     semester: '2023-2024 Fall',
//     image: <FunctionsIcon />,
//   },
//   {
//     courseName: 'Machine Learning',
//     courseCode: 'CSCI335',
//     semester: '2024-2025 Fall',
//     image: <ScienceIcon />,
//   },
//   {
//     courseName: 'Principles of Data Mining',
//     courseCode: 'CSCI420',
//     semester: '2024-2025 Fall',
//     image: <AutoGraphIcon />,
//   },
//   {
//     courseName: 'Principles of Database Management',
//     courseCode: 'CSCI320',
//     semester: '2023-2024 Fall',
//     image: <StorageIcon />,
//   },
//   {
//     courseName: 'Stock Market Algorithmic Trading',
//     courseCode: 'FINC425',
//     semester: '2024-2025 Fall',
//     image: <BusinessIcon />,
//   },
//   {
//     courseName: 'The Mechanics of Programming',
//     courseCode: 'CSCI243',
//     semester: '2022-2023 Fall',
//     image: <CodeIcon />,
//   },
// ];

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

// const ReviewCard = ({
//   courseCode,
//   courseName,
//   semester,
//   image, // Accept image as a prop
// }: {
//   courseCode: string;
//   courseName: string;
//   semester: string;
//   image: JSX.Element; // The icon passed as a JSX element
// }) => {
//   return (
//     <figure
//       className={cn(
//         'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
//         // light styles
//         'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
//         // dark styles
//         'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         {/* Render the passed icon */}
//         <div className="p-2 bg-gray-200 rounded-full">{image}</div>
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium dark:text-white">
//             {semester}
//           </figcaption>
//           <p className="text-xs font-medium dark:text-white/40">{courseCode}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 text-sm">{courseName}</blockquote>
//     </figure>
//   );
// };

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
  image: JSX.Element; // The icon passed as a JSX element
  backgroundColor: string; // Background color passed as a prop
}) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* Render the passed icon with dynamic background color */}
        <div className={`p-2 ${backgroundColor} rounded-full`}>{image}</div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {semester}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{courseCode}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{courseName}</blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((course) => (
          <ReviewCard key={course.courseCode} {...course} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((course) => (
          <ReviewCard key={course.courseName} {...course} />
        ))}
      </Marquee>
      <div className="absolute inset-y-0 left-0 w-1/3 pointer-events-none bg-gradient-to-r from-white dark:from-background"></div>
      <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default MarqueeDemo;
