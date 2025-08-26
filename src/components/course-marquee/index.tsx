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

// Updated background colors to match modern red/black/gray palette
const courses = [
  {
    courseName: 'Analysis of Algorithms',
    courseCode: 'CSCI261',
    semester: '2022-2023 Spring',
    image: <CodeIcon />,
    backgroundColor: 'bg-red-600',
  },
  {
    courseName: 'Concepts of Computer Systems',
    courseCode: 'CSCI250',
    semester: '2023-2024 Fall',
    image: <ComputerIcon />,
    backgroundColor: 'bg-neutral-700',
  },
  {
    courseName: 'Concepts of Parallel & Distributed Systems',
    courseCode: 'CSCI251',
    semester: '2023-2024 Fall',
    image: <StorageIcon />,
    backgroundColor: 'bg-neutral-600',
  },
  {
    courseName: 'Discrete Math for Computing',
    courseCode: 'MATH190',
    semester: '2021-2022 Spring',
    image: <FunctionsIcon />,
    backgroundColor: 'bg-neutral-700',
  },
  {
    courseName: 'Financial Management I',
    courseCode: 'FINC220',
    semester: '2023-2024 Fall',
    image: <AccountBalanceIcon />,
    backgroundColor: 'bg-red-500',
  },
  {
    courseName: 'Financial Management II',
    courseCode: 'FINC352',
    semester: '2024-2025 Fall',
    image: <AccountBalanceIcon />,
    backgroundColor: 'bg-red-500',
  },
  {
    courseName: 'Intro to Artificial Intelligence',
    courseCode: 'CSCI331',
    semester: '2024-2025 Fall',
    image: <PsychologyIcon />,
    backgroundColor: 'bg-neutral-700',
  },
  {
    courseName: 'Intro to Computer Science Theory',
    courseCode: 'CSCI263',
    semester: '2022-2023 Fall',
    image: <SchoolIcon />,
    backgroundColor: 'bg-neutral-600',
  },
  {
    courseName: 'Intro to Options & Futures',
    courseCode: 'FINC470',
    semester: '2024-2025 Fall',
    image: <BusinessIcon />,
    backgroundColor: 'bg-red-600',
  },
  {
    courseName: 'Intro to Software Engineering',
    courseCode: 'SWEN261',
    semester: '2022-2023 Spring',
    image: <CodeIcon />,
    backgroundColor: 'bg-neutral-700',
  },
  {
    courseName: 'Linear Algebra',
    courseCode: 'MATH241',
    semester: '2023-2024 Fall',
    image: <FunctionsIcon />,
    backgroundColor: 'bg-neutral-600',
  },
  {
    courseName: 'Machine Learning',
    courseCode: 'CSCI335',
    semester: '2024-2025 Fall',
    image: <ScienceIcon />,
    backgroundColor: 'bg-neutral-700',
  },
  {
    courseName: 'Principles of Data Mining',
    courseCode: 'CSCI420',
    semester: '2024-2025 Fall',
    image: <AutoGraphIcon />,
    backgroundColor: 'bg-neutral-600',
  },
  {
    courseName: 'Principles of Database Management',
    courseCode: 'CSCI320',
    semester: '2023-2024 Fall',
    image: <StorageIcon />,
    backgroundColor: 'bg-neutral-700',
  },
  {
    courseName: 'Stock Market Algorithmic Trading',
    courseCode: 'FINC425',
    semester: '2024-2025 Fall',
    image: <BusinessIcon />,
    backgroundColor: 'bg-red-500',
  },
  {
    courseName: 'The Mechanics of Programming',
    courseCode: 'CSCI243',
    semester: '2022-2023 Fall',
    image: <CodeIcon />,
    backgroundColor: 'bg-neutral-700',
  },
];

const firstRow = courses.slice(0, courses.length / 2);
const secondRow = courses.slice(courses.length / 2);

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
  image: JSX.Element;
  backgroundColor: string;
}) => {
  return (
    <figure className="relative w-64 p-4 overflow-hidden text-white transition-all duration-300 border bg-neutral-900 border-neutral-700 rounded-xl hover:bg-neutral-800 hover:scale-105 hover:border-red-500">
      <div className="flex flex-row items-center gap-3">
        <div className={`p-2 ${backgroundColor} rounded-full text-white`}>
          {image}
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-white">
            {semester}
          </figcaption>
          <p className="text-xs font-medium text-neutral-400">{courseCode}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm font-medium text-neutral-300">
        {courseName}
      </blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="flex items-center justify-between h-full max-w-full px-4 mx-auto overflow-hidden italic bg-black card compact rounded-2xl scroll-mt-16">
      <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden bg-black rounded-lg">
        <div className="flex items-center justify-between mx-3 mt-5 mb-2 text-white">
          <h5 className="text-lg text-center text-white card-title md:text-xl">
            <span className="block text-white border-t-2 border-b-2 border-[#FF4B4B] opacity-100">
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

        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </div>
  );
};

export default MarqueeDemo;

// import { Marquee } from '@/components/ui/marquee';
// import SchoolIcon from '@mui/icons-material/School';
// import CodeIcon from '@mui/icons-material/Code';
// import StorageIcon from '@mui/icons-material/Storage';
// import FunctionsIcon from '@mui/icons-material/Functions';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import PsychologyIcon from '@mui/icons-material/Psychology';
// import ScienceIcon from '@mui/icons-material/Science';
// import AutoGraphIcon from '@mui/icons-material/AutoGraph';
// import BusinessIcon from '@mui/icons-material/Business';
// import ComputerIcon from '@mui/icons-material/Computer';

// const courses = [
//   {
//     courseName: 'Analysis of Algorithms',
//     courseCode: 'CSCI261',
//     semester: '2022-2023 Spring',
//     image: <CodeIcon />,
//     backgroundColor: 'bg-blue-200', // Blue background for this course
//   },
//   {
//     courseName: 'Concepts of Computer Systems',
//     courseCode: 'CSCI250',
//     semester: '2023-2024 Fall',
//     image: <ComputerIcon />,
//     backgroundColor: 'bg-green-200', // Green background
//   },
//   {
//     courseName: 'Concepts of Parallel & Distributed Systems',
//     courseCode: 'CSCI251',
//     semester: '2023-2024 Fall',
//     image: <StorageIcon />,
//     backgroundColor: 'bg-yellow-200', // Yellow background
//   },
//   {
//     courseName: 'Discrete Math for Computing',
//     courseCode: 'MATH190',
//     semester: '2021-2022 Spring',
//     image: <FunctionsIcon />,
//     backgroundColor: 'bg-purple-200', // Purple background
//   },
//   {
//     courseName: 'Financial Management I',
//     courseCode: 'FINC220',
//     semester: '2023-2024 Fall',
//     image: <AccountBalanceIcon />,
//     backgroundColor: 'bg-red-200', // Red background
//   },
//   {
//     courseName: 'Financial Management II',
//     courseCode: 'FINC352',
//     semester: '2024-2025 Fall',
//     image: <AccountBalanceIcon />,
//     backgroundColor: 'bg-pink-200', // Pink background
//   },
//   {
//     courseName: 'Intro to Artificial Intelligence',
//     courseCode: 'CSCI331',
//     semester: '2024-2025 Fall',
//     image: <PsychologyIcon />,
//     backgroundColor: 'bg-indigo-200', // Indigo background
//   },
//   {
//     courseName: 'Intro to Computer Science Theory',
//     courseCode: 'CSCI263',
//     semester: '2022-2023 Fall',
//     image: <SchoolIcon />,
//     backgroundColor: 'bg-teal-200', // Teal background
//   },
//   {
//     courseName: 'Intro to Options & Futures',
//     courseCode: 'FINC470',
//     semester: '2024-2025 Fall',
//     image: <BusinessIcon />,
//     backgroundColor: 'bg-orange-200', // Orange background
//   },
//   {
//     courseName: 'Intro to Software Engineering',
//     courseCode: 'SWEN261',
//     semester: '2022-2023 Spring',
//     image: <CodeIcon />,
//     backgroundColor: 'bg-gray-200', // Gray background
//   },
//   {
//     courseName: 'Linear Algebra',
//     courseCode: 'MATH241',
//     semester: '2023-2024 Fall',
//     image: <FunctionsIcon />,
//     backgroundColor: 'bg-yellow-100', // Light Yellow background
//   },
//   {
//     courseName: 'Machine Learning',
//     courseCode: 'CSCI335',
//     semester: '2024-2025 Fall',
//     image: <ScienceIcon />,
//     backgroundColor: 'bg-green-100', // Light Green background
//   },
//   {
//     courseName: 'Principles of Data Mining',
//     courseCode: 'CSCI420',
//     semester: '2024-2025 Fall',
//     image: <AutoGraphIcon />,
//     backgroundColor: 'bg-indigo-100', // Light Indigo background
//   },
//   {
//     courseName: 'Principles of Database Management',
//     courseCode: 'CSCI320',
//     semester: '2023-2024 Fall',
//     image: <StorageIcon />,
//     backgroundColor: 'bg-teal-100', // Light Teal background
//   },
//   {
//     courseName: 'Stock Market Algorithmic Trading',
//     courseCode: 'FINC425',
//     semester: '2024-2025 Fall',
//     image: <BusinessIcon />,
//     backgroundColor: 'bg-orange-100', // Light Orange background
//   },
//   {
//     courseName: 'The Mechanics of Programming',
//     courseCode: 'CSCI243',
//     semester: '2022-2023 Fall',
//     image: <CodeIcon />,
//     backgroundColor: 'bg-blue-100', // Light Blue background
//   },
// ];

// const firstRow = courses.slice(0, courses.length / 2);
// const secondRow = courses.slice(courses.length / 2);
// const ReviewCard = ({
//   courseCode,
//   courseName,
//   semester,
//   image, // Accept image as a prop
//   backgroundColor, // Accept background color as a prop
// }: {
//   courseCode: string;
//   courseName: string;
//   semester: string;
//   image: JSX.Element;
//   backgroundColor: string;
// }) => {
//   return (
//     <figure className="relative w-64 p-4 overflow-hidden text-white transition-all duration-300 bg-black border border-white cursor-pointer rounded-xl hover:bg-white hover:text-black">
//       <div className="flex flex-row items-center gap-3">
//         {/* Render the passed icon with dynamic background color */}
//         <div className={`p-2 ${backgroundColor} rounded-full`}>{image}</div>
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium">{semester}</figcaption>
//           <p className="text-xs font-medium opacity-80">{courseCode}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 text-sm">{courseName}</blockquote>
//     </figure>
//   );
// };

// const MarqueeDemo = () => {
//   return (
//     <div className="bg-black card flex h-full w-[95vw] compact italic mx-auto items-center justify-between rounded-2xl overflow-hidden h-auto scroll-mt-16">
//       <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden bg-black rounded-lg">
//         <div className="flex items-center justify-between mx-3 mt-5 mb-2 text-white">
//           <h5 className="text-lg text-center text-white card-title md:text-xl">
//             <span className="block text-white border-t-2 border-b-2 border-blue-500 opacity-100 text-base-content">
//               Courses
//             </span>
//           </h5>
//         </div>
//         <Marquee pauseOnHover className="[--duration:30s]">
//           {firstRow.map((course) => (
//             <ReviewCard key={course.courseCode} {...course} />
//           ))}
//         </Marquee>
//         <Marquee reverse pauseOnHover className="[--duration:30s]">
//           {secondRow.map((course) => (
//             <ReviewCard key={course.courseName} {...course} />
//           ))}
//         </Marquee>
//         {/* Keep the left-side gradient if needed */}
//         <div className="absolute inset-y-0 left-0 w-1/3 pointer-events-none bg-gradient-to-r from-dark dark:from-background"></div>
//       </div>
//     </div>
//   );
// };

// export default MarqueeDemo;
