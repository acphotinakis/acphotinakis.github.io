// import React from 'react';
// import { IconButton } from '@mui/material';
// import { FaTimes } from 'react-icons/fa';
// import { GithubProject } from '../../interfaces/github-project';

// const projects = [
//   {
//     name: 'SudokuSolver',
//     url: 'https://github.com/acphotinakis/SudokuSolver',
//     languages: ['Java', 'Python'],
//     skills: ['Algorithm Design', 'Backtracking'],
//   },
//   {
//     name: 'facebook-clone',
//     url: 'https://github.com/acphotinakis/facebook-clone',
//     languages: ['JavaScript', 'React', 'Node.js'],
//     skills: [
//       'Frontend Development',
//       'Backend Development',
//       'Database Management',
//     ],
//   },
//   {
//     name: 'webfinvizapi',
//     url: 'https://github.com/acphotinakis/webfinvizapi',
//     languages: ['Python'],
//     skills: ['API Integration', 'Data Analysis'],
//   },
//   {
//     name: 'DiskUsage',
//     url: 'https://github.com/acphotinakis/DiskUsage',
//     languages: ['Java'],
//     skills: ['System Monitoring', 'Performance Optimization'],
//   },
//   {
//     name: 'Place-IP',
//     url: 'https://github.com/acphotinakis/Place-IP',
//     languages: ['JavaScript', 'Node.js'],
//     skills: ['Geolocation', 'API Integration'],
//   },
//   {
//     name: 'Keyboard-E-Store',
//     url: 'https://github.com/acphotinakis/Keyboard-E-Store',
//     languages: ['JavaScript', 'React', 'Node.js'],
//     skills: ['E-commerce', 'UI/UX Design', 'Payment Integration'],
//   },
//   {
//     name: 'JamGame',
//     url: 'https://github.com/acphotinakis/JamGame',
//     languages: ['JavaScript', 'HTML', 'CSS'],
//     skills: ['Game Development', 'Animation'],
//   },
//   {
//     name: 'TradeSync',
//     url: 'https://github.com/acphotinakis/TradeSync',
//     languages: ['Python', 'JavaScript'],
//     skills: ['Trading Algorithms', 'Data Syncing'],
//   },
// ];

// const ProjectDetails = ({
//   item,
//   username,
//   handleCloseBox,
// }: {
//   item: GithubProject;
//   username: string;
//   handleCloseBox: () => void;
// }) => {
//   // Find the project details that match item.name
//   const project = projects.find((p) => p.name === item.name);

//   return (
//     <div className="fixed top-10 left-10 w-[95vw] h-[95vh] border border-red-500 rounded-2xl bg-white shadow-2xl z-10 flex items-center justify-center">
//       <div className="relative w-full h-full">
//         {/* Close Button */}
//         <div className="absolute top-2 right-2">
//           <IconButton
//             aria-label="close"
//             onClick={() => {
//               console.log('Close button clicked');
//               handleCloseBox();
//             }}
//             sx={{
//               color: 'rgb(75, 0, 130)',
//               cursor: 'pointer',
//               fontSize: {
//                 xs: '0.875rem',
//                 sm: '1rem',
//                 md: '1.125rem',
//               },
//             }}
//           >
//             <FaTimes
//               style={{
//                 fontSize: '1.5rem',
//                 cursor: 'pointer',
//               }}
//             />
//           </IconButton>
//         </div>
//         <div className="card-body flex flex-col items-center py-4 px-5 md:py-8 md:px-8 h-full overflow-y-auto">
//           <div className="mx-3 p-3">
//             <h5 className="card-title text-black text-lg md:text-xl">
//               <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500 block">
//                 {item.name}
//               </span>
//             </h5>
//           </div>
//           <div className="card m-3 w-full">
//             <div className="p-3">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-3">
//                 <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//                   <h6 className="text-lg font-bold text-gray-700">
//                     {item.name}
//                   </h6>
//                   <p className="text-sm text-gray-500">{item.description}</p>
//                   <a
//                     href={`https://github.com/${username}/${item.name}`}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-blue-500 hover:underline"
//                   >
//                     View on GitHub
//                   </a>
//                   {/* Display Languages and Skills */}
//                   {project && (
//                     <div className="mt-4">
//                       <div className="text-sm font-medium text-gray-700">
//                         <h6 className="font-bold text-gray-900">Languages:</h6>
//                         <ul className="list-disc ml-4">
//                           {project.languages.map((lang, index) => (
//                             <li key={index} className="text-gray-600">
//                               {lang}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                       <div className="text-sm font-medium text-gray-700 mt-2">
//                         <h6 className="font-bold text-gray-900">Skills:</h6>
//                         <ul className="list-disc ml-4">
//                           {project.skills.map((skill, index) => (
//                             <li key={index} className="text-gray-600">
//                               {skill}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;
