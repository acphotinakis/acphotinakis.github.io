import { useEffect, useState } from 'react';
import { skeleton } from '../../../utils';
import OptionsPLJson from '../../../data/OptionsPlTable.json';
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
    ? Object.keys(OptionsPLJson[0]).filter((c) => !excludeColumns.includes(c))
    : [];

  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | 'none'>(
    'none',
  );
  const [windowWidth, setWindowWidth] = useState(window.outerWidth);
  const [visibleColumns, setVisibleColumns] = useState<string[]>([]);

  // Handle responsive columns
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.outerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 500) setVisibleColumns(['EntryDescription']);
    else if (windowWidth < 700)
      setVisibleColumns(['EntryDescription', 'Realized P/L %']);
    else if (windowWidth < 1024)
      setVisibleColumns([
        'Ticker',
        'Entry Type',
        'Strike Price',
        'Trade Date',
        'Realized P/L %',
      ]);
    else if (windowWidth < 1210)
      setVisibleColumns([
        'Ticker',
        'Trade Date',
        'Entry Type',
        'Strike Price',
        'Exit Type',
        'Realized P/L %',
      ]);
    else setVisibleColumns(columns);
  }, [windowWidth]);

  const sortedData = [...OptionsPLJson].sort(
    (a: OptionsPlRow, b: OptionsPlRow) => {
      if (!sortColumn || sortDirection === 'none') return 0;

      const parseNumber = (str: string) =>
        parseFloat(str.replace(/[^0-9.-]+/g, '')) || 0;
      const parsePercent = (str: string) =>
        parseFloat(str.replace('%', '')) || 0;
      const parseDate = (str: string) => new Date(str).getTime();

      const getValue = (row: OptionsPlRow) => {
        switch (sortColumn) {
          case 'Ticker':
            return row[sortColumn] as string;
          case 'Trade Date':
          case 'Expiration Date':
          case 'Exit Date':
            return parseDate(row[sortColumn] as string);
          case 'Entry Type':
            return `${row.Action} - ${row['Entry Type']}`;
          case 'Exit Type':
            return `${row.ExitAction} - ${row['Exit Type']}`;
          case 'Strike Price':
            return parseNumber(row[sortColumn] as string);
          case 'Realized P/L %':
            return parsePercent(row[sortColumn] as string);
          default:
            return row[sortColumn] as string | number;
        }
      };

      const aVal = getValue(a);
      const bVal = getValue(b);

      if (typeof aVal === 'number' && typeof bVal === 'number')
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      if (typeof aVal === 'string' && typeof bVal === 'string')
        return sortDirection === 'asc'
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      return 0;
    },
  );

  const tradePLSum = sortedData.reduce(
    (sum, row) => sum + (parseFloat(row['Realized P/L %']) || 0),
    0,
  );
  const averageTradePL = (
    sortedData.length ? tradePLSum / sortedData.length : 0
  ).toFixed(2);

  const averageTradeLength = sortedData.length
    ? sortedData.reduce(
        (acc, row) =>
          acc + dayjs(row['Exit Date']).diff(dayjs(row['Trade Date']), 'day'),
        0,
      ) / sortedData.length
    : 0;

  const mostTradedTicker = (() => {
    const counts: Record<string, number> = {};
    sortedData.forEach((row) => {
      counts[row.Ticker] = (counts[row.Ticker] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || '';
  })();

  const getCellBG = (column: string, value: string) => {
    const percent = parseFloat(value);
    if (column === 'Realized P/L %')
      return percent > 0
        ? 'bg-green-500'
        : percent < 0
          ? 'bg-red-500'
          : 'bg-gray-400';
    if (column === 'Entry Type')
      return value === 'C'
        ? 'bg-blue-500'
        : value === 'P'
          ? 'bg-purple-500'
          : '';
    if (column === 'Exit Type')
      return value === 'ExpiredOTM' ? 'bg-purple-700' : '';
    return '';
  };

  const handleSort = (column: string) => {
    if (sortColumn === column)
      setSortDirection(
        sortDirection === 'asc'
          ? 'desc'
          : sortDirection === 'desc'
            ? 'none'
            : 'asc',
      );
    else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (column: string) =>
    sortColumn === column
      ? sortDirection === 'asc'
        ? '↑'
        : sortDirection === 'desc'
          ? '↓'
          : '→'
      : '→';

  return (
    <div className="w-full max-w-full p-4 mx-auto bg-black shadow-lg rounded-2xl">
      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3">
        <div className="flex flex-col items-center justify-center p-2 bg-gray-900 rounded-lg">
          <span className="text-sm font-medium text-gray-300">
            Average Realized P/L %
          </span>
          <span
            className={`mt-1 px-3 py-1 rounded-lg text-white ${parseFloat(averageTradePL) > 0 ? 'bg-green-500' : parseFloat(averageTradePL) < 0 ? 'bg-red-500' : 'bg-gray-400'}`}
          >
            {averageTradePL}%
          </span>
        </div>
        <div className="flex flex-col items-center justify-center p-2 bg-gray-900 rounded-lg">
          <span className="text-sm font-medium text-gray-300">
            Average Trade Length
          </span>
          <span className="mt-1">{averageTradeLength.toFixed(2)} days</span>
        </div>
        <div className="flex flex-col items-center justify-center p-2 bg-gray-900 rounded-lg">
          <span className="text-sm font-medium text-gray-300">
            Most Traded Ticker
          </span>
          <span className="mt-1">${mostTradedTicker}</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl">
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 text-white bg-gray-900">
            <tr>
              {visibleColumns.map((column) => (
                <th
                  key={column}
                  className="px-4 py-2 text-xs font-semibold text-left uppercase"
                >
                  <button
                    className="flex items-center gap-1"
                    onClick={() => handleSort(column)}
                  >
                    {column} {getSortIcon(column)}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.length === 0 ? (
              <tr>
                <td
                  colSpan={visibleColumns.length}
                  className="py-4 text-center text-gray-500"
                >
                  No results
                </td>
              </tr>
            ) : (
              sortedData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-800">
                  {visibleColumns.map((column) => (
                    <td key={column} className="px-3 py-2">
                      <div
                        className={`text-center px-2 py-1 rounded-lg ${getCellBG(column, row[column].toString())} text-white`}
                      >
                        {column === 'Realized P/L %'
                          ? parseFloat(row[column].toString()).toFixed(2) + '%'
                          : row[column]}
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
  );
};

export default OptionsPLTable;
