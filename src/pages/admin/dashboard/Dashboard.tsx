import { Card, Icon, TimepickerInput } from '@/components';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { getBookingsAction } from '@/redux/state/booking-state/bookingActions';
import { AppState } from '@/redux/store';
import { GetInputArgs, InputType } from '@/utils';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  const dispatch = useAppDispatch();
  const { bookings } = useSelector((state: AppState) => state.bookings);

  const [bookedTimes, setBookedTimes] = useState<string[]>([]);

  useEffect(() => {
    dispatch(getBookingsAction());
    getBookedTimes();
  }, []);

  function getBookedTimes(): string[] {
    let bookedTimes: string[] = [];
    for (let i = 0; i < bookings.length; i++) {
      const booking = bookings[i];
      for (let i = 0; i < booking.inputs.length; i++) {
        const input = booking.inputs[i];
        if (
          input.inputType === InputType.Timepicker &&
          input.value !== undefined
        ) {
          bookedTimes.push(input.value);
        }
      }
    }

    return bookedTimes;
  }

  function getValueFromInputType(
    inputType: string,
    input: GetInputArgs
  ): string {
    switch (inputType) {
      case InputType.Calendar:
        return input.value!;
      case InputType.Timepicker:
        return input.value!;
      case InputType.Dropdown:
        return input.value!;
      case InputType.Email:
        return input.value!;
      case InputType.Phone:
        return input.value!;
      case InputType.Text:
        return input.value!;
      default:
        return '';
    }
  }

  return (
    <div>
      <h1 className="text-lg font-semibold mb-4">Dashboard</h1>
      <div className="flex gap-4">
        {bookings.map((booking, index) => (
          <Card key={booking._id}>
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold py-2">
                Booking {index + 1}
              </h2>{' '}
              <Icon iconType="trash" />
            </div>

            <div className="flex gap-x-2 flex-col">
              {booking.inputs.map((input) => (
                <div key={input._id} className="text-sm">
                  {getValueFromInputType(input.inputType, input)}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
