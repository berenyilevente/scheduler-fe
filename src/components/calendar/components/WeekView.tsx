import { BookingResponse } from '@/utils/interfaces/booking-interfaces';
import { Dayjs } from 'dayjs';
import React from 'react';
import WeekDay from './WeekDay';

export interface WeekViewProps {
  week: Dayjs[];
  bookings: BookingResponse[];
}

const WeekView: React.FC<WeekViewProps> = ({ week, bookings }) => {
  return (
    <div className="grid grid-cols-7">
      {week.map((day, dayIndex) => (
        <WeekDay day={day} key={dayIndex} bookings={bookings} />
      ))}
    </div>
  );
};
export default WeekView;
