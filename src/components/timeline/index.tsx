import React, { useEffect, useCallback, useState } from 'react';

const cardItems = [
  {
    id: 1,
    title: 'Stacked Card Carousel',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla. Etiam sed interdum est.',
  },
  {
    id: 2,
    title: 'Second Item',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    title: 'A Third Card',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla.',
  },
  {
    id: 4,
    title: 'Fourth',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

function determineClasses(
  indexes: { currentIndex: number; nextIndex: number; previousIndex: number },
  cardIndex: number,
): string {
  if (indexes.currentIndex === cardIndex) {
    return 'active';
  } else if (indexes.nextIndex === cardIndex) {
    return 'next';
  } else if (indexes.previousIndex === cardIndex) {
    return 'prev';
  }
  return 'inactive';
}

const TimelineComponent = () => {
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  });

  const handleCardTransition = useCallback(() => {
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      handleCardTransition();
    }, 4000);

    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes]);

  const activeCard = {
    opacity: 1,
    transform: 'scale(1) translateY(0)',
    boxShadow: '0 30px 20px rgba(0, 0, 0, 0.2)',
    zIndex: 2,
  };

  const nextCard: React.CSSProperties = {
    opacity: 1,
    zIndex: 0,
    visibility: 'visible',
    transform: 'scale(0.9) translateX(100px)',
  };

  const prevCard: React.CSSProperties = {
    transform: 'scale(0.9) translateX(-100px)',
    zIndex: 0,
    opacity: 1,
    visibility: 'visible',
    marginRight: 100,
  };

  const cardStyle: React.CSSProperties = {
    background: '#ffffff',
    borderRadius: '8px',
    border: '1px solid #eeeeee',
    padding: '30px',
    boxShadow: '0 10px 5px rgba(0, 0, 0, 0.1)',
    width: '420px',
    height: '200px',
    transition: 'all 0.75s ease',
    opacity: 0,
    position: 'absolute',
    transform: 'scale(0.85) translateY(50px)',
  };

  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center">
      <div className="p-8 h-full w-full max-w-xl relative">
        <ul className="list-none p-0 flex flex-col mx-auto items-center">
          {cardItems.map((card, index) => (
            <li
              key={card.id}
              style={{
                ...cardStyle,
                ...(determineClasses(indexes, index) === 'active' &&
                  activeCard),
                ...(determineClasses(indexes, index) === 'next' && nextCard),
                ...(determineClasses(indexes, index) === 'prev' && prevCard),
              }}
              className={`transition-all duration-750 ease-in-out ${determineClasses(indexes, index)}`}
            >
              <h2 className="text-xl font-bold text-black">{card.title}</h2>
              <p className="mt-2 text-base text-black">{card.copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineComponent;
