// // import { useState } from 'react';
// import { skeleton } from '../../utils';
// import OptionsPLJson from '../../data/OptionsPlTable.json';
// import dayjs from 'dayjs';
// import { useState } from 'react';

// interface OptionsPlRow {
//   Ticker: string;
//   'Entry Type': string;
//   'Strike Price': string;
//   'Trade Date': string;
//   Action: string;
//   'Expiration Date': string;
//   EntryDescription: string;
//   EntryQuantity: string;
//   EntryPrice: string;
//   EntryAmount: string;
//   ExitTicker: string;
//   'Exit Date': string;
//   ExitAction: string;
//   'ExitExpiration Date': string;
//   ExitStrikePrice: string;
//   'Exit Type': string;
//   ExitDescription: string;
//   ExitQuantity: string;
//   ExitPrice: string;
//   ExitAmount: string;
//   'TradeP/L': string;
//   'Realized P/L %': string;
//   [key: string]: string | number;
// }

// const SharesOrderTable = ({
//   loading,
//   id,
// }: {
//   loading: boolean;
//   id: string;
// }) => {
//   const excludeColumns = [
//     // 'Strike Price',
//     'ExitOptionType',
//     'ExitStrikePrice',
//     'EntryQuantity',
//     'EntryPrice',
//     'EntryAmount',
//     'ExitTicker',
//     'ExitExpiration Date',
//     'ExitDescription',
//     'ExitAmount',
//     'ExitPrice',
//     'EntryDescription',
//     'ExitQuantity',
//     'TradeP/L',
//     'EntryAction',
//     'Action',
//     'ExitAction',
//   ];

//   const columns = OptionsPLJson[0]
//     ? Object.keys(OptionsPLJson[0] as OptionsPlRow).filter(
//         (column) => !excludeColumns.includes(column),
//       )
//     : [];

//   const [selectedColumns, setSelectedColumns] = useState<string[]>(columns);
//   const [sortColumn, setSortColumn] = useState<string | null>(null);
//   const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | 'none'>(
//     'none',
//   );
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleColumnSelection = (column: string) => {
//     setSelectedColumns((prev) =>
//       prev.includes(column)
//         ? prev.filter((col) => col !== column)
//         : [...prev, column],
//     );
//   };

//   const sortedData = [...OptionsPLJson].sort(
//     (a: OptionsPlRow, b: OptionsPlRow) => {
//       if (sortDirection === 'none') return 0;
//       if (!sortColumn) return 0;

//       // Helper function to parse date strings
//       const parseDate = (dateStr: string) => new Date(dateStr).getTime();

//       // Helper function to parse currency strings
//       const parseCurrency = (currencyStr: string) =>
//         parseFloat(currencyStr.replace(/[^0-9.-]+/g, ''));

//       // Helper function to parse percentage strings
//       const parsePercentage = (percentStr: string) =>
//         parseFloat(percentStr.replace('%', ''));

//       const aValue = a[sortColumn];
//       const bValue = b[sortColumn];

//       // Determine type of column and parse values accordingly
//       let aParsedValue, bParsedValue;

//       switch (sortColumn) {
//         case 'Ticker':
//           aParsedValue = aValue as string;
//           bParsedValue = bValue as string;
//           break;

//         case 'Trade Date':
//         case 'Expiration Date':
//         case 'Exit Date':
//           // Handle date columns
//           aParsedValue = parseDate(aValue as string);
//           bParsedValue = parseDate(bValue as string);
//           break;

//         case 'Entry Type':
//           // Handle concatenated columns
//           aParsedValue = `${a['Action']} - ${a['Entry Type']}`;
//           bParsedValue = `${b['Action']} - ${b['Entry Type']}`;
//           break;

//         case 'Exit Type':
//           // Handle concatenated columns
//           aParsedValue = `${a['Exit Action']} - ${a['Exit Type']}`;
//           bParsedValue = `${b['Exit Action']} - ${b['Exit Type']}`;
//           break;

//         case 'Strike Price':
//           // Handle currency columns
//           aParsedValue = parseCurrency(aValue as string);
//           bParsedValue = parseCurrency(bValue as string);
//           break;

//         case 'TradeP/L':
//         case 'Realized P/L %':
//           // Handle percentage columns
//           aParsedValue = parsePercentage(aValue as string);
//           bParsedValue = parsePercentage(bValue as string);
//           break;

//         default:
//           // Handle default case (assuming string or number)
//           aParsedValue = aValue;
//           bParsedValue = bValue;
//           break;
//       }

//       // Compare parsed values based on sort direction
//       if (
//         typeof aParsedValue === 'number' &&
//         typeof bParsedValue === 'number'
//       ) {
//         return sortDirection === 'asc'
//           ? aParsedValue - bParsedValue
//           : bParsedValue - aParsedValue;
//       } else if (
//         typeof aParsedValue === 'string' &&
//         typeof bParsedValue === 'string'
//       ) {
//         return sortDirection === 'asc'
//           ? aParsedValue.localeCompare(bParsedValue)
//           : bParsedValue.localeCompare(aParsedValue);
//       }

//       return 0;
//     },
//   );

//   // Calculate the average Realized P/L %
//   const tradePLSum = sortedData.reduce((sum: number, row: OptionsPlRow) => {
//     const value = parseFloat(row['Realized P/L %']);
//     return sum + (isNaN(value) ? 0 : value * 100);
//   }, 0);

//   const tradePLCount = sortedData.length;
//   const averageTradePL =
//     tradePLCount > 0 ? (tradePLSum / tradePLCount).toFixed(2) : '0.00';

//   // Function to calculate the average trade length
//   const calculateAverageTradeLength = (data: OptionsPlRow[]) => {
//     if (data.length === 0) return 0;

//     const totalDays = data.reduce((acc, row) => {
//       const TradeDate = dayjs(row['Trade Date']);
//       const ExitDate = dayjs(row['Exit Date']);
//       return acc + ExitDate.diff(TradeDate, 'day');
//     }, 0);

//     return totalDays / data.length;
//   };

//   // Example usage
//   const averageTradeLength = calculateAverageTradeLength(sortedData);

//   // Function to find the most traded ticker symbol
//   const findMostTradedTicker = (data: OptionsPlRow[]) => {
//     const tickerCounts: { [ticker: string]: number } = {};

//     data.forEach((row) => {
//       const Ticker = row.Ticker;
//       const exitTicker = row.ExitTicker;

//       // Count both entry and exit tickers
//       tickerCounts[Ticker] = (tickerCounts[Ticker] || 0) + 1;
//       tickerCounts[exitTicker] = (tickerCounts[exitTicker] || 0) + 1;
//     });

//     const mostTradedTicker = Object.keys(tickerCounts).reduce(
//       (maxTicker, ticker) => {
//         return tickerCounts[ticker] > (tickerCounts[maxTicker] || 0)
//           ? ticker
//           : maxTicker;
//       },
//       '',
//     );

//     return mostTradedTicker;
//   };

//   // Example usage
//   const mostTradedTicker = findMostTradedTicker(sortedData);

//   const getCellBackgroundColor = (
//     column: string,
//     value: string,
//     row: OptionsPlRow,
//   ): string => {
//     // Helper function to handle 'Realized P/L %' column
//     const getRealizedPLBackgroundColor = (percent: number) => {
//       if (percent > 0) return 'bg-[#3fb950] text-white border rounded-xl';
//       if (percent < 0) return 'bg-[#FB5057] text-white border rounded-xl';
//       return 'bg-[#A9A9A9] text-white border rounded-xl';
//     };

//     // Helper function to handle 'Action' column
//     const getActionBackgroundColor = (action: string) => {
//       if (action === 'Buy') return 'bg-[#4a90e2] text-white border rounded-xl';
//       if (action === 'Sell') return 'bg-[#f5a623] text-white border rounded-xl';
//       return '';
//     };

//     // Helper function to handle 'Entry Type' and 'Exit Type' columns
//     const getEntryExitTypeBackgroundColor = (
//       column: string,
//       entryType: string,
//       exitAction?: string,
//     ) => {
//       if (column === 'Exit Type' && exitAction === 'ExpiredOTM') {
//         return 'bg-[#9b59b6] text-white border rounded-xl';
//       }
//       if (entryType === 'C') return 'bg-[#3498db] text-white border rounded-xl';
//       if (entryType === 'P') return 'bg-[#8e44ad] text-white border rounded-xl';
//       return '';
//     };

//     // Main logic to determine the background color based on the column
//     switch (column) {
//       case 'Realized P/L %': {
//         const percent = parseFloat(value);
//         return getRealizedPLBackgroundColor(percent);
//       }

//       case 'Action': {
//         return getActionBackgroundColor(value);
//       }

//       case 'Entry Type':
//       case 'Exit Type': {
//         return getEntryExitTypeBackgroundColor(column, value, row.ExitAction);
//       }

//       default: {
//         return '';
//       }
//     }
//   };

//   // Helper function to handle 'Realized P/L %' column
//   const formatRealizedPLPercentage = (value: string) => {
//     const percent = parseFloat(value);
//     return (percent * 100).toFixed(2) + '%';
//   };

//   // Helper function to handle 'Entry Type' and 'Exit Type' columns
//   const formatType = (
//     column: string,
//     value: string,
//     action: string,
//     exitAction?: string,
//   ) => {
//     let fixedAction = '';

//     // Determine fixedAction based on column type
//     if (column === 'Entry Type') {
//       if (action === 'BTO') {
//         fixedAction = 'Buy to Open';
//       } else if (action === 'STO') {
//         fixedAction = 'Sell to Open';
//       }
//     } else if (column === 'Exit Type') {
//       if (exitAction === 'STC') {
//         fixedAction = 'Sell to Close';
//       } else if (exitAction === 'BTC') {
//         fixedAction = 'Buy to Close';
//       } else if (exitAction === 'ExpiredOTM') {
//         fixedAction = 'ExpiredOTM';
//       }
//     }

//     // Determine suffix based on value
//     let suffix = '';
//     if (value === 'C') {
//       suffix = 'Call';
//     } else if (value === 'P') {
//       suffix = 'Put';
//     }

//     return `${fixedAction} - ${suffix}`;
//   };

//   // Main function to get cell text based on column
//   const getCellText = (
//     column: string,
//     value: string,
//     row: OptionsPlRow,
//   ): string => {
//     switch (column) {
//       case 'Realized P/L %':
//         return formatRealizedPLPercentage(value);

//       case 'Entry Type':
//         return formatType(column, value, row.Action);

//       case 'Exit Type':
//         return formatType(column, value, row.ExitAction, row.ExitAction);

//       case 'Ticker':
//         return '$' + value;

//       default:
//         return value;
//     }
//   };

//   // Ensure `averageTradePL` is parsed as a float
//   const parsedAverageTradePL = parseFloat(averageTradePL);

//   // Determine the background color and arrow based on the parsed value
//   const getAvgTradePlBG = (value: GLfloat) => {
//     if (value > 0) return 'bg-[#3fb950]';
//     if (value < 0) return 'bg-[#FB5057]';
//     return 'bg-[#A9A9A9]';
//   };

//   const getAvgTradePlArrow = (value: GLfloat) => {
//     if (value > 0) return '▲'; // Up arrow for positive
//     if (value < 0) return '▼'; // Down arrow for negative
//     return '►'; // Side arrow for zero
//   };

//   const getNextSortDirection = (currentDirection: string) => {
//     switch (currentDirection) {
//       case 'asc':
//         return 'desc';
//       case 'desc':
//         return 'none';
//       default:
//         return 'asc';
//     }
//   };

//   const handleClick = (column: string) => {
//     if (sortColumn === column) {
//       setSortDirection(getNextSortDirection(sortDirection));
//     } else {
//       setSortColumn(column);
//       setSortDirection('asc');
//     }
//   };
//   const getButtonClassName = (column: string) => {
//     if (sortColumn === column) {
//       switch (sortDirection) {
//         case 'asc':
//           return 'bg-blue-700 text-white';
//         case 'desc':
//           return 'bg-[#FF5F15] text-white';
//         default:
//           return 'bg-black text-white';
//       }
//     }
//     return 'bg-black text-white';
//   };

//   const getSortDirectionIcon = (column: string) => {
//     if (sortColumn === column) {
//       switch (sortDirection) {
//         case 'asc':
//           return '↑';
//         case 'desc':
//           return '↓';
//         case 'none':
//           return '→';
//       }
//     }
//     return '→';
//   };

//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//   return (
//     <div
//       className="card shadow shadow-[0_4px_8px_rgba(0,_0,_0,_0.5),_0_-4px_8px_rgba(0,_0,_0,_0.5)] compact italic w-full max-w-full rounded-2xl items-center mb-5 py-8"
//       id={id}
//     >
//       <div className="card-body flex flex-col items-center py-8 px-8 relative z-10">
//         <div className="flex flex-col items-center mb-6">
//           {loading ? (
//             skeleton({ widthCls: 'w-max', heightCls: 'h-8' })
//           ) : (
//             <>
//               <h5 className="card-title text-black text-lg md:text-xl text-center">
//                 <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500 block">
//                   Stock Options Ledger
//                 </span>
//               </h5>
//               <div className="mt-4 text-black grid grid-cols-1 gap-4 md:grid-cols-3 border-b-4 border-blue-500 py-2">
//                 <div className="flex flex-col items-center justify-center text-center">
//                   <strong className="mb-2">Average Realized P/L %:</strong>
//                   <div
//                     className={`flex items-center justify-center px-3 py-1 rounded-lg text-white ${getAvgTradePlBG(parsedAverageTradePL)}`}
//                   >
//                     <span className="mr-2">
//                       {getAvgTradePlArrow(parsedAverageTradePL)}
//                     </span>
//                     <span>{parsedAverageTradePL.toFixed(2)}%</span>
//                   </div>
//                 </div>

//                 <div className="flex flex-col items-center justify-center text-center">
//                   <strong className="mb-2">Average Trade Length:</strong>
//                   <span>{averageTradeLength.toFixed(2)} days</span>
//                 </div>

//                 <div className="flex flex-col items-center justify-center text-center">
//                   <strong className="mb-2">Most Traded Ticker Symbol:</strong>
//                   <span>${mostTradedTicker}</span>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>

//         <div className="relative w-full">
//           <button
//             onClick={toggleDropdown}
//             className="px-4 py-2 border rounded-md bg-gray-200 text-black"
//           >
//             Select Columns
//           </button>
//           {isDropdownOpen && (
//             <div className="absolute top-12 left-0 bg-white border rounded-md shadow-lg z-10">
//               {columns.map((column) => (
//                 <label key={column} className="block px-4 py-2">
//                   <input
//                     type="checkbox"
//                     checked={selectedColumns.includes(column)}
//                     onChange={() => handleColumnSelection(column)}
//                     className="mr-2"
//                   />
//                   {column}
//                 </label>
//               ))}
//             </div>
//           )}
//         </div>
//         <div
//           className="overflow-x-auto w-full rounded-2xl shadow shadow-[0_4px_8px_rgba(0,_0,_0,_0.3),_0_-4px_8px_rgba(0,_0,_0,_0.3)]"
//           style={{
//             border: '2px solid black',
//           }}
//         >
//           <div className="max-h-[500px] overflow-y-auto rounded-2xl">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead
//                 className="sticky top-0 z-10"
//                 style={{
//                   backgroundColor: 'black',
//                   color: 'white',
//                   borderRadius: '0.5rem',
//                 }}
//               >
//                 <tr>
//                   {selectedColumns.map((column) => (
//                     <th
//                       key={column}
//                       className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
//                     >
//                       <button
//                         className={`flex items-center ${getButtonClassName(column)}`}
//                         onClick={() => handleClick(column)}
//                       >
//                         {column}
//                         <span className="ml-2 text-xs">
//                           {getSortDirectionIcon(column)}
//                         </span>
//                       </button>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {sortedData.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={columns.length}
//                       className="px-7 py-4 text-center text-sm font-medium text-gray-500 border border-gray-300"
//                     >
//                       No results
//                     </td>
//                   </tr>
//                 ) : (
//                   sortedData.map((row: OptionsPlRow, index: number) => (
//                     <tr key={index} className="border-b border-gray-300">
//                       {columns.map((column) => (
//                         <td
//                           key={column}
//                           className="px-7 py-3 whitespace-nowrap"
//                         >
//                           <div
//                             className={`${getCellBackgroundColor(column, row[column].toString(), row)} text-black items-center text-center py-1 px-2 rounded-lg`}
//                           >
//                             {getCellText(column, row[column].toString(), row)}
//                           </div>
//                         </td>
//                       ))}
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SharesOrderTable;

// // import React, { useState } from 'react';
// // import { skeleton } from '../../utils';
// // import SharesOrderJson from '../../data/SharesOrderTable.json';

// // interface SharesOrderRow {
// //   [key: string]: string | number;
// // }

// // const SharesOrderTable = ({
// //   loading,
// //   id,
// // }: {
// //   loading: boolean;
// //   id: string;
// // }) => {
// //   // Define the columns to exclude
// //   const excludeColumns = ['ExpDate', 'Strike Price', 'OptionType'];

// //   // Columns are assumed to be keys in the first object of the JSON data
// //   const columns = SharesOrderJson[0]
// //     ? Object.keys(SharesOrderJson[0] as SharesOrderRow).filter(
// //         (column) => !excludeColumns.includes(column),
// //       )
// //     : [];

// //   // State for filter and sort
// //   const [filter, setFilter] = useState({
// //     price: '',
// //     amount: '',
// //     quantity: '',
// //     description: '',
// //     action: '',
// //     tradeDateMonth: '',
// //     tradeDateYear: '',
// //     ticker: '',
// //   });

// //   const [sortColumn, setSortColumn] = useState<string | null>(null);
// //   const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | 'none'>(
// //     'none',
// //   );

// //   // Function to get cell background color based on action
// //   const getCellBackgroundColor = (column: string, value: string | number) => {
// //     if (column === 'Action') {
// //       if (value === 'Buy') return 'bg-green-100'; // Light green background
// //       if (value === 'Sell') return 'bg-red-100'; // Light red background
// //     }
// //     return '';
// //   };

// //   // Filter data based on user input
// //   const filteredData = SharesOrderJson.filter((row: SharesOrderRow) => {
// //     const {
// //       price,
// //       amount,
// //       quantity,
// //       description,
// //       action,
// //       tradeDateMonth,
// //       tradeDateYear,
// //       ticker,
// //     } = filter;

// //     // Filter by trade date
// //     const tradeDate = new Date(row['TradeDate'] as string);
// //     const tradeMonth = tradeDate.getMonth() + 1; // Months are 0-based in JS
// //     const tradeYear = tradeDate.getFullYear();

// //     return (
// //       (price === '' || (row['Price'] as string).includes(price)) &&
// //       (amount === '' || (row['Amount'] as string).includes(amount)) &&
// //       (quantity === '' || (row['Quantity'] as string).includes(quantity)) &&
// //       (description === '' ||
// //         (row['Description'] as string).includes(description)) &&
// //       (action === '' ||
// //         (row['Action'] as string).toLowerCase() === action.toLowerCase()) &&
// //       (tradeDateMonth === '' || tradeMonth === parseInt(tradeDateMonth, 10)) &&
// //       (tradeDateYear === '' || tradeYear === parseInt(tradeDateYear, 10)) &&
// //       (ticker === '' || (row['Ticker '] as string).includes(ticker))
// //     );
// //   });

// //   // Sort data based on user input
// //   const sortedData = filteredData.sort(
// //     (a: SharesOrderRow, b: SharesOrderRow) => {
// //       if (sortDirection === 'none') return 0;
// //       if (!sortColumn) return 0;
// //       const aValue = a[sortColumn];
// //       const bValue = b[sortColumn];

// //       if (typeof aValue === 'string' && typeof bValue === 'string') {
// //         return sortDirection === 'asc'
// //           ? aValue.localeCompare(bValue)
// //           : bValue.localeCompare(aValue);
// //       }

// //       if (typeof aValue === 'number' && typeof bValue === 'number') {
// //         return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
// //       }

// //       return 0;
// //     },
// //   );

// //   // Function to calculate P/L and P/L%
// //   const calculatePL = (data: SharesOrderRow[]) => {
// //     const result: Record<string, { pl: number; plPercentage: number }> = {};

// //     data.forEach((row) => {
// //       const ticker = row['Ticker '] as string;
// //       const action = row['Action'] as string;
// //       const quantity = parseFloat(row['Quantity'] as string);
// //       const amount = parseFloat(
// //         (row['Amount'] as string).replace('$', '').replace(',', ''),
// //       );
// //       const price = parseFloat(
// //         (row['Price'] as string).replace('$', '').replace(',', ''),
// //       );

// //       if (!result[ticker]) {
// //         result[ticker] = { pl: 0, plPercentage: 0 };
// //       }

// //       if (action === 'Buy') {
// //         result[ticker].pl -= amount; // Subtract total cost for buys
// //       } else if (action === 'Sell') {
// //         result[ticker].pl += amount; // Add total proceeds for sells
// //       }
// //     });

// //     // Calculate P/L percentage
// //     Object.keys(result).forEach((ticker) => {
// //       const { pl } = result[ticker];
// //       const totalCost = -pl; // Total cost is the negative of P/L
// //       result[ticker].plPercentage =
// //         totalCost === 0 ? 0 : (pl / totalCost) * 100;
// //     });

// //     return result;
// //   };

// //   // Get the calculated P/L data
// //   const plData = calculatePL(SharesOrderJson);

// //   return (
// //     <div
// //       className="card shadow-2xl compact italic w-9/10 max-w-full rounded-2xl items-center mb-5 py-8 "
// //       id={id}
// //     >
// //       <div className="card-body flex flex-col items-center py-8 px-8 relative z-10">
// //         <div className="flex flex-col items-center mb-6">
// //           {loading ? (
// //             skeleton({ widthCls: 'w-max', heightCls: 'h-8' })
// //           ) : (
// //             <h5 className="card-title text-black text-lg md:text-xl text-center">
// //               <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500 block">
// //                 Shares Order Table
// //               </span>
// //             </h5>
// //           )}
// //         </div>

// //         {/* Display P/L and P/L% above filter controls
// //         <div className="mb-6">
// //           {Object.keys(plData).length > 0 && (
// //             <div className="mb-4">
// //               <h6 className="text-lg font-semibold">P/L and P/L% by Ticker:</h6>
// //               {Object.entries(plData).map(([ticker, { pl, plPercentage }]) => (
// //                 <div key={ticker} className="mb-2">
// //                   <strong>{ticker}:</strong> P/L: ${pl.toFixed(2)}, P/L%:{' '}
// //                   {plPercentage.toFixed(2)}%
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </div> */}

// //         {/* Filter Controls */}
// //         <div className="mb-4 flex flex-wrap gap-2">
// //           <input
// //             type="text"
// //             placeholder="Filter by Ticker..."
// //             value={filter.ticker}
// //             onChange={(e) =>
// //               setFilter((prev) => ({ ...prev, ticker: e.target.value }))
// //             }
// //             className="p-2 border border-gray-300 bg-black text-white placeholder-white rounded w-auto min-w-[150px]"
// //           />
// //           <select
// //             value={filter.tradeDateMonth}
// //             onChange={(e) =>
// //               setFilter((prev) => ({ ...prev, tradeDateMonth: e.target.value }))
// //             }
// //             className="p-2 border border-gray-300 bg-black text-white placeholder-white rounded w-auto min-w-[150px]"
// //           >
// //             <option value="">Filter by Month...</option>
// //             {Array.from({ length: 12 }, (_, i) => (
// //               <option key={i + 1} value={i + 1}>
// //                 {i + 1}
// //               </option>
// //             ))}
// //           </select>
// //           <select
// //             value={filter.tradeDateYear}
// //             onChange={(e) =>
// //               setFilter((prev) => ({ ...prev, tradeDateYear: e.target.value }))
// //             }
// //             className="p-2 border border-gray-300 bg-black text-white placeholder-white rounded w-auto min-w-[150px]"
// //           >
// //             <option value="">Filter by Year...</option>
// //             {Array.from({ length: 5 }, (_, i) => 2020 + i).map((year) => (
// //               <option key={year} value={year}>
// //                 {year}
// //               </option>
// //             ))}
// //           </select>
// //           <select
// //             value={filter.action}
// //             onChange={(e) =>
// //               setFilter((prev) => ({ ...prev, action: e.target.value }))
// //             }
// //             className="p-2 border border-gray-300 bg-black text-white placeholder-white rounded w-auto min-w-[150px]"
// //           >
// //             <option value="">Filter by Action...</option>
// //             <option value="Buy">Buy</option>
// //             <option value="Sell">Sell</option>
// //           </select>
// //           <input
// //             type="text"
// //             placeholder="Filter by Description..."
// //             value={filter.description}
// //             onChange={(e) =>
// //               setFilter((prev) => ({ ...prev, description: e.target.value }))
// //             }
// //             className="p-2 border border-gray-300 bg-black text-white placeholder-white rounded w-auto min-w-[150px]"
// //           />
// //           <input
// //             type="text"
// //             placeholder="Filter by Quantity..."
// //             value={filter.quantity}
// //             onChange={(e) =>
// //               setFilter((prev) => ({ ...prev, quantity: e.target.value }))
// //             }
// //             className="p-2 border border-gray-300 bg-black text-white placeholder-white rounded w-auto min-w-[150px]"
// //           />
// //           <input
// //             type="text"
// //             placeholder="Filter by Price..."
// //             value={filter.price}
// //             onChange={(e) =>
// //               setFilter((prev) => ({ ...prev, price: e.target.value }))
// //             }
// //             className="p-2 border border-gray-300 bg-black text-white placeholder-white rounded w-auto min-w-[150px]"
// //           />
// //           <input
// //             type="text"
// //             placeholder="Filter by Amount..."
// //             value={filter.amount}
// //             onChange={(e) =>
// //               setFilter((prev) => ({ ...prev, amount: e.target.value }))
// //             }
// //             className="p-2 border border-gray-300 bg-black text-white placeholder-white rounded w-auto min-w-[150px]"
// //           />
// //         </div>

// //         <div
// //           className="overflow-x-auto w-full rounded-2xl"
// //           style={{
// //             border: '2px solid black',
// //           }}
// //         >
// //           <div className="max-h-[500px] overflow-y-auto rounded-2xl">
// //             <table className="min-w-full divide-y divide-gray-200">
// //               <thead
// //                 className="sticky top-0 z-10"
// //                 style={{
// //                   backgroundColor: 'black',
// //                   color: 'white',
// //                   borderRadius: '0.5rem 0.5rem 0 0',
// //                 }}
// //               >
// //                 <tr>
// //                   {columns.map((column) => (
// //                     <th
// //                       key={column}
// //                       className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider items-center"
// //                     >
// //                       <button
// //                         key={column}
// //                         onClick={() => {
// //                           if (sortColumn === column) {
// //                             setSortDirection(
// //                               sortDirection === 'asc'
// //                                 ? 'desc'
// //                                 : sortDirection === 'desc'
// //                                   ? 'none'
// //                                   : 'asc',
// //                             );
// //                           } else {
// //                             setSortColumn(column);
// //                             setSortDirection('asc');
// //                           }
// //                         }}
// //                         className={`p-2 border rounded items-center ${
// //                           sortColumn === column
// //                             ? sortDirection === 'asc'
// //                               ? 'bg-blue-700 text-white'
// //                               : sortDirection === 'desc'
// //                                 ? 'bg-red-600 text-white'
// //                                 : 'bg-black text-white'
// //                             : 'bg-black text-white'
// //                         }`}
// //                       >
// //                         {column}{' '}
// //                         {sortColumn === column && sortDirection === 'asc'
// //                           ? '↑'
// //                           : sortColumn === column && sortDirection === 'desc'
// //                             ? '↓'
// //                             : sortColumn === column && sortDirection === 'none'
// //                               ? '→'
// //                               : '→'}
// //                       </button>
// //                     </th>
// //                   ))}
// //                 </tr>
// //               </thead>
// //               <tbody className="bg-white divide-y divide-gray-200 items-center">
// //                 {sortedData.length === 0 ? (
// //                   <tr>
// //                     <td
// //                       colSpan={columns.length}
// //                       className="px-6 py-4 text-center text-sm font-medium text-gray-500"
// //                     >
// //                       No results
// //                     </td>
// //                   </tr>
// //                 ) : (
// //                   sortedData.map((row: SharesOrderRow, index: number) => (
// //                     <tr key={index}>
// //                       {columns.map((column) => (
// //                         <td
// //                           key={column}
// //                           className={`px-6 py-4 whitespace-nowrap ${getCellBackgroundColor(column, row[column])}`}
// //                         >
// //                           {row[column]}
// //                         </td>
// //                       ))}
// //                     </tr>
// //                   ))
// //                 )}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SharesOrderTable;
