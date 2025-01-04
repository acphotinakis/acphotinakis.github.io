// // StockNewsTable.tsx
// import {
//     Card,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
// } from '@mui/material';
// import * as finnhub from 'finnhub';
// import { useEffect, useState } from 'react';

// const StockNewsTable = ({ loading, id }: { loading: boolean; id: string }) => {
//   const [companyNews, setCompanyNews] = useState<finnhub.CompanyNews[] | null>(
//     null,
//   );
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const api_key = finnhub.ApiClient.instance.authentications['api_key'];
//         api_key.apiKey = 'cpkt1opr01qulsvjo5hgcpkt1opr01qulsvjo5i0';
//         const finnhubClient = new finnhub.DefaultApi();

//         // Define the request parameters
//         const symbol = 'AAPL';
//         const from = '2024-10-19';
//         const to = '2024-10-19';

//         // Construct the request URL
//         const requestUrl = `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${from}&to=${to}`;

//         // Print the request URL
//         console.log('Request URL:', requestUrl);

//         // Call the getCompanyNews function
//         finnhubClient.companyNews(symbol, from, to, (error, data, response) => {
//           // Always print the error, data, and response
//           console.log('Error:', error);
//           console.log('Data:', data);
//           console.log('Response:', response);

//           if (error) {
//             setError(
//               error instanceof Error ? error.message : 'Unknown error occurred',
//             );
//           } else {
//             console.log('setCompanyNews --> ' + response);
//             console.log('Request URL:', requestUrl);
//             const companyData: finnhub.CompanyNews[] | null = data;
//             setCompanyNews(companyData || null);
//           }
//         });
//       } catch (err) {
//         console.error('Error fetching data:', err);
//         setError('Failed to fetch data.');
//       }
//     };

//     fetchData();
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="h-screen flex justify-center items-center text-white">
//       <div className="p-8 h-full w-full max-w-xl relative">
//         <TableContainer
//           component={Card}
//           sx={{ backgroundColor: 'rgb(139,146,154)', color: '#ffffff' }}
//         >
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Category</TableCell>
//                 <TableCell>Date</TableCell>
//                 <TableCell>Headline</TableCell>
//                 <TableCell>Source</TableCell>
//                 <TableCell>Related Ticker</TableCell>
//                 <TableCell>Link</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {companyNews?.map((news) => (
//                 <TableRow key={news.id}>
//                   <TableCell>{news.category}</TableCell>
//                   <TableCell>
//                     {new Date(news.datetime * 1000).toLocaleDateString()}
//                   </TableCell>
//                   <TableCell>{news.headline}</TableCell>
//                   <TableCell>{news.source}</TableCell>
//                   <TableCell>{news.related}</TableCell>
//                   <TableCell>
//                     <a
//                       href={news.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-500"
//                     >
//                       Read More
//                     </a>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     </div>
//   );
// };

// export default StockNewsTable;
