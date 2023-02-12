import { BookingResponse } from '@/utils/interfaces/booking-interfaces';
import { Dayjs } from 'dayjs';
import React from 'react';
import MonthDay from './MonthDay';

export interface MonthViewProps {
  month: Dayjs[][];
  bookings: BookingResponse[];
}

const MonthView: React.FC<MonthViewProps> = ({ month, bookings }) => {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((week, weekIndex) => (
        <React.Fragment key={weekIndex}>
          {week.map((day, dayIndex) => (
            <MonthDay
              day={day}
              key={dayIndex}
              weekIndex={weekIndex}
              bookings={bookings}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
export default MonthView;
