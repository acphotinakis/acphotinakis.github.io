declare module 'react-responsive-masonry' {
  import * as React from 'react';

  interface MasonryProps {
    columnsCount?: number;
    gutter?: string;
    containerTag?: keyof JSX.IntrinsicElements;
    itemTag?: keyof JSX.IntrinsicElements;
    itemStyle?: React.CSSProperties;
    sequential?: boolean;
    children?: React.ReactNode;
  }

  interface ResponsiveMasonryProps {
    columnsCountBreakPoints?: Record<number, number>;
    gutter?: string;
    gutterBreakpoints?: Record<number, string>;
    children?: React.ReactNode;
  }

  const Masonry: React.FC<MasonryProps>;
  const ResponsiveMasonry: React.FC<ResponsiveMasonryProps>;

  export default Masonry;
  export { Masonry, ResponsiveMasonry };
}
