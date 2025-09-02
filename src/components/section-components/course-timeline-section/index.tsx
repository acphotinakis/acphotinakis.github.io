// import * as React from 'react';
// import { Card, Typography, Box, Grid } from '@mui/material';

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

// import { COLOR_SCHEMA } from '@/interfaces/colorSchema';

// // --- Courses array ---
// const courses = [
//   {
//     courseName: 'Analysis of Algorithms',
//     courseCode: 'CSCI261',
//     semester: '2022-2023 Spring',
//     Icon: CodeIcon,
//     backgroundColor: COLOR_SCHEMA.accentRed,
//   },
//   {
//     courseName: 'Concepts of Computer Systems',
//     courseCode: 'CSCI250',
//     semester: '2023-2024 Fall',
//     Icon: ComputerIcon,
//     backgroundColor: COLOR_SCHEMA.accentBlue,
//   },
//   {
//     courseName: 'Concepts of Parallel & Distributed Systems',
//     courseCode: 'CSCI251',
//     semester: '2023-2024 Fall',
//     Icon: StorageIcon,
//     backgroundColor: COLOR_SCHEMA.accentYellow,
//   },
//   {
//     courseName: 'Discrete Math for Computing',
//     courseCode: 'MATH190',
//     semester: '2021-2022 Spring',
//     Icon: FunctionsIcon,
//     backgroundColor: COLOR_SCHEMA.accentGreen,
//   },
//   {
//     courseName: 'Financial Management I',
//     courseCode: 'FINC220',
//     semester: '2023-2024 Fall',
//     Icon: AccountBalanceIcon,
//     backgroundColor: COLOR_SCHEMA.accentRed,
//   },
//   {
//     courseName: 'Financial Management II',
//     courseCode: 'FINC352',
//     semester: '2024-2025 Fall',
//     Icon: AccountBalanceIcon,
//     backgroundColor: COLOR_SCHEMA.accentRedHover,
//   },
//   {
//     courseName: 'Intro to Artificial Intelligence',
//     courseCode: 'CSCI331',
//     semester: '2024-2025 Fall',
//     Icon: PsychologyIcon,
//     backgroundColor: COLOR_SCHEMA.accentBlue,
//   },
//   {
//     courseName: 'Intro to Computer Science Theory',
//     courseCode: 'CSCI263',
//     semester: '2022-2023 Fall',
//     Icon: SchoolIcon,
//     backgroundColor: COLOR_SCHEMA.accentYellow,
//   },
//   {
//     courseName: 'Intro to Options & Futures',
//     courseCode: 'FINC470',
//     semester: '2024-2025 Fall',
//     Icon: BusinessIcon,
//     backgroundColor: COLOR_SCHEMA.accentGreen,
//   },
//   {
//     courseName: 'Intro to Software Engineering',
//     courseCode: 'SWEN261',
//     semester: '2022-2023 Spring',
//     Icon: CodeIcon,
//     backgroundColor: COLOR_SCHEMA.accentBlue,
//   },
//   {
//     courseName: 'Linear Algebra',
//     courseCode: 'MATH241',
//     semester: '2023-2024 Fall',
//     Icon: FunctionsIcon,
//     backgroundColor: COLOR_SCHEMA.accentYellow,
//   },
//   {
//     courseName: 'Machine Learning',
//     courseCode: 'CSCI335',
//     semester: '2024-2025 Fall',
//     Icon: ScienceIcon,
//     backgroundColor: COLOR_SCHEMA.accentGreen,
//   },
//   {
//     courseName: 'Principles of Data Mining',
//     courseCode: 'CSCI420',
//     semester: '2024-2025 Fall',
//     Icon: AutoGraphIcon,
//     backgroundColor: COLOR_SCHEMA.accentBlue,
//   },
//   {
//     courseName: 'Principles of Database Management',
//     courseCode: 'CSCI320',
//     semester: '2023-2024 Fall',
//     Icon: StorageIcon,
//     backgroundColor: COLOR_SCHEMA.accentYellowHover,
//   },
//   {
//     courseName: 'Stock Market Algorithmic Trading',
//     courseCode: 'FINC425',
//     semester: '2024-2025 Fall',
//     Icon: BusinessIcon,
//     backgroundColor: COLOR_SCHEMA.accentRed,
//   },
//   {
//     courseName: 'The Mechanics of Programming',
//     courseCode: 'CSCI243',
//     semester: '2022-2023 Fall',
//     Icon: CodeIcon,
//     backgroundColor: COLOR_SCHEMA.accentBlue,
//   },
// ];

// // --- Group courses by semester ---
// const coursesBySemester = courses.reduce(
//   (acc, course) => {
//     if (!acc[course.semester]) acc[course.semester] = [];
//     acc[course.semester].push(course);
//     return acc;
//   },
//   {} as Record<string, typeof courses>,
// );

// // --- Sort semesters latest first ---
// const sortedSemesters = Object.entries(coursesBySemester).sort(
//   ([semesterA], [semesterB]) => {
//     const [yearsA, termA] = semesterA.split(' ');
//     const [yearsB, termB] = semesterB.split(' ');
//     const endYearA = parseInt(yearsA.split('-')[1], 10);
//     const endYearB = parseInt(yearsB.split('-')[1], 10);
//     if (endYearA !== endYearB) return endYearB - endYearA;
//     const termOrder = ['Spring', 'Summer', 'Fall'];
//     return termOrder.indexOf(termB) - termOrder.indexOf(termA);
//   },
// );

// // --- Course Card Component ---
// interface ReviewCardProps {
//   courseCode: string;
//   courseName: string;
//   semester: string;
//   Icon: React.ElementType;
//   backgroundColor: string;
// }

// const ReviewCard: React.FC<ReviewCardProps> = ({
//   courseCode,
//   courseName,
//   semester,
//   Icon,
//   backgroundColor,
// }) => {
//   return (
//     <Card
//       sx={{
//         fontFamily: 'Roboto Mono, monospace',
//         display: 'flex',
//         flexDirection: 'column',
//         backgroundColor: COLOR_SCHEMA.cardBg,
//         color: COLOR_SCHEMA.textPrimary,
//         borderRadius: '16px',
//         boxShadow: COLOR_SCHEMA.shadowDark,
//         overflow: 'hidden',
//         padding: 2,
//         width: 320,
//         transition: 'transform 0.2s, box-shadow 0.2s',
//         '&:hover': {
//           transform: 'translateY(-5px)',
//           boxShadow: '0 4px 15px rgba(255,255,255,0.3)',
//         },
//       }}
//     >
//       <Box
//         sx={{
//           alignSelf: 'flex-start',
//           p: 1,
//           borderRadius: '8px',
//           backgroundColor,
//           display: 'inline-flex',
//           mb: 1,
//         }}
//       >
//         <Icon />
//       </Box>
//       <Typography
//         variant="h6"
//         sx={{
//           mb: 1,
//           fontFamily: 'Roboto Mono, monospace',
//           color: COLOR_SCHEMA.textPrimary,
//         }}
//       >
//         {courseCode}{' '}
//         <Box
//           component="span"
//           sx={{
//             backgroundColor: COLOR_SCHEMA.accentBlue,
//             color: COLOR_SCHEMA.textPrimary,
//             fontSize: '0.7rem',
//             px: 1,
//             borderRadius: '8px',
//             ml: 1,
//           }}
//         >
//           {semester}
//         </Box>
//       </Typography>
//       <Typography
//         variant="body2"
//         sx={{
//           fontFamily: 'Roboto Mono, monospace',
//           color: COLOR_SCHEMA.textSecondary,
//         }}
//       >
//         {courseName}
//       </Typography>
//     </Card>
//   );
// };

// // --- Timeline Component ---
// const CourseTimelineSection = () => {
//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         px: 4,
//         py: 12,
//         background: `linear-gradient(180deg, ${COLOR_SCHEMA.background}, ${COLOR_SCHEMA.backgroundAlt})`,
//       }}
//     >
//       <Typography
//         variant="h3"
//         sx={{
//           mb: 12,
//           fontWeight: 'bold',
//           textAlign: 'center',
//           textTransform: 'uppercase',
//           color: COLOR_SCHEMA.textPrimary,
//           textShadow: `0 0 12px ${COLOR_SCHEMA.accentRed}`,
//         }}
//       >
//         Courses by Semester
//       </Typography>

//       <Box sx={{ position: 'relative', maxWidth: 900, mx: 'auto' }}>
//         {/* Vertical line */}
//         <Box
//           sx={{
//             position: 'absolute',
//             left: 8, // aligns with the center of the dot
//             top: 0,
//             bottom: 0,
//             width: 4,
//             background: `linear-gradient(to bottom, ${COLOR_SCHEMA.accentRed}, ${COLOR_SCHEMA.accentRed})`,
//             borderRadius: 2,
//             zIndex: 0,
//           }}
//         />
//         {sortedSemesters.map(([semester, courseList], idx) => (
//           <Box key={semester} sx={{ display: 'flex', mb: 6 }}>
//             {/* Timeline Dot */}
//             <Box
//               sx={{
//                 width: 16,
//                 height: 16,
//                 borderRadius: '50%',
//                 backgroundColor: COLOR_SCHEMA.accentRed,
//                 flexShrink: 0,
//                 mt: 1,
//                 mr: 3,
//               }}
//             />
//             {/* Content */}
//             <Box sx={{ flexGrow: 1 }}>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 2,
//                   fontWeight: 'bold',
//                   color: COLOR_SCHEMA.textPrimary,
//                   textShadow: `0 0 8px ${COLOR_SCHEMA.accentGreen}`,
//                 }}
//               >
//                 {semester}
//               </Typography>
//               <Grid container spacing={3}>
//                 {courseList.map((course) => (
//                   <Grid item key={`${semester}-${course.courseCode}`}>
//                     <ReviewCard {...course} />
//                   </Grid>
//                 ))}
//               </Grid>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default CourseTimelineSection;
