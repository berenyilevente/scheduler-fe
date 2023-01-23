import { getBookingLayoutByIdAction } from '@/redux/state/booking-layout-state/bookingLayoutActions';
import { AppState } from '@/redux/store';
import { useGetData } from '@/utils';
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

export interface EditBookingLayoutProps {}

const EditBookingLayout: React.FC<EditBookingLayoutProps> = () => {
  const { id } = useParams();
  const bookingLayoutId: string = id!.slice(3);
  const { bookingLayout, isLoading } = useSelector(
    (state: AppState) => state.bookingLayouts
  );
  useGetData(getBookingLayoutByIdAction(bookingLayoutId));

  console.log(bookingLayout);
  return (
    <div>
      <h1>Edit booking layout</h1>

      {bookingLayout !== undefined ? (
        <div>{bookingLayout.name}</div>
      ) : (
        <div>No Booking layout with that id</div>
      )}
    </div>
  );
};
export default EditBookingLayout;
