import React from 'react';
import { COLOR_SCHEMA } from '../../../interfaces/colorSchema';

interface ReusableSectionComponentProps {
  id: string;
  loading: boolean;
  header: string;
  skeletonFunction: () => React.ReactNode;
  content?: React.ReactNode; // <-- Accept React elements instead of raw HTML
}
const ReusableSectionComponent: React.FC<ReusableSectionComponentProps> = ({
  id,
  loading,
  header,
  skeletonFunction,
  content,
}) => {
  return (
    <div
      id={id}
      className="bg-[#2C2C25] card w-full max-w-5xl mx-auto shadow-lg shadow-black/50 rounded-2xl overflow-hidden h-auto relative"
      style={{
        backgroundColor: COLOR_SCHEMA.cardBg,
        boxShadow: `0 4px 15px rgba(0,0,0,0.5)`,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-center mx-3 mb-6 text-white">
        <h2 className="text-lg md:text-xl text-center text-[#F5F5F5] card-title">
          <span className="block border-t-2 border-b-2 border-[#E53935] py-1">
            {header}
          </span>
        </h2>
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex flex-col gap-4">{skeletonFunction()}</div>
      ) : (
        // Render content directly, do NOT wrap it in a div that constrains flex layout
        content
      )}
    </div>
  );
};

export default ReusableSectionComponent;
