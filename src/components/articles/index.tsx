import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Article {
  title: string;
  description: string;
  image: string;
}

interface ArticleGridProps {
  articles: Article[];
}

const responsive = {
  superLargeDesktop: {
    // screens larger than 1500px
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 480 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
  },
};

export const ArticleGrid: React.FC<ArticleGridProps> = ({ articles }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-6 mx-auto">
        <h2 className="mb-8 text-4xl font-extrabold text-center text-gray-900">
          Current Reads
        </h2>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          showDots={true}
          arrows={false}
          centerMode={true}
          focusOnSelect={true}
        >
          {articles.map((article, index) => (
            <div
              key={index}
              className="overflow-hidden transition-transform transform bg-black shadow-lg rounded-xl hover:shadow-xl hover:scale-105"
            >
              <img
                src={article.image}
                alt={article.title}
                className="object-cover w-full h-56 sm:h-64 md:h-72"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {article.title}
                </h3>
                <p className="mt-3 text-lg text-gray-600">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
