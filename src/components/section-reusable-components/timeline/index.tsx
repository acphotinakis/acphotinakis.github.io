import React from 'react';
import { COLOR_SCHEMA } from '@/interfaces/colorSchema';

interface TimelineItemProps {
  time?: React.ReactNode;
  degree?: React.ReactNode;
  institution?: React.ReactNode;
  label?: React.ReactNode; // For honors or generic items
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  time,
  degree,
  institution,
  label,
}) => {
  const isHonor = !!label && !time && !degree && !institution;

  return (
    <li className="relative mb-5" style={{ color: COLOR_SCHEMA.white }}>
      {/* Dot */}
      <div
        className="absolute w-2 h-2 rounded-full border mt-1.5"
        style={{
          backgroundColor: COLOR_SCHEMA.accentRed,
          borderColor: COLOR_SCHEMA.accentRed,
          left: '-4.5px',
        }}
      />
      {/* Timeline Line */}
      <div
        className="absolute top-0 bottom-0 left-0 w-px"
        style={{
          backgroundColor: COLOR_SCHEMA.accentRed,
          left: '-1px',
          bottom: '-23px',
          top: '5px',
        }}
      />

      {/* Content */}
      <div className="ml-3">
        {isHonor ? (
          <div
            className="pt-1 text-sm font-medium sm:text-base md:text-base"
            style={{ color: COLOR_SCHEMA.textSecondary }}
          >
            {label}
          </div>
        ) : (
          <>
            <div
              className="flex items-center mb-1 text-xs font-medium sm:text-sm md:text-sm"
              style={{ color: COLOR_SCHEMA.midGray }}
            >
              {time}
            </div>
            <div className="text-sm sm:text-base md:text-base font-semibold mb-0.5">
              {institution}
            </div>
            <div
              className="text-sm font-medium sm:text-base md:text-base"
              style={{ color: COLOR_SCHEMA.textSecondary }}
            >
              {degree}
            </div>
          </>
        )}
      </div>
    </li>
  );
};

export default TimelineItem;
