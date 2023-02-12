import { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { BookingResponse } from '../interfaces/booking-interfaces';

export function useGetBookingEvents(bookings: BookingResponse[], day: Dayjs) {
  const [bookingEvents, setBookingEvents] = useState<BookingResponse[]>([]);

  useEffect(() => {
    const bookingEvents = bookings.filter(
      (evt) => evt.bookedTimes.date === day.format('DD.MM.YYYY')
    );
    setBookingEvents(bookingEvents);
  }, [bookings, day]);

  return bookingEvents;
}
