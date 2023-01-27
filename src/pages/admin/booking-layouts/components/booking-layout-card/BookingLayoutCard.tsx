import { Button, TextInput } from '@/components';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { setPublicRouteAction } from '@/redux/state/booking-layout-state/bookingLayoutActions';
import {
  GetBookingLayoutArgs,
  GetInputArgs,
  PostInputArgs,
  PublicRouteUrl,
} from '@/utils';
import React from 'react';
import { Link } from 'react-router-dom';

export interface BookingLayoutCardProps {
  bookingLayout: GetBookingLayoutArgs;
  isEdit: boolean;
  editInputFields: PostInputArgs[] | null;
  bookingLayoutNameValue: string | null;
  onChange: (value: string) => void;
  onEditClick: (bookingLayoutName: string) => void;
  onResetValues: () => void;
  openDeleteModal: (id: string) => void;
}

export const BookingLayoutCard: React.FC<BookingLayoutCardProps> = ({
  bookingLayout,
  isEdit,
  bookingLayoutNameValue,
  onChange,
  onEditClick,
  onResetValues,
  openDeleteModal,
}) => {
  const dispatch = useAppDispatch();
  //TO DO Implement a user preview site
  return (
    <div className="grid gap-y-3 p-4">
      <div className="flex justify-between">
        <div className="text-xl font-semibold">
          {isEdit ? (
            <TextInput
              onChange={onChange}
              value={bookingLayoutNameValue}
              label="Booking layout name"
            />
          ) : (
            bookingLayout.name
          )}
        </div>
        <div className="flex gap-3 items-center">
          {isEdit === false && (
            <Link to={PublicRouteUrl.User} target="_blank">
              <Button
                variant="outline"
                iconType="eye"
                onClick={() => dispatch(setPublicRouteAction(true))}
              >
                Preview
              </Button>
            </Link>
          )}

          <Button
            variant="outline"
            size="medium"
            iconType={`${isEdit ? 'refresh' : 'settings'}`}
            onClick={() =>
              isEdit === false
                ? onEditClick(bookingLayout.name)
                : onResetValues()
            }
          >
            {isEdit ? 'Reset' : 'Edit'}
          </Button>
          <Button
            variant="outline"
            size="medium"
            iconType="trash"
            className="text-black"
            onClick={() => openDeleteModal(bookingLayout._id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
