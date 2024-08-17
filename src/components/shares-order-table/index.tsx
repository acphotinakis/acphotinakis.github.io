import React, { useState } from 'react';
import { skeleton } from '../../utils';
import SharesOrderJson from '../../data/SharesOrderTable.json';

interface SharesOrderRow {
  [key: string]: string | number;
}

const SharesOrderTable = ({
  loading,
  id,
}: {
  loading: boolean;
  id: string;
}) => {
  // Define the columns to exclude
  const excludeColumns = ['ExpDate', 'StrikePrice', 'OptionType'];

  // Columns are assumed to be keys in the first object of the JSON data
  const columns = SharesOrderJson[0]
    ? Object.keys(SharesOrderJson[0] as SharesOrderRow).filter(
        (column) => !excludeColumns.includes(column),
      )
    : [];

  // State for filter and sort
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

  // Function to get cell background color based on action
  const getCellBackgroundColor = (column: string, value: string | number) => {
    if (column === 'Action') {
      if (value === 'Buy') return 'bg-green-100'; // Light green background
      if (value === 'Sell') return 'bg-red-100'; // Light red background
    }
    return '';
  };

  // Filter data based on user input
  const filteredData = SharesOrderJson.filter((row: SharesOrderRow) => {
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

    // Filter by trade date
    const tradeDate = new Date(row['TradeDate'] as string);
    const tradeMonth = tradeDate.getMonth() + 1; // Months are 0-based in JS
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

  // Sort data based on user input
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

  // Function to calculate P/L and P/L%
  const calculatePL = (data: SharesOrderRow[]) => {
    const result: Record<string, { pl: number; plPercentage: number }> = {};

    data.forEach((row) => {
      const ticker = row['Ticker '] as string;
      const action = row['Action'] as string;
      const quantity = parseFloat(row['Quantity'] as string);
      const amount = parseFloat(
        (row['Amount'] as string).replace('$', '').replace(',', ''),
      );
      const price = parseFloat(
        (row['Price'] as string).replace('$', '').replace(',', ''),
      );

      if (!result[ticker]) {
        result[ticker] = { pl: 0, plPercentage: 0 };
      }

      if (action === 'Buy') {
        result[ticker].pl -= amount; // Subtract total cost for buys
      } else if (action === 'Sell') {
        result[ticker].pl += amount; // Add total proceeds for sells
      }
    });

    // Calculate P/L percentage
    Object.keys(result).forEach((ticker) => {
      const { pl } = result[ticker];
      const totalCost = -pl; // Total cost is the negative of P/L
      result[ticker].plPercentage =
        totalCost === 0 ? 0 : (pl / totalCost) * 100;
    });

    return result;
  };

  // Get the calculated P/L data
  const plData = calculatePL(SharesOrderJson);

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
            <h5 className="card-title text-black text-lg md:text-xl text-center">
              <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500 block">
                Shares Order Table
              </span>
            </h5>
          )}
        </div>

        {/* Display P/L and P/L% above filter controls
        <div className="mb-6">
          {Object.keys(plData).length > 0 && (
            <div className="mb-4">
              <h6 className="text-lg font-semibold">P/L and P/L% by Ticker:</h6>
              {Object.entries(plData).map(([ticker, { pl, plPercentage }]) => (
                <div key={ticker} className="mb-2">
                  <strong>{ticker}:</strong> P/L: ${pl.toFixed(2)}, P/L%:{' '}
                  {plPercentage.toFixed(2)}%
                </div>
              ))}
            </div>
          )}
        </div> */}

        {/* Filter Controls */}
        <div className="mb-4 flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="Filter by Ticker..."
            value={filter.ticker}
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, ticker: e.target.value }))
            }
            className="p-2 border border-gray-300 bg-black text-white placeholder-white rounded w-auto min-w-[150px]"
          />
          <select
            value={filter.tradeDateMonth}
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, tradeDateMonth: e.target.value }))
            }
            className="p-2 border border-gray-300 bg-black text-white placeholder-white rounded w-auto min-w-[150px]"
          >
            <option value="">Filter by Month...</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select
            value={filter.tradeDateYear}
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, tradeDateYear: e.target.value }))
            }
            className="p-2 border border-gray-300 bg-black text-white placeholder-white rounded w-auto min-w-[150px]"
          >
            <option value="">Filter by Year...</option>
            {Array.from({ length: 5 }, (_, i) => 2020 + i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select
            value={filter.action}
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, action: e.target.value }))
            }
            className="p-2 border border-gray-300 bg-black text-white placeholder-white rounded w-auto min-w-[150px]"
          >
            <option value="">Filter by Action...</option>
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
          </select>
          <input
            type="text"
            placeholder="Filter by Description..."
            value={filter.description}
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, description: e.target.value }))
            }
            className="p-2 border border-gray-300 bg-black text-white placeholder-white rounded w-auto min-w-[150px]"
          />
          <input
            type="text"
            placeholder="Filter by Quantity..."
            value={filter.quantity}
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, quantity: e.target.value }))
            }
            className="p-2 border border-gray-300 bg-black text-white placeholder-white rounded w-auto min-w-[150px]"
          />
          <input
            type="text"
            placeholder="Filter by Price..."
            value={filter.price}
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, price: e.target.value }))
            }
            className="p-2 border border-gray-300 bg-black text-white placeholder-white rounded w-auto min-w-[150px]"
          />
          <input
            type="text"
            placeholder="Filter by Amount..."
            value={filter.amount}
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, amount: e.target.value }))
            }
            className="p-2 border border-gray-300 bg-black text-white placeholder-white rounded w-auto min-w-[150px]"
          />
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
                          {row[column]}
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

export default SharesOrderTable;
