
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
// import { getLanguageColor, skeleton } from '../../../utils';
// import { GithubProject } from '../../../interfaces/github-project';
// import SudokuImage from '../../../assets/sudoku.png';
// import FacebookImage from '../../../assets/facebook.jpg';
// import DiskUsageImage from '../../../assets/parallel_computing.jpg';
// import RadixIpImage from '../../../assets/place_ip.jpg';
// import KeyboardEStoreImage from '../../../assets/keyboard_e_store.jpg';
// import FinvizApiImage from '../../../assets/finvizapi.jpg';
// import TradeSyncImage from '../../../assets/trade_sync.jpg';
// import ParkingJamImage from '../../../assets/parking_jam.png';
// import SecureCommImage from '../../../assets/security-869216_1280.jpg';
// import ParallelUniverseImage from '../../../assets/space-6377928_1280.jpg';
// import { COLOR_SCHEMA } from '@/interfaces/colorSchema';

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
//     color: white; /* Default color: indigo */
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
//       color: white; /* Color on hover: black */
//     }
//   }
// `;

// // Styled component for DownloadRepoIconButton with custom isShaking prop
// const DownloadRepoIconButton = styled(IconButton)<{ isShaking: boolean }>`
//   transition:
//     transform 0.3s ease,
//     color 0.3s ease;

//   .MuiSvgIcon-root {
//     color: white;
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
//       color: white;
//     }
//   }
// `;

// type ProjectStatus = 'completed' | 'in-progress' | 'new';

// export type IconProps = React.HTMLAttributes<SVGElement>;

// const imageMap: { [key: string]: string } = {
//   DiskUsage: DiskUsageImage,
//   'facebook-clone': FacebookImage,
//   SudokuSolver: SudokuImage,
//   RadixIP: RadixIpImage,
//   'Keyboard-E-Store': KeyboardEStoreImage,
//   webfinvizapi: FinvizApiImage,
//   TradeSync: TradeSyncImage,
//   JamGame: ParkingJamImage,
//   SecureComm: SecureCommImage,
//   CipherPrimes: ParallelUniverseImage,
// };

// const GithubProjectCard = ({
//   githubProjects,
//   loading,
//   limit,
//   username,
//   id,
// }: {
//   githubProjects: GithubProject[];
//   loading: boolean;
//   limit: number;
//   username: string;
//   id: string;
// }) => {
//   console.log('PASSESD REPO DATA:', JSON.stringify(githubProjects, null, 2));

//   const [isShaking, setIsShaking] = useState(false);

//   const handleMouseEnter = () => {
//     setIsShaking(true);
//   };

//   const handleMouseLeave = () => {
//     setIsShaking(false);
//   };

//   const renderSkeleton = () => {
//     const array = [];
//     for (let index = 0; index < limit; index++) {
//       array.push(
//         <div className="bg-black shadow-2xl card compact" key={index}>
//           <div className="flex flex-col justify-between w-full h-full p-8">
//             <div>
//               <div className="flex items-center">
//                 <span>
//                   <h5 className="text-lg card-title">
//                     {skeleton({
//                       widthCls: 'w-32',
//                       heightCls: 'h-8',
//                       className: 'mb-1',
//                     })}
//                   </h5>
//                 </span>
//               </div>
//               <div className="mt-1 mb-5">
//                 {skeleton({
//                   widthCls: 'w-full',
//                   heightCls: 'h-4',
//                   className: 'mb-2',
//                 })}
//                 {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
//               </div>
//             </div>
//             <div className="flex justify-between">
//               <div className="flex flex-grow">
//                 <span className="flex items-center mr-3">
//                   {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
//                 </span>
//                 <span className="flex items-center">
//                   {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
//                 </span>
//               </div>
//               <div>
//                 <span className="flex items-center">
//                   {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>,
//       );
//     }

//     return array;
//   };

//   const projectStatusMap: Record<string, ProjectStatus> = {
//     SudokuSolver: 'completed',
//     'facebook-clone': 'completed',
//     webfinvizapi: 'completed',
//     DiskUsage: 'completed',
//     'Place-IP': 'completed',
//     'Keyboard-E-Store': 'completed',
//     JamGame: 'completed',
//     TradeSync: 'in-progress',
//     SecureComm: 'completed',
//     CipherPrimes: 'completed',
//   };

//   const statusColorMap: Record<ProjectStatus, string> = {
//     'in-progress': '#FFC107',
//     completed: '#4CAF50',
//     new: '#2196F3',
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
//           const projectStatus = projectStatusMap[item.name];
//           const statusColor = statusColorMap[projectStatus] || '#000000';

//           return (
//             <Card
//               key={index}
//               sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 backgroundColor: 'black', // Set background to black
//                 color: 'white', // Set text color to white
//                 marginBottom: 2,
//                 fontFamily: 'Roboto Mono, monospace',
//                 opacity: 1.0,
//                 boxShadow:
//                   '0 4px 8px rgba(0, 0, 0, 0.3), 0 -4px 8px rgba(0, 0, 0, 0.3)',
//                 width: '100%',
//                 border: '1px solid white', // Add thin white border
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
//                   flexGrow: 1,
//                   position: 'relative',
//                 }}
//               >
//                 <CardContent
//                   sx={{
//                     flex: '1 0 auto',
//                     padding: 0,
//                   }}
//                 >
//                   <Typography
//                     component="div"
//                     variant="h6"
//                     fontFamily="Roboto Mono, monospace"
//                     color="white"
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
//                     component="div"
//                     variant="h6"
//                     fontFamily="Roboto Mono, monospace"
//                     color="white"
//                     sx={{
//                       fontSize: {
//                         xs: '0.875rem',
//                         sm: '1rem',
//                         md: '1.125rem',
//                       },
//                       position: 'absolute',
//                       top: 8,
//                       right: 15,
//                       backgroundColor: statusColor,
//                       padding: '2px 8px',
//                       borderRadius: '10px',
//                     }}
//                   >
//                     {projectStatus}
//                   </Typography>

//                   <Typography
//                     variant="subtitle1"
//                     color="white"
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
//                     marginTop: 'auto',
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
//                       color: 'white',
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
//                       color: 'white',
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
//                           color: 'white',
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
//                       color: 'white',
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
//                         color: 'white',
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
//                         color: 'white',
//                         fontSize: {
//                           xs: '0.875rem',
//                           sm: '1rem',
//                           md: '1.125rem',
//                         },
//                       }}
//                     />
//                   </DownloadRepoIconButton>
//                 </Box>
//                 <div className="flex justify-between text-sm text-white truncate text-opacity-60">
//                   <div>
//                     <span className="flex items-center mb-2 ml-2">
//                       <div
//                         className="w-3 h-3 mr-1 text-sm rounded-full opacity-100 sm:text-base md:text-md"
//                         style={{
//                           backgroundColor: getLanguageColor(item.language),
//                         }}
//                       />
//                       <span
//                         style={{
//                           color: 'white',
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
//       className="bg-[#2C2C25] card flex w-full max-w-5xl mx-auto shadow-lg shadow-black/50 rounded-2xl overflow-hidden h-auto"
//       id={id}
//       style={{
//         backgroundColor: COLOR_SCHEMA.cardBg,
//         boxShadow: `0 4px 15px rgba(0,0,0,0.5)`,
//       }}
//     >
//       <div className="flex flex-col items-center gap-6 p-4">
//         <div className="relative z-10 flex flex-col w-full max-w-screen-lg px-4 py-4 md:py-8 md:px-8">
//           <div className="flex flex-col items-center justify-center mb-4 text-center">
//             <h5 className="text-lg text-center text-[#F5F5F5] card-title md:text-xl mb-6">
//               <span className="block text-center border-t-2 border-b-2 border-[#E53935] py-1">
//                 Github Projects
//               </span>
//             </h5>
//             {loading ? (
//               skeleton({ widthCls: 'w-10', heightCls: 'h-5' })
//             ) : (
//               <a
//                 href={`https://github.com/${username}?tab=repositories`}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-sm opacity-100 sm:text-base md:text-md hover:underline"
//                 style={{ color: COLOR_SCHEMA.accentRed }}
//               >
//                 See All
//               </a>
//             )}
//           </div>
//           <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-7">
//             {loading ? renderSkeleton() : renderProjects()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GithubProjectCard;
