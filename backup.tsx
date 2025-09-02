// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import DownloadIcon from '@mui/icons-material/Download';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import { getLanguageColor, skeleton } from '../../../utils';
// import { GithubProject } from '../../../interfaces/github-project';
// import { COLOR_SCHEMA } from '@/interfaces/colorSchema';
// import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// type ProjectStatus = 'completed' | 'in-progress' | 'new';

// export type IconProps = React.HTMLAttributes<SVGElement>;

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
//       <ResponsiveMasonry
//         columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
//         gutterBreakpoints={{ 350: '12px', 750: '16px', 900: '24px' }}
//       >
//         <Masonry>
//           {githubProjects.map((item) => {
//             const projectStatus = projectStatusMap[item.name] || 'new';
//             const statusColor =
//               statusColorMap[projectStatus] || COLOR_SCHEMA.accentBlue;

//             return (
//               <Card
//                 key={item.name}
//                 sx={{
//                   fontFamily: 'Roboto Mono, monospace',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   backgroundColor: COLOR_SCHEMA.cardBg,
//                   color: COLOR_SCHEMA.textPrimary,
//                   borderRadius: '16px',
//                   boxShadow: COLOR_SCHEMA.shadowDark,
//                   overflow: 'hidden',
//                   padding: 2,
//                   transition: 'transform 0.2s, box-shadow 0.2s',
//                   '&:hover': {
//                     transform: 'translateY(-5px)',
//                     boxShadow: COLOR_SCHEMA.shadowLight,
//                   },
//                 }}
//               >
//                 {/* Name */}
//                 <Typography
//                   variant="h6"
//                   fontFamily="Roboto Mono, monospace"
//                   color={COLOR_SCHEMA.textPrimary}
//                   sx={{ mb: 1 }}
//                 >
//                   {item.name}{' '}
//                   <span
//                     style={{
//                       backgroundColor: statusColor,
//                       color: COLOR_SCHEMA.textPrimary,
//                       fontSize: '0.7rem',
//                       padding: '2px 6px',
//                       borderRadius: '8px',
//                       marginLeft: '8px',
//                     }}
//                   >
//                     {projectStatus}
//                   </span>
//                 </Typography>

//                 {/* Description */}
//                 <Typography
//                   variant="body2"
//                   color={COLOR_SCHEMA.textSecondary}
//                   sx={{ mb: 2, fontFamily: 'Roboto Mono, monospace' }}
//                 >
//                   {item.description || 'No description'}
//                 </Typography>

//                 {/* Spacer */}
//                 <Box sx={{ mb: 1 }} />

//                 {/* Left side: Language & badges */}
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     flexWrap: 'wrap',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     gap: 1,
//                     mt: 2,
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       flexWrap: 'wrap',
//                       gap: 1,
//                       alignItems: 'center',
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: 0.5,
//                       }}
//                     >
//                       <div
//                         style={{
//                           width: 10,
//                           height: 10,
//                           borderRadius: '50%',
//                           backgroundColor: getLanguageColor(item.language),
//                         }}
//                       />
//                       <Typography
//                         sx={{
//                           fontSize: '0.75rem',
//                           color: COLOR_SCHEMA.textSecondary,
//                         }}
//                       >
//                         {item.language}
//                       </Typography>
//                     </Box>

//                     <Typography
//                       sx={{
//                         fontSize: '0.75rem',
//                         color: COLOR_SCHEMA.textPrimary,
//                         backgroundColor: COLOR_SCHEMA.accentRed,
//                         px: 1.5,
//                         py: 0.5,
//                         borderRadius: '8px',
//                         display: 'inline-block',
//                         fontFamily: 'Roboto Mono, monospace',
//                       }}
//                     >
//                       Created * {new Date(item.created_at).toLocaleDateString()}
//                     </Typography>

//                     <Typography
//                       sx={{
//                         fontSize: '0.75rem',
//                         color: COLOR_SCHEMA.textPrimary,
//                         backgroundColor: COLOR_SCHEMA.accentRed,
//                         px: 1.5,
//                         py: 0.5,
//                         borderRadius: '8px',
//                         display: 'inline-block',
//                         fontFamily: 'Roboto Mono, monospace',
//                       }}
//                     >
//                       Last Push *{' '}
//                       {new Date(item.pushed_at).toLocaleDateString()}
//                     </Typography>
//                   </Box>

//                   {/* Right side: Action icons */}
//                   <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
//                     <IconButton
//                       aria-label="GitHub"
//                       sx={{ color: COLOR_SCHEMA.accentRed }}
//                       onClick={() => window.open(item.html_url, '_blank')}
//                     >
//                       <GitHubIcon />
//                     </IconButton>
//                     <IconButton
//                       aria-label="Download"
//                       sx={{ color: COLOR_SCHEMA.accentRed }}
//                       onClick={() => handleDownload(item.name)}
//                     >
//                       <DownloadIcon />
//                     </IconButton>
//                     {item.homepage && (
//                       <IconButton
//                         aria-label="Homepage"
//                         sx={{ color: COLOR_SCHEMA.accentBlue }}
//                         onClick={() => window.open(item.homepage, '_blank')}
//                       >
//                         <SkipNextIcon />
//                       </IconButton>
//                     )}
//                   </Box>
//                 </Box>
//               </Card>
//             );
//           })}
//         </Masonry>
//       </ResponsiveMasonry>
//     );
//   };

//   // const renderProjects = () => {
//   //   const handleDownload = (projectName: string) => {
//   //     const downloadUrl = `https://github.com/acphotinakis/${projectName}/archive/refs/heads/main.zip`;
//   //     window.open(downloadUrl, '_blank');
//   //   };

//   //   return (
//   //     <>
//   //       {githubProjects.map((item) => {
//   //         const projectStatus = projectStatusMap[item.name] || 'new';
//   //         const statusColor =
//   //           statusColorMap[projectStatus] || COLOR_SCHEMA.accentBlue;

//   //         return (
//   //           <Card
//   //             key={item.name}
//   //             sx={{
//   //               fontFamily: 'Roboto Mono, monospace',
//   //               display: 'flex',
//   //               flexDirection: 'column',
//   //               backgroundColor: COLOR_SCHEMA.cardBg,
//   //               color: COLOR_SCHEMA.textPrimary,
//   //               borderRadius: '16px',
//   //               boxShadow: COLOR_SCHEMA.shadowDark,
//   //               overflow: 'hidden',
//   //               padding: 2,
//   //               transition: 'transform 0.2s, box-shadow 0.2s',
//   //               '&:hover': {
//   //                 transform: 'translateY(-5px)',
//   //                 boxShadow: COLOR_SCHEMA.shadowLight,
//   //               },
//   //             }}
//   //           >
//   //             {/* Name */}
//   //             <Typography
//   //               variant="h6"
//   //               fontFamily="Roboto Mono, monospace"
//   //               color={COLOR_SCHEMA.textPrimary}
//   //               sx={{ mb: 1 }}
//   //             >
//   //               {item.name}{' '}
//   //               <span
//   //                 style={{
//   //                   backgroundColor: statusColor,
//   //                   color: COLOR_SCHEMA.textPrimary,
//   //                   fontSize: '0.7rem',
//   //                   padding: '2px 6px',
//   //                   borderRadius: '8px',
//   //                   marginLeft: '8px',
//   //                 }}
//   //               >
//   //                 {projectStatus}
//   //               </span>
//   //             </Typography>

//   //             {/* Description */}
//   //             <Typography
//   //               variant="body2"
//   //               color={COLOR_SCHEMA.textSecondary}
//   //               sx={{ mb: 2, fontFamily: 'Roboto Mono, monospace' }}
//   //             >
//   //               {item.description || 'No description'}
//   //             </Typography>

//   //             {/* Break lines */}
//   //             <Box sx={{ mb: 1 }} />

//   //             {/* Links, Language, Created & Pushed */}
//   //             <Box
//   //               sx={{
//   //                 display: 'flex',
//   //                 flexWrap: 'wrap',
//   //                 justifyContent: 'space-between',
//   //                 alignItems: 'center',
//   //                 gap: 1,
//   //                 mt: 2,
//   //               }}
//   //             >
//   //               {/* Left side: Language & badges */}
//   //               <Box
//   //                 sx={{
//   //                   display: 'flex',
//   //                   flexWrap: 'wrap',
//   //                   gap: 1,
//   //                   alignItems: 'center',
//   //                 }}
//   //               >
//   //                 {/* Language */}
//   //                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
//   //                   <div
//   //                     style={{
//   //                       width: 10,
//   //                       height: 10,
//   //                       borderRadius: '50%',
//   //                       backgroundColor: getLanguageColor(item.language),
//   //                     }}
//   //                   />
//   //                   <Typography
//   //                     sx={{
//   //                       fontSize: '0.75rem',
//   //                       color: COLOR_SCHEMA.textSecondary,
//   //                     }}
//   //                   >
//   //                     {item.language}
//   //                   </Typography>
//   //                 </Box>

//   //                 {/* Created & Pushed */}
//   //                 <Typography
//   //                   sx={{
//   //                     fontSize: '0.75rem',
//   //                     color: COLOR_SCHEMA.textPrimary,
//   //                     backgroundColor: COLOR_SCHEMA.accentRed,
//   //                     px: 1.5,
//   //                     py: 0.5,
//   //                     borderRadius: '8px',
//   //                     display: 'inline-block',
//   //                     fontFamily: 'Roboto Mono, monospace',
//   //                   }}
//   //                 >
//   //                   Created * {new Date(item.created_at).toLocaleDateString()}
//   //                 </Typography>

//   //                 <Typography
//   //                   sx={{
//   //                     fontSize: '0.75rem',
//   //                     color: COLOR_SCHEMA.textPrimary,
//   //                     backgroundColor: COLOR_SCHEMA.accentRed,
//   //                     px: 1.5,
//   //                     py: 0.5,
//   //                     borderRadius: '8px',
//   //                     display: 'inline-block',
//   //                     fontFamily: 'Roboto Mono, monospace',
//   //                   }}
//   //                 >
//   //                   Last Push * {new Date(item.pushed_at).toLocaleDateString()}
//   //                 </Typography>
//   //               </Box>

//   //               {/* Right side: Action icons */}
//   //               <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
//   //                 <IconButton
//   //                   aria-label="GitHub"
//   //                   sx={{ color: COLOR_SCHEMA.accentRed }}
//   //                   onClick={() => window.open(item.html_url, '_blank')}
//   //                 >
//   //                   <GitHubIcon />
//   //                 </IconButton>
//   //                 <IconButton
//   //                   aria-label="Download"
//   //                   sx={{ color: COLOR_SCHEMA.accentRed }}
//   //                   onClick={() => handleDownload(item.name)}
//   //                 >
//   //                   <DownloadIcon />
//   //                 </IconButton>
//   //                 {item.homepage && (
//   //                   <IconButton
//   //                     aria-label="Homepage"
//   //                     sx={{ color: COLOR_SCHEMA.accentBlue }}
//   //                     onClick={() => window.open(item.homepage, '_blank')}
//   //                   >
//   //                     <SkipNextIcon />
//   //                   </IconButton>
//   //                 )}
//   //               </Box>
//   //             </Box>
//   //           </Card>
//   //         );
//   //       })}
//   //     </>
//   //   );
//   // };

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
//           <div className="grid w-full grid-cols-1 sm:grid-cols-1 gap-7">
//             {loading ? renderSkeleton() : renderProjects()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GithubProjectCard;
