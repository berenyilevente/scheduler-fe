import {
  Button,
  Calendar,
  Card,
  Icon,
  Modal,
  TimepickerInput,
} from '@/components';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import {
  deleteBookingAction,
  getBookingsAction,
} from '@/redux/state/booking-state/bookingActions';
import { AppState } from '@/redux/store';
import {
  BookingResponse,
  GetInputArgs,
  InputType,
  useGetBookingEvents,
  useGetThisWeeksBookings,
  useGetTodaysBookings,
} from '@/utils';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  const dispatch = useAppDispatch();
  const { bookings, deleteBookingSuccess } = useSelector(
    (state: AppState) => state.bookings
  );
  const [showDeleteBookingModal, setShowDeleteBookingModal] =
    useState<boolean>(false);
  const [deleteBookingId, setDeleteBookingId] = useState<string>();
  const todaysBookings: BookingResponse[] = useGetTodaysBookings(bookings);
  const thisWeeksBookings: BookingResponse[] =
    useGetThisWeeksBookings(bookings);

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

  function onDeleteBooking(): void {
    if (deleteBookingId === undefined) {
      return;
    }
    dispatch(deleteBookingAction(deleteBookingId));
    setShowDeleteBookingModal(false);
  }

  function onDeleteBookingModalOpen(id: string): void {
    setDeleteBookingId(id);
    setShowDeleteBookingModal(true);
  }

  useEffect(() => {
    dispatch(getBookingsAction());
    getBookedTimes();
  }, [deleteBookingSuccess]);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="grid gap-y-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Todays bookings</h2>
          <div className="flex gap-4">
            {todaysBookings.map((booking, index) => (
              <Card key={booking._id} className="w-52">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold py-2">
                    Booking {index + 1}
                  </h2>
                  <Icon
                    iconType="trash"
                    onClick={() => onDeleteBookingModalOpen(booking._id!)}
                  />
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
        <div>
          <h2 className="text-lg font-semibold mb-4">This week</h2>
          <div className="flex gap-4">
            {bookings.map((booking, index) => (
              <Card key={booking._id} className="w-52">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold py-2">
                    Booking {index + 1}
                  </h2>
                  <Icon
                    iconType="trash"
                    onClick={() => onDeleteBookingModalOpen(booking._id!)}
                  />
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
      </div>
      <Modal
        showModal={showDeleteBookingModal}
        closeModal={() => setShowDeleteBookingModal(false)}
        title="Are you sure you want to delete this booking?"
      >
        <div className="flex justify-around py-4">
          <Button
            variant="outline"
            onClick={() => setShowDeleteBookingModal(false)}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={onDeleteBooking}>
            Delete
          </Button>
        </div>
      </Modal>
    </div>
  );
};
