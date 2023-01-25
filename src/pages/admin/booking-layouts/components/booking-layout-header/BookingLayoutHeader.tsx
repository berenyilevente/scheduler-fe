import { Card, Icon, Button } from '@/components';
import { GetBookingLayoutArgs, PrivateRouteUrl } from '@/utils';
import { t } from 'i18next';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface BookingLayoutHeaderProps {
  bookingLayouts: GetBookingLayoutArgs[];
  urlBookingLayoutId: string | undefined;
}

export const BookingLayoutHeader: React.FC<BookingLayoutHeaderProps> = ({
  bookingLayouts,
  urlBookingLayoutId,
}) => {
  const navigate = useNavigate();

  function navigateToCreateBookingLayout(): void {
    navigate(
      `${PrivateRouteUrl.BookingLayouts}${PrivateRouteUrl.CreateBookingLayout}`
    );
  }

  function getUnderLine(id: string): string {
    if (urlBookingLayoutId === id) {
      return ' border-b border-b-sky-500';
    }
    return '';
  }

  function navigateToLayout(bookingLayout: string): void {
    navigate(bookingLayout);
  }

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{t('bookingLayouts.myLayouts')}</h2>
        <Button
          variant="outline"
          size="medium"
          onClick={navigateToCreateBookingLayout}
          iconType="plus"
          iconColor="text-sky-500"
          iconPosition="left"
        >
          Create layout
        </Button>
      </div>

      <div>
        <Card>
          <div className="flex flex-row gap-8 items-center">
            <Icon iconType="layout" />
            <p>{t('bookingLayouts.description')}</p>
          </div>
        </Card>
      </div>
      <div>
        <div className="flex gap-4 items-center w-min whitespace-nowrap p-2">
          {bookingLayouts.length !== undefined ? (
            bookingLayouts.map((bookingLayout) => (
              <div
                key={bookingLayout._id}
                onClick={() =>
                  navigateToLayout(
                    `${PrivateRouteUrl.BookingLayoutById}${bookingLayout._id}`
                  )
                }
                className={`w-full hover:cursor-pointer flex justify-start gap-x-4 items-center py-2 px-4 ${getUnderLine(
                  bookingLayout._id
                )}`}
              >
                <div>{bookingLayout.name}</div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
