import { useGetBookingEvents, cln } from '@/utils';
import { BookingResponse } from '@/utils/interfaces/booking-interfaces';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';

export interface WeekDayProps {
  day: Dayjs;
  bookings: BookingResponse[];
}

const WeekDay: React.FC<WeekDayProps> = ({ day, bookings }) => {
  const bookingEvents = useGetBookingEvents(bookings, day);

  function getCurrentDay() {
    if (day.format('DD.MM.YYYY') === dayjs().format('DD.MM.YYYY')) {
      return 'bg-sky-500 text-white font-semibold rounded-full w-7';
    }
    return '';
  }

  return (
    <div className="border border-slate-50 flex flex-col h-[800px]">
      <header className="flex flex-col items-center">
        <p className="text-xs font-semibold mt-1">
          {day.format('ddd').toUpperCase()}
        </p>
        <div className="flex flex-col text-center gap-y-2">
          <p className={cln('text-sm text-center p-1', getCurrentDay())}>
            {day.format('DD')}
          </p>
        </div>
      </header>
      <div className="mt-1 flex flex-col gap-y-1 text-center">
        {bookingEvents.map((booking, idx) => (
          <div
            key={idx}
            className="border border-slate-200 rounded text-xs px-2"
          >
            {booking.bookedTimes.time}
          </div>
        ))}
      </div>
    </div>
  );
};
export default WeekDay;
