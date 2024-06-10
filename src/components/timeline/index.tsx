import React, { Fragment } from 'react';
import { Chrono } from 'react-chrono';
import LazyImage from '../lazy-image';
import { skeleton } from '../../utils'; // Assuming skeleton utility is implemented

const TimelineComponent = ({ loading }: { loading: boolean }) => {
  const items = [
    {
      title: '2021-22 Fall',
      cardTitle: 'Freshmen Fall',
      cardDetailedText: 'Computer Science 1',
    },
    {
      title: '2021-22 Spring',
      cardTitle: 'Freshmen Spring',
      cardDetailedText: 'Computer Science 2, Discrete Math for Computing',
    },
    {
      title: '2022-23 Fall',
      cardTitle: '2022-23 Fall',
      cardDetailedText:
        'The Mechanics of Programming, Intro to Computer Science Theory',
    },
    {
      title: '2022-23 Spring',
      cardTitle: '2022-23 Spring',
      cardDetailedText: 'Analysis of Algorithms, Intro to Software Engineering',
    },
    {
      title: '2023-24 Fall',
      cardTitle: '2023-24 Fall',
      cardDetailedText:
        'Concepts of Computer Systems, Concepts of Parallel & Distributed Systems, Principles of Data Management, Linear Algebra',
    },
    {
      title: '2024-25 Fall',
      cardTitle: '2024-25 Fall',
      cardDetailedText:
        'Intro to Artifical Intelligence, Machine Learning, Programming Language Concepts, Principles of Data Mining, Financial Management 2, Intro to Options & Futures',
    },
  ];

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < items.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0">
                <div className="w-24 h-24 mask mask-squircle">
                  {skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-full',
                    shape: '',
                  })}
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto md:mx-0',
                      })}
                    </h2>
                    {skeleton({
                      widthCls: 'w-24',
                      heightCls: 'h-3',
                      className: 'mx-auto md:mx-0',
                    })}
                    <div className="mt-3">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto md:mx-0',
                      })}
                    </div>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-4',
                        className: 'md:mr-2 mx-auto md:mx-0',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderItems = () => {
    return items && items.length ? (
      <div className="p-8 h-full w-full">
        <div className="flex items-center flex-col md:flex-row">
          <div className="w-full">
            <div className="flex items-start px-4 w-full">
              <div className="card compact bg-base-100 w-full">
                <div className="p-8 h-full">
                  <div
                    className="flex items-center shadow-lg"
                    style={{ width: '100%', height: '100%' }}
                  >
                    <Chrono
                      items={items}
                      mode="VERTICAL_ALTERNATING"
                      enableDarkToggle={true}
                      scrollable={{ scrollbar: true }}
                      cardHeight={'50px'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="text-center mb-6">
        <p className="mt-1 text-sm opacity-50 text-base-content">No items</p>
      </div>
    );
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="col-span-2">
        <div
          className={`card compact bg-base-100 ${loading || (items && items.length) ? 'shadow bg-opacity-40' : 'shadow-lg'}`}
        >
          <div className="card-body">
            <div className="mx-3 mb-2">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ widthCls: 'w-28', heightCls: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-70">
                    Coursework
                  </span>
                )}
              </h5>
            </div>
            <div className="h-full w-full">
              {loading || !items ? renderSkeleton() : renderItems()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;
