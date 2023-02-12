import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { BookingResponse } from '../interfaces/booking-interfaces';

export function useGetTodaysBookings(bookings: BookingResponse[]) {
  const [todaysBookings, setTodaysBookings] = useState<BookingResponse[]>([]);

  useEffect(() => {
    const todaysBookings = bookings.filter(
      (evt) => evt.bookedTimes.date === dayjs().format('DD.MM.YYYY')
    );
    setTodaysBookings(todaysBookings);
  }, [bookings]);

  return todaysBookings;
}
