import { Divider } from '@/components';
import { cln, BookingResponse, timeValues, useGetBookingEvents } from '@/utils';
import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useRef } from 'react';
export interface DayViewProps {
  day: Dayjs;
  bookings: BookingResponse[];
}
const DayView: React.FC<DayViewProps> = ({ day, bookings }) => {
  const bookingEvents = useGetBookingEvents(bookings, day);

  const containerRef = useRef(null);
  const currentTimeRef = useRef(null);

  function getBookedTimes(time: string): string | null {
    const bookedTimes = bookingEvents.find(
      (booking) => booking.bookedTimes.time === time
    )?.bookedTimes.time;

    if (bookedTimes === undefined) {
      return null;
    }
    return bookedTimes;
  }

  /*
   TODO implement available times function. 
   The user should be able to select at which times their business is open.
   The selected range should be saved in the timeValues array
  */

  function getHourlyRange(startHour = 8, endHour = 24, minuteInterval = 1) {
    const start = dayjs().startOf('day').hour(startHour).minute(0);
    const end = dayjs().startOf('day').hour(endHour).minute(0);
    const range = [];

    for (let i = start; i.isBefore(end); i = i.add(minuteInterval, 'minute')) {
      range.push(i.format('HH:mm'));
    }

    return range;
  }

  console.log(getHourlyRange());
  return (
    <div
      className="border border-slate-50 h-[500px] overflow-auto"
      ref={containerRef}
    >
      <div className="flex flex-col justify-center gap-y-4 ">
        {getHourlyRange().map((hour, index) => (
          <div key={index}>
            {hour === day.format('HH:MM') && (
              <div
                className="w-full border border-red-400"
                ref={currentTimeRef}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default DayView;
