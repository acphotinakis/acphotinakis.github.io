import { useState } from 'react';
import { skeleton } from '../../utils';
import OptionsPLJson from '../../data/OptionsPlTable.json';
import dayjs from 'dayjs';

interface OptionsPlRow {
  Ticker: string;
  'Entry Type': string;
  'Strike Price': string;
  'Trade Date': string;
  Action: string;
  'Expiration Date': string;
  EntryDescription: string;
  EntryQuantity: string;
  EntryPrice: string;
  EntryAmount: string;
  ExitTicker: string;
  'Exit Date': string;
  ExitAction: string;
  'ExitExpiration Date': string;
  ExitStrikePrice: string;
  'Exit Type': string;
  ExitDescription: string;
  ExitQuantity: string;
  ExitPrice: string;
  ExitAmount: string;
  'TradeP/L': string;
  'Realized P/L %': string;
  [key: string]: string | number;
}

const OptionsPLTable = ({ loading, id }: { loading: boolean; id: string }) => {
  const excludeColumns = [
    // 'Strike Price',
    'ExitOptionType',
    'ExitStrikePrice',
    'EntryQuantity',
    'EntryPrice',
    'EntryAmount',
    'ExitTicker',
    'ExitExpiration Date',
    'ExitDescription',
    'ExitAmount',
    'ExitPrice',
    'EntryDescription',
    'ExitQuantity',
    'TradeP/L',
    'EntryAction',
    'Action',
    'ExitAction',
  ];

  const columns = OptionsPLJson[0]
    ? Object.keys(OptionsPLJson[0] as OptionsPlRow).filter(
        (column) => !excludeColumns.includes(column),
      )
    : [];

  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | 'none'>(
    'none',
  );

  const sortedData = [...OptionsPLJson].sort(
    (a: OptionsPlRow, b: OptionsPlRow) => {
      if (sortDirection === 'none') return 0;
      if (!sortColumn) return 0;

      // Helper function to parse date strings
      const parseDate = (dateStr: string) => new Date(dateStr).getTime();

      // Helper function to parse currency strings
      const parseCurrency = (currencyStr: string) =>
        parseFloat(currencyStr.replace(/[^0-9.-]+/g, ''));

      // Helper function to parse percentage strings
      const parsePercentage = (percentStr: string) =>
        parseFloat(percentStr.replace('%', ''));

      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      // Determine type of column and parse values accordingly
      let aParsedValue, bParsedValue;

      switch (sortColumn) {
        case 'Ticker':
          aParsedValue = aValue as string;
          bParsedValue = bValue as string;
          break;

        case 'Trade Date':
        case 'Expiration Date':
        case 'Exit Date':
          // Handle date columns
          aParsedValue = parseDate(aValue as string);
          bParsedValue = parseDate(bValue as string);
          break;

        case 'Entry Type':
          // Handle concatenated columns
          aParsedValue = `${a['Action']} - ${a['Entry Type']}`;
          bParsedValue = `${b['Action']} - ${b['Entry Type']}`;
          break;

        case 'Exit Type':
          // Handle concatenated columns
          aParsedValue = `${a['Exit Action']} - ${a['Exit Type']}`;
          bParsedValue = `${b['Exit Action']} - ${b['Exit Type']}`;
          break;

        case 'Strike Price':
          // Handle currency columns
          aParsedValue = parseCurrency(aValue as string);
          bParsedValue = parseCurrency(bValue as string);
          break;

        case 'TradeP/L':
        case 'Realized P/L %':
          // Handle percentage columns
          aParsedValue = parsePercentage(aValue as string);
          bParsedValue = parsePercentage(bValue as string);
          break;

        default:
          // Handle default case (assuming string or number)
          aParsedValue = aValue;
          bParsedValue = bValue;
          break;
      }

      // Compare parsed values based on sort direction
      if (
        typeof aParsedValue === 'number' &&
        typeof bParsedValue === 'number'
      ) {
        return sortDirection === 'asc'
          ? aParsedValue - bParsedValue
          : bParsedValue - aParsedValue;
      } else if (
        typeof aParsedValue === 'string' &&
        typeof bParsedValue === 'string'
      ) {
        return sortDirection === 'asc'
          ? aParsedValue.localeCompare(bParsedValue)
          : bParsedValue.localeCompare(aParsedValue);
      }

      return 0;
    },
  );

  // Calculate the average Realized P/L %
  const tradePLSum = sortedData.reduce((sum: number, row: OptionsPlRow) => {
    const value = parseFloat(row['Realized P/L %']);
    return sum + (isNaN(value) ? 0 : value * 100);
  }, 0);

  const tradePLCount = sortedData.length;
  const averageTradePL =
    tradePLCount > 0 ? (tradePLSum / tradePLCount).toFixed(2) : '0.00';

  // Function to calculate the average trade length
  const calculateAverageTradeLength = (data: OptionsPlRow[]) => {
    if (data.length === 0) return 0;

    const totalDays = data.reduce((acc, row) => {
      const TradeDate = dayjs(row['Trade Date']);
      const ExitDate = dayjs(row['Exit Date']);
      return acc + ExitDate.diff(TradeDate, 'day');
    }, 0);

    return totalDays / data.length;
  };

  // Example usage
  const averageTradeLength = calculateAverageTradeLength(sortedData);

  // Function to find the most traded ticker symbol
  const findMostTradedTicker = (data: OptionsPlRow[]) => {
    const tickerCounts: { [ticker: string]: number } = {};

    data.forEach((row) => {
      const Ticker = row.Ticker;
      const exitTicker = row.ExitTicker;

      // Count both entry and exit tickers
      tickerCounts[Ticker] = (tickerCounts[Ticker] || 0) + 1;
      tickerCounts[exitTicker] = (tickerCounts[exitTicker] || 0) + 1;
    });

    const mostTradedTicker = Object.keys(tickerCounts).reduce(
      (maxTicker, ticker) => {
        return tickerCounts[ticker] > (tickerCounts[maxTicker] || 0)
          ? ticker
          : maxTicker;
      },
      '',
    );

    return mostTradedTicker;
  };

  // Example usage
  const mostTradedTicker = findMostTradedTicker(sortedData);

  const getCellBackgroundColor = (
    column: string,
    value: string,
    row: OptionsPlRow,
  ): string => {
    // Helper function to handle 'Realized P/L %' column
    const getRealizedPLBackgroundColor = (percent: number) => {
      if (percent > 0) return 'bg-[#3fb950] text-white border rounded-xl';
      if (percent < 0) return 'bg-[#FB5057] text-white border rounded-xl';
      return 'bg-[#A9A9A9] text-white border rounded-xl';
    };

    // Helper function to handle 'Action' column
    const getActionBackgroundColor = (action: string) => {
      if (action === 'Buy') return 'bg-[#4a90e2] text-white border rounded-xl';
      if (action === 'Sell') return 'bg-[#f5a623] text-white border rounded-xl';
      return '';
    };

    // Helper function to handle 'Entry Type' and 'Exit Type' columns
    const getEntryExitTypeBackgroundColor = (
      column: string,
      entryType: string,
      exitAction?: string,
    ) => {
      if (column === 'Exit Type' && exitAction === 'ExpiredOTM') {
        return 'bg-[#9b59b6] text-white border rounded-xl';
      }
      if (entryType === 'C') return 'bg-[#3498db] text-white border rounded-xl';
      if (entryType === 'P') return 'bg-[#8e44ad] text-white border rounded-xl';
      return '';
    };

    // Main logic to determine the background color based on the column
    switch (column) {
      case 'Realized P/L %': {
        const percent = parseFloat(value);
        return getRealizedPLBackgroundColor(percent);
      }

      case 'Action': {
        return getActionBackgroundColor(value);
      }

      case 'Entry Type':
      case 'Exit Type': {
        return getEntryExitTypeBackgroundColor(column, value, row.ExitAction);
      }

      default: {
        return '';
      }
    }
  };

  // Helper function to handle 'Realized P/L %' column
  const formatRealizedPLPercentage = (value: string) => {
    const percent = parseFloat(value);
    return (percent * 100).toFixed(2) + '%';
  };

  // Helper function to handle 'Entry Type' and 'Exit Type' columns
  const formatType = (
    column: string,
    value: string,
    action: string,
    exitAction?: string,
  ) => {
    let fixedAction = '';

    // Determine fixedAction based on column type
    if (column === 'Entry Type') {
      if (action === 'BTO') {
        fixedAction = 'Buy to Open';
      } else if (action === 'STO') {
        fixedAction = 'Sell to Open';
      }
    } else if (column === 'Exit Type') {
      if (exitAction === 'STC') {
        fixedAction = 'Sell to Close';
      } else if (exitAction === 'BTC') {
        fixedAction = 'Buy to Close';
      } else if (exitAction === 'ExpiredOTM') {
        fixedAction = 'ExpiredOTM';
      }
    }

    // Determine suffix based on value
    let suffix = '';
    if (value === 'C') {
      suffix = 'Call';
    } else if (value === 'P') {
      suffix = 'Put';
    }

    return `${fixedAction} - ${suffix}`;
  };

  // Main function to get cell text based on column
  const getCellText = (
    column: string,
    value: string,
    row: OptionsPlRow,
  ): string => {
    switch (column) {
      case 'Realized P/L %':
        return formatRealizedPLPercentage(value);

      case 'Entry Type':
        return formatType(column, value, row.Action);

      case 'Exit Type':
        return formatType(column, value, row.ExitAction, row.ExitAction);

      case 'Ticker':
        return '$' + value;

      default:
        return value;
    }
  };

  // Ensure `averageTradePL` is parsed as a float
  const parsedAverageTradePL = parseFloat(averageTradePL);

  // Determine the background color and arrow based on the parsed value
  const getAvgTradePlBG = (value: GLfloat) => {
    if (value > 0) return 'bg-[#3fb950]';
    if (value < 0) return 'bg-[#FB5057]';
    return 'bg-[#A9A9A9]';
  };

  const getAvgTradePlArrow = (value: GLfloat) => {
    if (value > 0) return '▲'; // Up arrow for positive
    if (value < 0) return '▼'; // Down arrow for negative
    return '►'; // Side arrow for zero
  };

  const getNextSortDirection = (currentDirection: string) => {
    switch (currentDirection) {
      case 'asc':
        return 'desc';
      case 'desc':
        return 'none';
      default:
        return 'asc';
    }
  };

  const handleClick = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(getNextSortDirection(sortDirection));
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };
  const getButtonClassName = (column: string) => {
    if (sortColumn === column) {
      switch (sortDirection) {
        case 'asc':
          return 'bg-blue-700 text-white';
        case 'desc':
          return 'bg-[#FF5F15] text-white';
        default:
          return 'bg-black text-white';
      }
    }
    return 'bg-black text-white';
  };

  const getSortDirectionIcon = (column: string) => {
    if (sortColumn === column) {
      switch (sortDirection) {
        case 'asc':
          return '↑';
        case 'desc':
          return '↓';
        case 'none':
          return '→';
      }
    }
    return '→';
  };

  return (
    <div
      className="card shadow-xl xl:shadow-[0_4px_8px_rgba(0,_0,_0,_0.3),_0_-4px_8px_rgba(0,_0,_0,_0.3)] compact italic w-full max-w-full rounded-2xl items-center mb-5 py-8"
      id={id}
    >
      <div className="card-body flex flex-col items-center py-8 px-8 relative z-10">
        <div className="flex flex-col items-center mb-6">
          {loading ? (
            skeleton({ widthCls: 'w-max', heightCls: 'h-8' })
          ) : (
            <>
              <h5 className="card-title text-black text-lg md:text-xl text-center">
                <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500 block">
                  Stock Options Ledger
                </span>
              </h5>
              <div className="mt-4 text-black grid grid-cols-1 gap-4 md:grid-cols-3 border-b-4 border-blue-500 py-2">
                <div className="flex flex-col items-center justify-center text-center">
                  <strong className="mb-2">Average Realized P/L %:</strong>
                  <div
                    className={`flex items-center justify-center px-3 py-1 rounded-lg text-white ${getAvgTradePlBG(parsedAverageTradePL)}`}
                  >
                    <span className="mr-2">
                      {getAvgTradePlArrow(parsedAverageTradePL)}
                    </span>
                    <span>{parsedAverageTradePL.toFixed(2)}%</span>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                  <strong className="mb-2">Average Trade Length:</strong>
                  <span>{averageTradeLength.toFixed(2)} days</span>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                  <strong className="mb-2">Most Traded Ticker Symbol:</strong>
                  <span>${mostTradedTicker}</span>
                </div>
              </div>
            </>
          )}
        </div>

        <div
          className="overflow-x-auto w-full rounded-2xl shadow-xl xl:shadow-[0_4px_8px_rgba(0,_0,_0,_0.3),_0_-4px_8px_rgba(0,_0,_0,_0.3)]"
          style={{
            border: '2px solid black',
          }}
        >
          <div className="max-h-[500px] overflow-y-auto rounded-2xl">
            <table className="min-w-full divide-y divide-gray-200">
              <thead
                className="sticky top-0 z-10"
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  borderRadius: '0.5rem 0.5rem 0 0',
                }}
              >
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column}
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wider items-center" // Adjust the min-w value as needed
                    >
                      <button
                        key={column}
                        onClick={() => handleClick(column)}
                        className={`p-2 border rounded items-center  ${getButtonClassName(column)}`}
                      >
                        {column} {getSortDirectionIcon(column)}
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedData.length === 0 ? (
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="px-7 py-4 text-center text-sm font-medium text-gray-500 border border-gray-300"
                    >
                      No results
                    </td>
                  </tr>
                ) : (
                  sortedData.map((row: OptionsPlRow, index: number) => (
                    <tr key={index} className="border-b border-gray-300">
                      {columns.map((column) => (
                        <td
                          key={column}
                          className="px-7 py-3 whitespace-nowrap"
                        >
                          <div
                            className={`${getCellBackgroundColor(column, row[column].toString(), row)} text-black items-center text-center py-1 px-2 rounded-lg`}
                          >
                            {getCellText(column, row[column].toString(), row)}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsPLTable;
