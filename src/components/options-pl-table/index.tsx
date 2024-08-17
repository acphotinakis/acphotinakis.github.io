import React, { useState } from 'react';
import { skeleton } from '../../utils';
import OptionsPLJson from '../../data/OptionsPlTable.json';

interface SharesOrderRow {
  [key: string]: string | number;
}

const OptionsPLTable = ({ loading, id }: { loading: boolean; id: string }) => {
  const excludeColumns = [
    // 'StrikePrice',
    'ExitOptionType',
    'ExitStrikePrice',
    'EntryQuantity',
    'EntryPrice',
    'EntryAmount',
    'ExitTicker',
    'ExitExpDate',
    'ExitDescription',
    'ExitAmount',
    'ExitPrice',
    'EntryDescription',
    'ExitQuantity',
    'TradeP/L',
  ];

  const columns = OptionsPLJson[0]
    ? Object.keys(OptionsPLJson[0] as SharesOrderRow).filter(
        (column) => !excludeColumns.includes(column),
      )
    : [];

  const [filter, setFilter] = useState({
    price: '',
    amount: '',
    quantity: '',
    description: '',
    action: '',
    tradeDateMonth: '',
    tradeDateYear: '',
    ticker: '',
  });

  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | 'none'>(
    'none',
  );

  const getCellBackgroundColor = (column: string, value: string | number) => {
    if (column === 'Action') {
      if (value === 'Buy') return 'bg-green-100'; // Light green background
      if (value === 'Sell') return 'bg-red-100'; // Light red background
    }
    return '';
  };

  const filteredData = OptionsPLJson.filter((row: SharesOrderRow) => {
    const {
      price,
      amount,
      quantity,
      description,
      action,
      tradeDateMonth,
      tradeDateYear,
      ticker,
    } = filter;

    const tradeDate = new Date(row['TradeDate'] as string);
    const tradeMonth = tradeDate.getMonth() + 1;
    const tradeYear = tradeDate.getFullYear();

    return (
      (price === '' || (row['Price'] as string).includes(price)) &&
      (amount === '' || (row['Amount'] as string).includes(amount)) &&
      (quantity === '' || (row['Quantity'] as string).includes(quantity)) &&
      (description === '' ||
        (row['Description'] as string).includes(description)) &&
      (action === '' ||
        (row['Action'] as string).toLowerCase() === action.toLowerCase()) &&
      (tradeDateMonth === '' || tradeMonth === parseInt(tradeDateMonth, 10)) &&
      (tradeDateYear === '' || tradeYear === parseInt(tradeDateYear, 10)) &&
      (ticker === '' || (row['Ticker '] as string).includes(ticker))
    );
  });

  const sortedData = filteredData.sort(
    (a: SharesOrderRow, b: SharesOrderRow) => {
      if (sortDirection === 'none') return 0;
      if (!sortColumn) return 0;
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return 0;
    },
  );

  // Calculate the average Trade P/L %
  const tradePLSum = sortedData.reduce((sum, row) => {
    const value = parseFloat(row['Trade P/L %'] as string);
    return sum + (isNaN(value) ? 0 : value * 100);
  }, 0);

  const tradePLCount = sortedData.length;
  const averageTradePL =
    tradePLCount > 0 ? (tradePLSum / tradePLCount).toFixed(2) : '0.00';
  // Calculate the average Trade P/L % and average days in trade
  const calculateAverages = (data: SharesOrderRow[]) => {
    let totalPL = 0;
    let totalDays = 0;
    let count = 0;

    data.forEach((row) => {
      const tradePL = parseFloat(row['Trade P/L %'] as string);
      const entryDate = new Date(row['EntryDate'] as string);
      const exitDate = new Date(row['ExitDate'] as string);

      if (!isNaN(tradePL)) {
        totalPL += tradePL;
      }

      const daysInTrade =
        (exitDate.getTime() - entryDate.getTime()) / (1000 * 60 * 60 * 24);
      if (!isNaN(daysInTrade)) {
        totalDays += daysInTrade;
      }

      count++;
    });

    const averagePL = count > 0 ? totalPL / count : 0;
    const averageDaysInTrade = count > 0 ? totalDays / count : 0;

    return {
      averagePL: averagePL.toFixed(2),
      averageDaysInTrade: averageDaysInTrade.toFixed(2),
    };
  };

  // Calculate averages for sorted data
  const { averagePL, averageDaysInTrade } = calculateAverages(sortedData);

  return (
    <div
      className="card shadow-2xl compact italic w-full max-w-full rounded-2xl items-center mb-5 py-8 "
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
                  Options Order Table
                </span>
              </h5>
              <div className="mt-4 text-black">
                <strong>Average Trade P/L %:</strong> {averageTradePL}%
              </div>
            </>
          )}
        </div>

        {/* Display the averages */}
        <div className="flex flex-col items-center mb-6">
          <p className="text-black text-lg">
            Average Trade P/L %: {averagePL}%
          </p>
          <p className="text-black text-lg">
            Average Days in Trade: {averageDaysInTrade} days
          </p>
        </div>

        <div
          className="overflow-x-auto w-full rounded-2xl"
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
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider items-center"
                    >
                      <button
                        key={column}
                        onClick={() => {
                          if (sortColumn === column) {
                            setSortDirection(
                              sortDirection === 'asc'
                                ? 'desc'
                                : sortDirection === 'desc'
                                  ? 'none'
                                  : 'asc',
                            );
                          } else {
                            setSortColumn(column);
                            setSortDirection('asc');
                          }
                        }}
                        className={`p-2 border rounded items-center ${
                          sortColumn === column
                            ? sortDirection === 'asc'
                              ? 'bg-blue-700 text-white'
                              : sortDirection === 'desc'
                                ? 'bg-red-600 text-white'
                                : 'bg-black text-white'
                            : 'bg-black text-white'
                        }`}
                      >
                        {column}{' '}
                        {sortColumn === column && sortDirection === 'asc'
                          ? '↑'
                          : sortColumn === column && sortDirection === 'desc'
                            ? '↓'
                            : sortColumn === column && sortDirection === 'none'
                              ? '→'
                              : '→'}
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 items-center">
                {sortedData.length === 0 ? (
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="px-6 py-4 text-center text-sm font-medium text-gray-500"
                    >
                      No results
                    </td>
                  </tr>
                ) : (
                  sortedData.map((row: SharesOrderRow, index: number) => (
                    <tr key={index}>
                      {columns.map((column) => (
                        <td
                          key={column}
                          className={`px-6 py-4 whitespace-nowrap ${getCellBackgroundColor(column, row[column])}`}
                        >
                          {column === 'Trade P/L %'
                            ? `${(parseFloat(row[column]) * 100).toFixed(2)}%`
                            : row[column]}
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
