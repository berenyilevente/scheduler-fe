import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { BookingResponse } from '../interfaces/booking-interfaces';

export function useGetThisWeeksBookings(bookings: BookingResponse[]) {
  const [thisWeeksBookings, setThisWeeksBookings] = useState<BookingResponse[]>(
    []
  );

  const startOfWeek = dayjs().startOf('week');
  const endOfWeek = dayjs().endOf('week');
  useEffect(() => {
    for (let i = 0; i < bookings.length; i++) {
      const booking: BookingResponse = bookings[i];
      const date = dayjs(booking.bookedTimes.date);
      if (date.isAfter(startOfWeek) && date.isBefore(endOfWeek)) {
        console.log('ran');
        return setThisWeeksBookings([...thisWeeksBookings, booking]);
      }
    }
  }, [bookings]);

  return thisWeeksBookings;
}
