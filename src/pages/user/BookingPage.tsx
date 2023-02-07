import { Button, InputComponentHandler } from '@/components';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { getBookingLayoutByIdAction } from '@/redux/state/booking-layout-state/bookingLayoutActions';
import { postBookingAction } from '@/redux/state/booking-state/bookingActions';
import { AppState } from '@/redux/store';
import { useGetData } from '@/utils';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export interface BookingPageProps {}

const BookingPage: React.FC<BookingPageProps> = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const bookingId = params?.id?.slice(3);
  const { bookingLayout } = useSelector(
    (state: AppState) => state.bookingLayouts
  );
  useGetData(getBookingLayoutByIdAction(bookingId ? bookingId : ''), {});

  const [fieldUpdates, setFieldUpdates] = useState<
    {
      inputType: string | null;
      value: string | null;
    }[]
  >([]);

  const inputFieldUpdates = useCallback(
    (inputType: string | null, value: string | null, index: number) => {
      setFieldUpdates((prevState) => {
        const newState = [...prevState];
        newState[index] = { inputType, value };
        return newState;
      });
    },
    []
  );

  function onBookAppointment(): void {
    if (!fieldUpdates.length || bookingId === undefined) {
      return;
    }

    dispatch(postBookingAction(bookingId, fieldUpdates));
  }
  return bookingLayout ? (
    <div className="mt-32 grid m-auto w-1/2">
      <h1 className="text-2xl font-semibold text-center">
        {bookingLayout.name}
      </h1>
      <div className="">
        {bookingLayout.inputs.map((input, index) => (
          <InputComponentHandler
            key={input._id}
            componentType={input.inputType}
            onChange={(value) =>
              inputFieldUpdates(input.inputType, value, index)
            }
            label={input.label}
            required={input.required}
            value=""
          />
        ))}
      </div>
      <Button variant="filled" className="mt-4" onClick={onBookAppointment}>
        Book appointment
      </Button>
    </div>
  ) : (
    <div>No booking layout found</div>
  );
};
export default BookingPage;
