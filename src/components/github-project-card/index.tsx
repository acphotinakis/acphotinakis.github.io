// import { useState } from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import DownloadIcon from '@mui/icons-material/Download';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import { styled, keyframes, css } from 'styled-components';
// import { getLanguageColor, skeleton } from '../../utils';
// import { GithubProject } from '../../interfaces/github-project';
// import SudokuImage from '../../assets/sudoku.png';
// import FacebookImage from '../../assets/facebook.jpg';
// import DiskUsageImage from '../../assets/parallel_computing.jpg';
// import PlaceIpImage from '../../assets/place_ip.jpg';
// import KeyboardEStoreImage from '../../assets/keyboard_e_store.jpg';
// import FinvizApiImage from '../../assets/finvizapi.jpg';
// import TradeSyncImage from '../../assets/trade_sync.jpg';
// import ParkingJamImage from '../../assets/parking_jam.png';
// // import GithubProjectReadMoreCard from '../github-project-read-more';
// // import CloseIcon from '@mui/icons-material/Close';
// import { FaTimes } from 'react-icons/fa';

// const imageMap: { [key: string]: string } = {
//   DiskUsage: DiskUsageImage,
//   'facebook-clone': FacebookImage,
//   SudokuSolver: SudokuImage,
//   'Place-IP': PlaceIpImage,
//   'Keyboard-E-Store': KeyboardEStoreImage,
//   webfinvizapi: FinvizApiImage,
//   TradeSync: TradeSyncImage,
//   JamGame: ParkingJamImage,
// };

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
//     languages: [
//       'JavaScript',
//       'React',
//       'Node.js',
//       'Tailwind CSS',
//       'JSON',
//       'Firebase',
//     ],
//     skills: [
//       'Frontend Development',
//       'Backend Development',
//       'Authentication and Authorization',
//       'API Integration',
//       'Responsive Design',
//       'UI/UX Design',
//       'State Management',
//       'Session Management',
//       'Database Integration',
//       'Web Security',
//       'Client-Server Communication',
//       'Animation and Interactivity',
//     ],
//   },
//   {
//     name: 'webfinvizapi',
//     url: 'https://github.com/acphotinakis/webfinvizapi',
//     languages: ['Java'],
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
//     languages: ['Java', 'Spring', 'Angular', 'TypeScript'],
//     skills: [
//       'E-commerce Development',
//       'Full-Stack Development',
//       'Spring Framework',
//       'Angular Framework',
//       'TypeScript',
//       'Java Development',
//       'Maven',
//       'Unit Testing',
//       'Code Coverage',
//       'Design Documentation',
//       'MVC Architecture',
//       'Continuous Integration',
//     ],
//   },
//   {
//     name: 'JamGame',
//     url: 'https://github.com/acphotinakis/JamGame',
//     languages: ['Java', 'JavaFX', 'JavaScript'],
//     skills: [
//       'Game Development',
//       'Algorithm Design',
//       'Breadth First Search (BFS)',
//       'Model-View-Controller (MVC) Architecture',
//       'UI/UX Design',
//       'Problem Solving',
//       'Configuration Management',
//       'Interactive User Interfaces',
//     ],
//   },
//   {
//     name: 'TradeSync',
//     url: 'https://github.com/acphotinakis/TradeSync',
//     languages: ['Python', 'JavaScript'],
//     skills: ['Trading Algorithms', 'Data Syncing'],
//   },
// ];

// const GithubProjectCard = ({
//   header,
//   githubProjects,
//   loading,
//   limit,
//   username,
//   id,
// }: {
//   header: string;
//   githubProjects: GithubProject[];
//   loading: boolean;
//   limit: number;
//   username: string;
//   id: string;
// }) => {
//   const [openProject, setOpenProject] = useState<string | null>(null);

//   const handleReadMoreClick = (projectName: string) => {
//     setOpenProject(projectName); // Open the card for the clicked project
//   };

//   const handleCloseBox = () => {
//     setOpenProject(null); // Close the card
//   };

//   const ProjectDetails = ({
//     item,
//     username,
//     handleCloseBox,
//   }: {
//     item: GithubProject;
//     username: string;
//     handleCloseBox: () => void;
//   }) => {
//     // Find the project details that match item.name
//     const project = projects.find((p) => p.name === item.name);

//     return (
//       <div className="fixed inset-0 flex items-center justify-center z-10">
//         <div className="relative w-[75%] h-[75%] border border-red-500 rounded-2xl bg-white shadow-2xl">
//           {/* Close Button */}
//           <div className="absolute top-2 right-2">
//             <IconButton
//               aria-label="close"
//               onClick={() => {
//                 console.log('Close button clicked');
//                 handleCloseBox();
//               }}
//               sx={{
//                 color: 'rgb(75, 0, 130)',
//                 cursor: 'pointer',
//                 fontSize: {
//                   xs: '0.875rem',
//                   sm: '1rem',
//                   md: '1.125rem',
//                 },
//               }}
//             >
//               <FaTimes
//                 style={{
//                   fontSize: '1.5rem',
//                   cursor: 'pointer',
//                 }}
//               />
//             </IconButton>
//           </div>
//           {project && (
//             <div className="card-body flex flex-col border border-red-500 items-center py-4 px-5 md:py-8 md:px-8 h-full overflow-y-auto">
//               <div className="mx-3 p-3">
//                 <h5 className="card-title text-black text-lg md:text-xl">
//                   <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500 block">
//                     {item.name}
//                   </span>
//                 </h5>
//                 <div className="flex flex-wrap gap-2 mt-1">
//                   {project.languages.map((lang, index) => (
//                     <span
//                       key={index}
//                       className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
//                     >
//                       {lang}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="card w-[90%] h-[90%] border border-red-500 m-3 w-full">
//                 <div className="p-3">
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-3">
//                     <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//                       <h6 className="text-lg font-bold text-gray-700">
//                         {item.name}
//                       </h6>
//                       <h6 className="font-bold text-gray-900">Languages:</h6>
//                       <div className="mt-4">
//                         <div className="text-sm font-medium text-gray-700"></div>
//                         <p className="text-sm text-gray-500">
//                           {item.description}
//                         </p>
//                         <a
//                           href={`https://github.com/${username}/${item.name}`}
//                           target="_blank"
//                           rel="noreferrer"
//                           className="text-blue-500 hover:underline"
//                         >
//                           View on GitHub
//                         </a>
//                         {/* Display Languages and Skills */}
//                         <div className="text-sm font-medium text-gray-700 mt-2">
//                           <h6 className="font-bold text-gray-900">Skills:</h6>
//                           <ul className="list-disc ml-4">
//                             {project.skills.map((skill, index) => (
//                               <li key={index} className="text-gray-600">
//                                 {skill}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   const renderProjects = () => {
//     return (
//       <>
//         {githubProjects.map((item) => {
//           // Select image based on item.name
//           const imageUrl = imageMap[item.name] || 'path/to/default-image.jpg';

//           return (
//             <Card
//               key={item.name} // Use a unique key based on item.name
//               sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 backgroundColor: '#ffffff',
//                 color: '#222222',
//                 marginBottom: 2,
//                 fontFamily: 'Roboto Mono, monospace',
//                 opacity: 1.0,
//                 boxShadow:
//                   '0 4px 8px rgba(0, 0, 0, 0.3), 0 -4px 8px rgba(0, 0, 0, 0.3)',
//                 width: '100%',
//               }}
//             >
//               <div
//                 style={{
//                   width: '100%',
//                   height: '200px',
//                   backgroundImage: `url(${imageUrl})`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                 }}
//               ></div>

//               <Box
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   width: '100%',
//                   boxShadow: 'inherit',
//                   padding: 2,
//                   flexGrow: 1, // Ensures the Box takes up remaining space
//                 }}
//               >
//                 <CardContent
//                   sx={{
//                     flex: '1 0 auto',
//                     padding: 0, // Removes default padding if needed
//                   }}
//                 >
//                   <Typography
//                     variant="subtitle1"
//                     color="black"
//                     component="div"
//                     fontFamily="Roboto Mono, monospace"
//                     sx={{
//                       fontSize: {
//                         xs: '0.875rem',
//                         sm: '1rem',
//                         md: '1.125rem',
//                       },
//                     }}
//                   >
//                     {item.description}
//                   </Typography>
//                 </CardContent>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     pl: 1,
//                     pb: 1,
//                     marginTop: 'auto', // Pushes the footer to the bottom
//                     fontSize: {
//                       xs: '0.875rem',
//                       sm: '1rem',
//                       md: '1.125rem',
//                     },
//                   }}
//                 >
//                   {/* New Read More Button */}
//                   {/* Close Button */}
//                   {openProject === item.name && (
//                     <ProjectDetails
//                       item={item}
//                       username={item.name}
//                       handleCloseBox={handleCloseBox}
//                     />
//                   )}

//                   {openProject !== item.name && (
//                     <IconButton
//                       aria-label="read more"
//                       onClick={() => handleReadMoreClick(item.name)}
//                       sx={{
//                         color: 'rgb(75, 0, 130)',
//                         cursor: 'pointer',
//                         fontSize: {
//                           xs: '0.875rem',
//                           sm: '1rem',
//                           md: '1.125rem',
//                         },
//                       }}
//                     >
//                       <Typography
//                         component="span"
//                         sx={{
//                           fontSize: {
//                             xs: '0.875rem',
//                             sm: '1rem',
//                             md: '1.125rem',
//                           },
//                         }}
//                       >
//                         Read More
//                       </Typography>
//                     </IconButton>
//                   )}
//                 </Box>
//                 <div className="flex justify-between text-black text-sm text-base-content text-opacity-60 truncate">
//                   <div>
//                     <span className="flex items-center ml-2 mb-2">
//                       <div
//                         className="w-3 h-3 rounded-full mr-1 opacity-100 text-sm sm:text-base md:text-md"
//                         style={{
//                           backgroundColor: getLanguageColor(item.language),
//                         }}
//                       />
//                       <span
//                         style={{
//                           color: 'black',
//                           fontFamily: 'Roboto Mono, monospace',
//                         }}
//                         className="text-sm sm:text-base md:text-md"
//                       >
//                         {item.language}
//                       </span>
//                     </span>
//                   </div>
//                 </div>
//               </Box>
//             </Card>
//           );
//         })}
//       </>
//     );
//   };

//   return (
//     <div
//       className="bg-white card flex compact italic  w-[95vw] mx-auto shadow shadow-[0_4px_8px_rgba(0,_0,_0,_0.5),_0_-4px_8px_rgba(0,_0,_0,_0.5)] items-center justify-between rounded-2xl relative z-10 shadow shadow-[0_4px_8px_rgba(0,_0,_0,_0.3),_0_-4px_8px_rgba(0,_0,_0,_0.3)]"
//       id={id}
//     >
//       <div className="flex flex-col p-4 gap-6 items-center">
//         <div className="flex flex-col py-4 px-4 md:py-8 md:px-8 relative z-10 w-full max-w-screen-lg">
//           <div className="flex flex-col items-center justify-center mb-4 text-center">
//             <h5 className="card-title text-black text-lg md:text-xl mb-2">
//               {loading ? (
//                 skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
//               ) : (
//                 <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500">
//                   {header}
//                 </span>
//               )}
//             </h5>
//             {loading ? (
//               skeleton({ widthCls: 'w-10', heightCls: 'h-5' })
//             ) : (
//               <a
//                 href={`https://github.com/${username}?tab=repositories`}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-sm sm:text-base md:text-md text-blue-500 hover:underline opacity-100"
//               >
//                 See All
//               </a>
//             )}
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 w-full">
//             {renderProjects()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GithubProjectCard;

// import { useState } from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import DownloadIcon from '@mui/icons-material/Download';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import { styled, keyframes, css } from 'styled-components';
// import { getLanguageColor, skeleton } from '../../utils';
// import { GithubProject } from '../../interfaces/github-project';
// import SudokuImage from '../../assets/sudoku.png';
// import FacebookImage from '../../assets/facebook.jpg';
// import DiskUsageImage from '../../assets/parallel_computing.jpg';
// import PlaceIpImage from '../../assets/place_ip.jpg';
// import KeyboardEStoreImage from '../../assets/keyboard_e_store.jpg';
// import FinvizApiImage from '../../assets/finvizapi.jpg';
// import TradeSyncImage from '../../assets/trade_sync.jpg';
// import ParkingJamImage from '../../assets/parking_jam.png';
// // import GithubProjectReadMoreCard from '../github-project-read-more';
// import CloseIcon from '@mui/icons-material/Close';

// const shakeAnimation = keyframes`
//   0% { transform: translateX(0); }
//   25% { transform: translateX(-5px); }
//   50% { transform: translateX(0); }
//   75% { transform: translateX(5px); }
//   100% { transform: translateX(0); }
// `;

// const GitHubIconButton = styled(IconButton)<{ isShaking: boolean }>`
//   transition:
//     transform 0.3s ease,
//     color 0.3s ease;

//   .MuiSvgIcon-root {
//     color: rgb(75, 0, 130); /* Default color: indigo */
//   }

//   &:hover {
//     transform: ${(props) =>
//       props.isShaking ? 'translateX(-5px)' : 'translateX(0)'};
//     animation: ${(props) =>
//       props.isShaking
//         ? css`
//             ${shakeAnimation} 0.5s infinite
//           `
//         : 'none'};

//     .MuiSvgIcon-root {
//       color: black; /* Color on hover: black */
//     }
//   }
// `;

// // Styled component for DownloadRepoIconButton with custom isShaking prop
// const DownloadRepoIconButton = styled(IconButton)<{ isShaking: boolean }>`
//   transition:
//     transform 0.3s ease,
//     color 0.3s ease;

//   .MuiSvgIcon-root {
//     color: rgb(75, 0, 130);
//   }

//   &:hover {
//     transform: ${(props) =>
//       props.isShaking ? 'translateX(-5px)' : 'translateX(0)'};
//     animation: ${(props) =>
//       props.isShaking
//         ? css`
//             ${shakeAnimation} 0.5s infinite
//           `
//         : 'none'};

//     .MuiSvgIcon-root {
//       color: black;
//     }
//   }
// `;

// const imageMap: { [key: string]: string } = {
//   DiskUsage: DiskUsageImage,
//   'facebook-clone': FacebookImage,
//   SudokuSolver: SudokuImage,
//   'Place-IP': PlaceIpImage,
//   'Keyboard-E-Store': KeyboardEStoreImage,
//   webfinvizapi: FinvizApiImage,
//   TradeSync: TradeSyncImage,
//   JamGame: ParkingJamImage,
// };

// interface GithubProjectExtension {
//   name: string;
//   html_url: string;
//   description: string;
//   stargazers_count: string;
//   forks_count: string;
//   language: string;
// }

// const GithubProjectCard = ({
//   header,
//   githubProjects,
//   loading,
//   limit,
//   username,
//   id,
// }: {
//   header: string;
//   githubProjects: GithubProject[];
//   loading: boolean;
//   limit: number;
//   username: string;
//   id: string;
// }) => {
//   const [isShaking, setIsShaking] = useState(false);
//   const [openProject, setOpenProject] = useState<string | null>(null);

//   const handleMouseEnter = () => setIsShaking(true);
//   const handleMouseLeave = () => setIsShaking(false);

//   const handleReadMoreClick = (projectName: string) => {
//     setOpenProject(projectName); // Open the card for the clicked project
//   };

//   const handleCloseBox = () => {
//     setOpenProject(null); // Close the card
//   };

//   const renderSkeleton = () => {
//     const array = [];
//     for (let index = 0; index < limit; index++) {
//       array.push(
//         <div key={index} className="mb-2">
//           {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
//         </div>,
//       );
//     }
//     return array;
//   };

//   const renderProjects = () => {
//     const handleDownload = (projectName: string) => {
//       const downloadUrl = `https://github.com/acphotinakis/${projectName}/archive/refs/heads/main.zip`;
//       window.open(downloadUrl, '_blank');
//     };

//     return (
//       <>
//         {githubProjects.map((item, index) => {
//           // Select image based on item.name
//           const imageUrl = imageMap[item.name] || 'path/to/default-image.jpg';

//           return (
//             <Card
//               key={index}
//               sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 backgroundColor: '#ffffff',
//                 color: '#222222',
//                 marginBottom: 2,
//                 fontFamily: 'Roboto Mono, monospace',
//                 opacity: 1.0,
//                 boxShadow:
//                   '0 4px 8px rgba(0, 0, 0, 0.3), 0 -4px 8px rgba(0, 0, 0, 0.3)',
//                 width: '100%',
//               }}
//             >
//               <div
//                 style={{
//                   width: '100%',
//                   height: '200px',
//                   backgroundImage: `url(${imageUrl})`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                 }}
//               ></div>

//               <Box
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   width: '100%',
//                   boxShadow: 'inherit',
//                   padding: 2,
//                   flexGrow: 1, // Ensures the Box takes up remaining space
//                 }}
//               >
//                 <CardContent
//                   sx={{
//                     flex: '1 0 auto',
//                     padding: 0, // Removes default padding if needed
//                   }}
//                 >
//                   <Typography
//                     component="div"
//                     variant="h6"
//                     fontFamily="Roboto Mono, monospace"
//                     color="black"
//                     sx={{
//                       fontSize: {
//                         xs: '0.875rem',
//                         sm: '1rem',
//                         md: '1.125rem',
//                       },
//                     }}
//                   >
//                     {item.name}
//                   </Typography>

//                   <Typography
//                     variant="subtitle1"
//                     color="black"
//                     component="div"
//                     fontFamily="Roboto Mono, monospace"
//                     sx={{
//                       fontSize: {
//                         xs: '0.875rem',
//                         sm: '1rem',
//                         md: '1.125rem',
//                       },
//                     }}
//                   >
//                     {item.description}
//                   </Typography>
//                 </CardContent>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     pl: 1,
//                     pb: 1,
//                     marginTop: 'auto', // Pushes the footer to the bottom
//                     fontSize: {
//                       xs: '0.875rem',
//                       sm: '1rem',
//                       md: '1.125rem',
//                     },
//                   }}
//                 >
//                   <IconButton
//                     aria-label="previous"
//                     sx={{
//                       color: 'rgb(75, 0, 130)',
//                       cursor: 'default',
//                     }}
//                   >
//                     <SkipPreviousIcon
//                       sx={{
//                         color: 'inherit',
//                         fontSize: {
//                           xs: '0.875rem',
//                           sm: '1rem',
//                           md: '1.125rem',
//                         },
//                       }}
//                     />
//                   </IconButton>
//                   <GitHubIconButton
//                     aria-label="open github"
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                     isShaking={isShaking}
//                     sx={{
//                       color: 'inherit',
//                       fontSize: {
//                         xs: '0.875rem',
//                         sm: '1rem',
//                         md: '1.125rem',
//                       },
//                     }}
//                   >
//                     <a href={item.html_url} target="_blank" rel="noreferrer">
//                       <GitHubIcon
//                         sx={{
//                           height: 38,
//                           width: 38,
//                           color: 'inherit',
//                           fontSize: {
//                             xs: '0.875rem',
//                             sm: '1rem',
//                             md: '1.125rem',
//                           },
//                         }}
//                       />
//                     </a>
//                   </GitHubIconButton>

//                   <IconButton
//                     aria-label="next"
//                     sx={{
//                       color: 'rgb(75, 0, 130)',
//                       cursor: 'default',
//                       fontSize: {
//                         xs: '0.875rem',
//                         sm: '1rem',
//                         md: '1.125rem',
//                       },
//                     }}
//                   >
//                     <SkipNextIcon
//                       sx={{
//                         color: 'inherit',
//                         fontSize: {
//                           xs: '0.875rem',
//                           sm: '1rem',
//                           md: '1.125rem',
//                         },
//                       }}
//                     />
//                   </IconButton>

//                   <DownloadRepoIconButton
//                     aria-label="download"
//                     onClick={() => handleDownload(item.name)}
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                     isShaking={isShaking}
//                   >
//                     <DownloadIcon
//                       sx={{
//                         color: 'inherit',
//                         fontSize: {
//                           xs: '0.875rem',
//                           sm: '1rem',
//                           md: '1.125rem',
//                         },
//                       }}
//                     />
//                   </DownloadRepoIconButton>
//                   {/* New Read More Button */}
//                   {openProject === item.name && (
//                     <div className="card shadow-2xl compact italic w-9/10 rounded-2xl relative z-10 shadow shadow-[0_4px_8px_rgba(0,_0,_0,_0.3),_0_-4px_8px_rgba(0,_0,_0,_0.3)]">
//                       {/* Close Button */}
//                       <div className="absolute top-2 right-2">
//                         <IconButton
//                           aria-label="close"
//                           onClick={() => {
//                             console.log('Close button clicked');
//                             handleCloseBox();
//                           }}
//                           sx={{
//                             color: 'rgb(75, 0, 130)',
//                             cursor: 'pointer',
//                             fontSize: {
//                               xs: '0.875rem',
//                               sm: '1rem',
//                               md: '1.125rem',
//                             },
//                           }}
//                         >
//                           <CloseIcon
//                             sx={{
//                               fontSize: {
//                                 xs: '1rem',
//                                 sm: '1.25rem',
//                                 md: '1.5rem',
//                               },
//                             }}
//                           />
//                         </IconButton>
//                       </div>
//                       <div className="card-body flex flex-col items-center py-4 px-5 md:py-8 md:px-8 relative z-10">
//                         <div className="mx-3 p-3">
//                           <h5 className="card-title text-black text-lg md:text-xl">
//                             {loading ? (
//                               renderSkeleton()
//                             ) : (
//                               <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500 block">
//                                 {header}
//                               </span>
//                             )}
//                           </h5>
//                         </div>
//                         <div className="card m-3 w-full">
//                           <div className="p-3">
//                             <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-3">
//                               {/* Display the GitHub projects */}
//                               {loading ? (
//                                 renderSkeleton()
//                               ) : (
//                                 <div
//                                   key={item.name}
//                                   className="bg-gray-100 p-4 rounded-lg shadow-md"
//                                 >
//                                   <h6 className="text-lg font-bold text-gray-700">
//                                     {item.name}
//                                   </h6>
//                                   <p className="text-sm text-gray-500">
//                                     {item.description}
//                                   </p>
//                                   <a
//                                     href={`https://github.com/${username}/${item.name}`}
//                                     target="_blank"
//                                     rel="noreferrer"
//                                     className="text-blue-500 hover:underline"
//                                   >
//                                     View on GitHub
//                                   </a>
//                                 </div>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                   {openProject !== item.name && (
//                     <IconButton
//                       aria-label="read more"
//                       onClick={() => handleReadMoreClick(item.name)}
//                       sx={{
//                         color: 'rgb(75, 0, 130)',
//                         cursor: 'pointer',
//                         fontSize: {
//                           xs: '0.875rem',
//                           sm: '1rem',
//                           md: '1.125rem',
//                         },
//                       }}
//                     >
//                       <Typography
//                         component="span"
//                         sx={{
//                           fontSize: {
//                             xs: '0.875rem',
//                             sm: '1rem',
//                             md: '1.125rem',
//                           },
//                         }}
//                       >
//                         Read More
//                       </Typography>
//                     </IconButton>
//                   )}
//                 </Box>
//                 <div className="flex justify-between text-black text-sm text-base-content text-opacity-60 truncate">
//                   <div>
//                     <span className="flex items-center ml-2 mb-2">
//                       <div
//                         className="w-3 h-3 rounded-full mr-1 opacity-100 text-sm sm:text-base md:text-md"
//                         style={{
//                           backgroundColor: getLanguageColor(item.language),
//                         }}
//                       />
//                       <span
//                         style={{
//                           color: 'black',
//                           fontFamily: 'Roboto Mono, monospace',
//                         }}
//                         className="text-sm sm:text-base md:text-md"
//                       >
//                         {item.language}
//                       </span>
//                     </span>
//                   </div>
//                 </div>
//               </Box>
//             </Card>
//           );
//         })}
//       </>
//     );
//   };

//   return (
//     <div
//       className="bg-white card flex compact italic  w-[95vw] mx-auto shadow shadow-[0_4px_8px_rgba(0,_0,_0,_0.5),_0_-4px_8px_rgba(0,_0,_0,_0.5)] items-center justify-between rounded-2xl relative z-10 shadow shadow-[0_4px_8px_rgba(0,_0,_0,_0.3),_0_-4px_8px_rgba(0,_0,_0,_0.3)]"
//       id={id}
//     >
//       <div className="flex flex-col p-4 gap-6 items-center">
//         <div className="flex flex-col py-4 px-4 md:py-8 md:px-8 relative z-10 w-full max-w-screen-lg">
//           <div className="flex flex-col items-center justify-center mb-4 text-center">
//             <h5 className="card-title text-black text-lg md:text-xl mb-2">
//               {loading ? (
//                 skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
//               ) : (
//                 <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500">
//                   {header}
//                 </span>
//               )}
//             </h5>
//             {loading ? (
//               skeleton({ widthCls: 'w-10', heightCls: 'h-5' })
//             ) : (
//               <a
//                 href={`https://github.com/${username}?tab=repositories`}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-sm sm:text-base md:text-md text-blue-500 hover:underline opacity-100"
//               >
//                 See All
//               </a>
//             )}
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 w-full">
//             {renderProjects()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GithubProjectCard;

import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DownloadIcon from '@mui/icons-material/Download';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled, keyframes, css } from 'styled-components';
import { getLanguageColor, skeleton } from '../../utils';
import { GithubProject } from '../../interfaces/github-project';
import SudokuImage from '../../assets/sudoku.png';
import FacebookImage from '../../assets/facebook.jpg';
import DiskUsageImage from '../../assets/parallel_computing.jpg';
import PlaceIpImage from '../../assets/place_ip.jpg';
import KeyboardEStoreImage from '../../assets/keyboard_e_store.jpg';
import FinvizApiImage from '../../assets/finvizapi.jpg';
import TradeSyncImage from '../../assets/trade_sync.jpg';
import ParkingJamImage from '../../assets/parking_jam.png';

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(0); }
  75% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

const GitHubIconButton = styled(IconButton)<{ isShaking: boolean }>`
  transition:
    transform 0.3s ease,
    color 0.3s ease;

  .MuiSvgIcon-root {
    color: rgb(75, 0, 130); /* Default color: indigo */
  }

  &:hover {
    transform: ${(props) =>
      props.isShaking ? 'translateX(-5px)' : 'translateX(0)'};
    animation: ${(props) =>
      props.isShaking
        ? css`
            ${shakeAnimation} 0.5s infinite
          `
        : 'none'};

    .MuiSvgIcon-root {
      color: black; /* Color on hover: black */
    }
  }
`;

// Styled component for DownloadRepoIconButton with custom isShaking prop
const DownloadRepoIconButton = styled(IconButton)<{ isShaking: boolean }>`
  transition:
    transform 0.3s ease,
    color 0.3s ease;

  .MuiSvgIcon-root {
    color: rgb(75, 0, 130);
  }

  &:hover {
    transform: ${(props) =>
      props.isShaking ? 'translateX(-5px)' : 'translateX(0)'};
    animation: ${(props) =>
      props.isShaking
        ? css`
            ${shakeAnimation} 0.5s infinite
          `
        : 'none'};

    .MuiSvgIcon-root {
      color: black;
    }
  }
`;

type ProjectStatus = 'completed' | 'in-progress' | 'new';

const imageMap: { [key: string]: string } = {
  DiskUsage: DiskUsageImage,
  'facebook-clone': FacebookImage,
  SudokuSolver: SudokuImage,
  'Place-IP': PlaceIpImage,
  'Keyboard-E-Store': KeyboardEStoreImage,
  webfinvizapi: FinvizApiImage,
  TradeSync: TradeSyncImage,
  JamGame: ParkingJamImage,
};

const GithubProjectCard = ({
  header,
  githubProjects,
  loading,
  limit,
  username,
  id,
}: {
  header: string;
  githubProjects: GithubProject[];
  loading: boolean;
  limit: number;
  username: string;
  id: string;
}) => {
  const [isShaking, setIsShaking] = useState(false);

  const handleMouseEnter = () => {
    setIsShaking(true);
  };

  const handleMouseLeave = () => {
    setIsShaking(false);
  };

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < limit; index++) {
      array.push(
        <div className="card shadow-2xl compact bg-base-100" key={index}>
          <div className="flex justify-between flex-col p-8 h-full w-full">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="card-title text-lg">
                    {skeleton({
                      widthCls: 'w-32',
                      heightCls: 'h-8',
                      className: 'mb-1',
                    })}
                  </h5>
                </span>
              </div>
              <div className="mb-5 mt-1">
                {skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-4',
                  className: 'mb-2',
                })}
                {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-grow">
                <span className="mr-3 flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const projectStatusMap: Record<string, ProjectStatus> = {
    SudokuSolver: 'completed',
    'facebook-clone': 'completed',
    webfinvizapi: 'completed',
    DiskUsage: 'completed',
    'Place-IP': 'completed',
    'Keyboard-E-Store': 'completed',
    JamGame: 'completed',
    TradeSync: 'in-progress',
  };

  const statusColorMap: Record<ProjectStatus, string> = {
    'in-progress': '#FFC107',
    completed: '#4CAF50',
    new: '#2196F3',
  };

  const renderProjects = () => {
    const handleDownload = (projectName: string) => {
      const downloadUrl = `https://github.com/acphotinakis/${projectName}/archive/refs/heads/main.zip`;
      window.open(downloadUrl, '_blank');
    };

    return (
      <>
        {githubProjects.map((item, index) => {
          // Select image based on item.name
          const imageUrl = imageMap[item.name] || 'path/to/default-image.jpg';
          const projectStatus = projectStatusMap[item.name];
          const statusColor = statusColorMap[projectStatus] || '#000000';

          return (
            <Card
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#ffffff',
                color: '#222222',
                marginBottom: 2,
                fontFamily: 'Roboto Mono, monospace',
                opacity: 1.0,
                boxShadow:
                  '0 4px 8px rgba(0, 0, 0, 0.3), 0 -4px 8px rgba(0, 0, 0, 0.3)',
                width: '100%',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '200px',
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  boxShadow: 'inherit',
                  padding: 2,
                  flexGrow: 1,
                  position: 'relative',
                }}
              >
                <CardContent
                  sx={{
                    flex: '1 0 auto',
                    padding: 0,
                  }}
                >
                  <Typography
                    component="div"
                    variant="h6"
                    fontFamily="Roboto Mono, monospace"
                    color="black"
                    sx={{
                      fontSize: {
                        xs: '0.875rem',
                        sm: '1rem',
                        md: '1.125rem',
                      },
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    component="div"
                    variant="h6"
                    fontFamily="Roboto Mono, monospace"
                    color="black"
                    sx={{
                      fontSize: {
                        xs: '0.875rem',
                        sm: '1rem',
                        md: '1.125rem',
                      },
                      position: 'absolute',
                      top: 8,
                      right: 15,
                      backgroundColor: statusColor,
                      padding: '2px 8px',
                      borderRadius: '10px',
                    }}
                  >
                    {projectStatus}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    color="black"
                    component="div"
                    fontFamily="Roboto Mono, monospace"
                    sx={{
                      fontSize: {
                        xs: '0.875rem',
                        sm: '1rem',
                        md: '1.125rem',
                      },
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    pl: 1,
                    pb: 1,
                    marginTop: 'auto',
                    fontSize: {
                      xs: '0.875rem',
                      sm: '1rem',
                      md: '1.125rem',
                    },
                  }}
                >
                  <IconButton
                    aria-label="previous"
                    sx={{
                      color: 'rgb(75, 0, 130)',
                      cursor: 'default',
                    }}
                  >
                    <SkipPreviousIcon
                      sx={{
                        color: 'inherit',
                        fontSize: {
                          xs: '0.875rem',
                          sm: '1rem',
                          md: '1.125rem',
                        },
                      }}
                    />
                  </IconButton>
                  <GitHubIconButton
                    aria-label="open github"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    isShaking={isShaking}
                    sx={{
                      color: 'inherit',
                      fontSize: {
                        xs: '0.875rem',
                        sm: '1rem',
                        md: '1.125rem',
                      },
                    }}
                  >
                    <a href={item.html_url} target="_blank" rel="noreferrer">
                      <GitHubIcon
                        sx={{
                          height: 38,
                          width: 38,
                          color: 'inherit',
                          fontSize: {
                            xs: '0.875rem',
                            sm: '1rem',
                            md: '1.125rem',
                          },
                        }}
                      />
                    </a>
                  </GitHubIconButton>

                  <IconButton
                    aria-label="next"
                    sx={{
                      color: 'rgb(75, 0, 130)',
                      cursor: 'default',
                      fontSize: {
                        xs: '0.875rem',
                        sm: '1rem',
                        md: '1.125rem',
                      },
                    }}
                  >
                    <SkipNextIcon
                      sx={{
                        color: 'inherit',
                        fontSize: {
                          xs: '0.875rem',
                          sm: '1rem',
                          md: '1.125rem',
                        },
                      }}
                    />
                  </IconButton>

                  <DownloadRepoIconButton
                    aria-label="download"
                    onClick={() => handleDownload(item.name)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    isShaking={isShaking}
                  >
                    <DownloadIcon
                      sx={{
                        color: 'inherit',
                        fontSize: {
                          xs: '0.875rem',
                          sm: '1rem',
                          md: '1.125rem',
                        },
                      }}
                    />
                  </DownloadRepoIconButton>
                </Box>
                <div className="flex justify-between text-black text-sm text-base-content text-opacity-60 truncate">
                  <div>
                    <span className="flex items-center ml-2 mb-2">
                      <div
                        className="w-3 h-3 rounded-full mr-1 opacity-100 text-sm sm:text-base md:text-md"
                        style={{
                          backgroundColor: getLanguageColor(item.language),
                        }}
                      />
                      <span
                        style={{
                          color: 'black',
                          fontFamily: 'Roboto Mono, monospace',
                        }}
                        className="text-sm sm:text-base md:text-md"
                      >
                        {item.language}
                      </span>
                    </span>
                  </div>
                </div>
              </Box>
            </Card>
          );
        })}
      </>
    );
  };

  return (
    <div
      className="bg-white card flex compact italic  w-[95vw] mx-auto shadow shadow-[0_4px_8px_rgba(0,_0,_0,_0.5),_0_-4px_8px_rgba(0,_0,_0,_0.5)] items-center justify-between rounded-2xl relative z-10 shadow shadow-[0_4px_8px_rgba(0,_0,_0,_0.3),_0_-4px_8px_rgba(0,_0,_0,_0.3)]"
      id={id}
    >
      <div className="flex flex-col p-4 gap-6 items-center">
        <div className="flex flex-col py-4 px-4 md:py-8 md:px-8 relative z-10 w-full max-w-screen-lg">
          <div className="flex flex-col items-center justify-center mb-4 text-center">
            <h5 className="card-title text-black text-lg md:text-xl mb-2">
              {loading ? (
                skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
              ) : (
                <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500">
                  {header}
                </span>
              )}
            </h5>
            {loading ? (
              skeleton({ widthCls: 'w-10', heightCls: 'h-5' })
            ) : (
              <a
                href={`https://github.com/${username}?tab=repositories`}
                target="_blank"
                rel="noreferrer"
                className="text-sm sm:text-base md:text-md text-blue-500 hover:underline opacity-100"
              >
                See All
              </a>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 w-full">
            {loading ? renderSkeleton() : renderProjects()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubProjectCard;
