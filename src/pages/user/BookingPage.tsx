import { Button, InputComponentHandler } from '@/components';
import { getBookingLayoutByIdAction } from '@/redux/state/booking-layout-state/bookingLayoutActions';
import { AppState } from '@/redux/store';
import { useGetData } from '@/utils';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export interface BookingPageProps {}

const BookingPage: React.FC<BookingPageProps> = () => {
  const params = useParams();
  const id = params?.id?.slice(3);
  const { bookingLayout } = useSelector(
    (state: AppState) => state.bookingLayouts
  );
  useGetData(getBookingLayoutByIdAction(id ? id : ''), {});

  return bookingLayout ? (
    <div className="mt-32 grid m-auto w-1/2">
      <h1 className="text-2xl font-semibold text-center">
        {bookingLayout.name}
      </h1>
      <div className="">
        {bookingLayout.inputs.map((input) => (
          <InputComponentHandler
            componentType={input.inputType}
            onChange={(value) => console.log(value)}
            label={input.label}
            required={input.required}
            value=""
          />
        ))}
      </div>
      <Button variant="filled" className="mt-4">
        Book appointment
      </Button>
    </div>
  ) : (
    <div>No booking layout found</div>
  );
};
export default BookingPage;
