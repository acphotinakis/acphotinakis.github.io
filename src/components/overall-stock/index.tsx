import * as finnhub from 'finnhub';
import React, { useEffect, useState } from 'react';
import * as recharts from 'recharts';
import { skeleton } from '../../utils';

interface StockNewsTableProps {
  news: finnhub.CompanyNews[];
}

interface CompanyEarningsTableProps {
  earnings: finnhub.CompanyEarnings[];
}

interface RecommendationTrendsTableProps {
  recommendationTrends: finnhub.RecommendationTrend[];
}

const StockNewsTable: React.FC<StockNewsTableProps> = ({ news }) => {
  return (
    <ul className="text-black">
      <h1 className="card-title text-base md:text-lg text-center justify-center mb-2">
        <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500 block">
          News
        </span>
      </h1>
      {news.map((item) => (
        <li key={item.id} className="mb-5 text-black">
          <h3 className="font-semibold text-sm sm:text-base md:text-md">
            <a
              href={item.url}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.headline}
            </a>
          </h3>
        </li>
      ))}
    </ul>
  );
};

const StockDataDisplay: React.FC<{ stockData: finnhub.Quote | null }> = ({
  stockData,
}) => {
  return stockData ? (
    <div className="w-full flex justify-center mb-2 text-black">
      <p className="inline rounded-xl bg-blue-500 p-2">
        Current Price: ${stockData.c}
      </p>
      <p className="inline rounded-xl p-2">&nbsp; | &nbsp;</p>
      <p className="inline rounded-xl bg-green-500 p-2">High: ${stockData.h}</p>
      <p className="inline rounded-xl p-2">&nbsp; | &nbsp;</p>
      <p className="inline rounded-xl bg-red-500 p-2">Low: ${stockData.l}</p>
      <p className="inline rounded-xl p-2">&nbsp; | &nbsp;</p>
      <p className="inline rounded-xl bg-yellow-500 p-2">
        Open: ${stockData.o}
      </p>
      <p className="inline rounded-xl p-2">&nbsp; | &nbsp;</p>
      <p className="inline rounded-xl bg-gray-500 p-2">
        Previous Close: ${stockData.pc}
      </p>
    </div>
  ) : (
    <p>No stock data available.</p>
  );
};

const RecommendationTrendsDisplay: React.FC<RecommendationTrendsTableProps> = ({
  recommendationTrends,
}) => {
  const chartData = [...recommendationTrends]
    .sort((a, b) => new Date(a.period).getTime() - new Date(b.period).getTime())
    .map((trend) => ({
      period: trend.period,
      buy: trend.buy,
      hold: trend.hold,
      sell: trend.sell,
      strongBuy: trend.strongBuy,
      strongSell: trend.strongSell,
    }));

  return (
    <div>
      <h1 className="card-title text-base md:text-lg text-center justify-center mb-2">
        <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500 block">
          Recommendation Trends
        </span>
      </h1>
      <recharts.BarChart width={600} height={400} data={chartData}>
        {' '}
        {/* Set width and height to 100% */}
        <recharts.CartesianGrid strokeDasharray="3 3" />
        <recharts.XAxis dataKey="period" />
        <recharts.YAxis
          label={{ value: '# Analysts', angle: -90, position: 'insideLeft' }}
        />
        <recharts.Tooltip />
        <recharts.Legend />
        <recharts.Bar dataKey="strongBuy" fill="#4CAF50" />
        <recharts.Bar dataKey="buy" fill="#8BC34A" />
        <recharts.Bar dataKey="hold" fill="#FFC107" />
        <recharts.Bar dataKey="sell" fill="#F44336" />
        <recharts.Bar dataKey="strongSell" fill="#F44336" />
      </recharts.BarChart>
    </div>
  );
};

const CompanyEarningsDisplay: React.FC<CompanyEarningsTableProps> = ({
  earnings,
}) => {
  console.log('companyEarnings -->', earnings);

  // Prepare data for the bar chart
  const chartData = [...earnings]
    .sort((a, b) => new Date(a.period).getTime() - new Date(b.period).getTime())
    .map((earning) => ({
      period: `${earning.year}-Q${earning.quarter}`,
      actual: earning.actual,
      estimate: earning.estimate,
      surprise: earning.surprise,
    }));

  return (
    <div>
      <h1 className="card-title text-base md:text-lg text-center justify-center mb-2">
        <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500 block">
          Company Earnings
        </span>
      </h1>
      <recharts.BarChart width={600} height={400} data={chartData}>
        <recharts.CartesianGrid strokeDasharray="3 3" />
        <recharts.XAxis dataKey="period" />
        <recharts.YAxis
          label={{ value: 'Earnings', angle: -90, position: 'insideLeft' }}
        />
        <recharts.Tooltip />
        <recharts.Legend />
        <recharts.Bar dataKey="actual" fill="#8884d8" name="Actual Earnings" />
        <recharts.Bar
          dataKey="estimate"
          fill="#82ca9d"
          name="Estimated Earnings"
        />
        <recharts.Bar dataKey="surprise" fill="#ff7300" name="Surprise" />
      </recharts.BarChart>
    </div>
  );
};

const OverallStockCard = ({
  loading,
  id,
}: {
  loading: boolean;
  id: string;
}) => {
  const [stockData, setStockData] = useState<finnhub.Quote | null>(null);
  const [companyEarnings, setCompanyEarnings] = useState<
    finnhub.CompanyEarnings[] | null
  >(null);
  const [error, setError] = useState<string | null>(null);
  const [companyNews, setCompanyNews] = useState<finnhub.CompanyNews[] | null>(
    null,
  );
  const [recommendationTrends, setRecommendationTrends] = useState<
    finnhub.RecommendationTrend[] | null
  >(null);
  const [stockSymbol, setStockSymbol] = useState<string | null>('AAPL'); // Default to AAPL

  useEffect(() => {
    const fetchData = async () => {
      if (!stockSymbol) return; // Prevent fetching if stockSymbol is null

      try {
        const api_key = finnhub.ApiClient.instance.authentications['api_key'];
        api_key.apiKey = process.env.FINN_HUB_API_KEY;
        const finnhubClient = new finnhub.DefaultApi();

        const from = '2024-10-19';
        const to = '2024-10-19';

        // Fetch stock quote data
        finnhubClient.quote(stockSymbol, (error, data) => {
          if (error) {
            setError(
              error instanceof Error ? error.message : 'Unknown error occurred',
            );
          } else {
            console.log('quote --> ', JSON.stringify(data, null, 2));
            setStockData(data || null);
          }
        });

        // Fetch basic financials data
        finnhubClient.recommendationTrends(stockSymbol, (error, data) => {
          if (error) {
            setError(
              error instanceof Error ? error.message : 'Unknown error occurred',
            );
          } else {
            console.log(
              'recommendationTrends --> ',
              JSON.stringify(data, null, 2),
            );
            setRecommendationTrends(data || null);
          }
        });

        // Fetch company earnings data
        finnhubClient.companyEarnings(
          stockSymbol,
          { limit: 10 },
          (error, data) => {
            if (error) {
              setError(
                error instanceof Error
                  ? error.message
                  : 'Unknown error occurred',
              );
            } else {
              console.log(
                'REQUEST companyEarnings --> ',
                JSON.stringify(data, null, 2),
              );
              setCompanyEarnings(data || null);
            }
          },
        );

        // Fetch company news data
        finnhubClient.companyNews(stockSymbol, from, to, (error, data) => {
          if (error) {
            setError(
              error instanceof Error ? error.message : 'Unknown error occurred',
            );
          } else {
            console.log('companyNews --> ', JSON.stringify(data, null, 2));
            setCompanyNews(data || null);
          }
        });
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data.');
      }
    };

    fetchData();
  }, [stockSymbol]);

  const handleSymbolClick = (symbol: string) => {
    setStockSymbol(symbol);
  };

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 3; index++) {
      array.push(
        <li key={index} className="mb-5 ml-4 text-black">
          <div
            className="absolute w-2 h-2 bg-black rounded-full border border-black mt-1.5"
            style={{ left: '-4.0px' }}
          ></div>
          <div className="my-0.5 text-xs sm:text-sm text-black">
            {skeleton({ widthCls: 'w-3/12', heightCls: 'h-4' })}
          </div>
          <h3 className="font-semibold text-sm sm:text-base md:text-md">
            {skeleton({
              widthCls: 'w-8/12',
              heightCls: 'h-5',
              className: 'my-1.5',
            })}
          </h3>
          <div className="mb-4 font-normal text-sm sm:text-base">
            {skeleton({ widthCls: 'w-10/12', heightCls: 'h-3' })}
          </div>
        </li>,
      );
    }
    return array;
  };

  return (
    <div
      className="bg-white card flex compact italic w-[95vw] mx-auto shadow shadow-[0_4px_8px_rgba(0,_0,_0,_0.5),_0_-4px_8px_rgba(0,_0,_0,_0.5)] rounded-2xl overflow-hidden h-auto"
      id={id}
    >
      <div className="card-body mx-auto">
        {' '}
        {/* Use mx-auto to center the card body */}
        <div className="text-lg md:text-base sm:text-sm text-center">
          {/* Centering the Skills title */}
          <div className="flex justify-center mb-2 text-black">
            <h5 className="card-title text-lg md:text-xl text-center">
              <span className="text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500 block">
                Equities
              </span>
            </h5>
          </div>
          <div className="flex justify-center">
            {['AMZN', 'AAPL', 'INTC'].map((symbol) => (
              <span
                key={symbol}
                className={`text-base-content opacity-100 text-black border-t-2 border-b-2 border-blue-500 block cursor-pointer mx-2 ${
                  stockSymbol === symbol ? 'font-bold' : ''
                }`}
                onClick={() => handleSymbolClick(symbol)}
              >
                {symbol}
              </span>
            ))}
          </div>
          <div className="card m-3 w-full">
            <div className="p-3">
              <div className="grid grid-cols-1 gap-5">
                <div className="flex flex-col items-center">
                  {' '}
                  {/* Center items in the column */}
                  <h3>{stockSymbol}</h3>
                  <div className="my-4 w-full flex justify-center mb-2 text-black">
                    {loading ? (
                      skeleton({ widthCls: 'w-64', heightCls: 'h-6' })
                    ) : (
                      <StockDataDisplay stockData={stockData} />
                    )}
                  </div>
                  <div className="text-base-content text-opacity-100 text-black">
                    <ol className="relative my-2 mx-4 text-white">
                      {loading ? (
                        renderSkeleton()
                      ) : companyNews && companyNews.length > 0 ? (
                        <StockNewsTable news={companyNews} />
                      ) : (
                        <p className="text-black">No news available.</p>
                      )}
                    </ol>
                  </div>
                </div>

                <div className="my-4 flex justify-center">
                  {/* Center the recommendation trends */}
                  {loading ? (
                    renderSkeleton()
                  ) : recommendationTrends &&
                    recommendationTrends.length > 0 ? (
                    <div className="hidden md:block">
                      {' '}
                      {/* Hide on small screens */}
                      <RecommendationTrendsDisplay
                        recommendationTrends={recommendationTrends}
                      />
                    </div>
                  ) : (
                    <p className="text-black">
                      No recommendation trends available.
                    </p>
                  )}
                </div>
                <div className="my-4 flex justify-center">
                  {/* Center the earnings display */}
                  {loading ? (
                    renderSkeleton()
                  ) : companyEarnings && companyEarnings.length > 0 ? (
                    <div className="hidden md:block">
                      {' '}
                      {/* Hide on small screens */}
                      <CompanyEarningsDisplay earnings={companyEarnings} />
                    </div>
                  ) : (
                    <p className="text-black">No earnings available.</p>
                  )}
                </div>

                {/* Skeleton message for smaller screens */}
                <div className="block md:hidden text-center">
                  <p className="text-black">
                    Can't view Recommendation Trends. Switch to a bigger device.
                  </p>
                </div>
                <div className="block md:hidden text-center">
                  <p className="text-black">
                    Can't view Company Earnings. Switch to a bigger device.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallStockCard;
