import { NavLink } from '@/components';
import { GetBookingLayoutArgs, RouteUrl } from '@/utils';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
export interface BookingLayoutNavigationProps {
  bookingLayouts: GetBookingLayoutArgs[];
}
export const BookingLayoutNavigation: React.FC<BookingLayoutNavigationProps> =
  ({ bookingLayouts }) => {
    const { id } = useParams();
    const bookingLayoutId = id?.slice(3);
    return (
      <>
        <div className="flex gap-4 items-center w-min whitespace-nowrap">
          {bookingLayouts.length !== undefined ? (
            bookingLayouts.map((bookingLayout) => (
              <NavLink
                key={bookingLayout._id}
                linkTo={`${RouteUrl.BookingLayoutById}${bookingLayout._id}`}
                name={bookingLayout.name}
                className={` ${
                  bookingLayoutId === bookingLayout._id
                    ? 'border-b border-b-sky-500'
                    : ''
                }`}
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </>
    );
  };
