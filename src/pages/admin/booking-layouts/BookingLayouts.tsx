import { Button, Icon, Card } from '@/components';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { getBookingLayoutAction } from '@/redux/state/booking-layout-state/bookingLayoutActions';
import { AppState } from '@/redux/store';
import { RouteUrl, useGetData } from '@/utils';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export interface BookingLayoutsProps {}

export const BookingLayouts: React.FC<BookingLayoutsProps> = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { bookingLayouts, isLoading, createBookingLayoutSuccess } = useSelector(
    (state: AppState) => state.bookingLayouts
  );
  useGetData(getBookingLayoutAction(), createBookingLayoutSuccess);

  function navigateBookingLayoutInfo(id: string): void {
    navigate(`${RouteUrl.BookingLayouts}${RouteUrl.EditBookingLayout}${id}`);
  }

  function navigateCreateBookingLayout(): void {
    navigate(`${RouteUrl.BookingLayouts}${RouteUrl.CreateBookingLayout}`);
  }

  return (
    <div className="grid gap-y-4 ">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{t('bookingLayouts.myLayouts')}</h2>
        <Button
          variant="filled"
          size="medium"
          onClick={navigateCreateBookingLayout}
        >
          Create layout
        </Button>
      </div>
      {bookingLayouts.length ? (
        bookingLayouts.map((bookingLayout) => (
          <Card key={bookingLayout._id}>
            <div className="grid gap-y-3 p-4">
              <div className="flex justify-between">
                <p className="text-xl font-semibold">{bookingLayout.name}</p>
                <Icon
                  iconType="settings"
                  onClick={() => navigateBookingLayoutInfo(bookingLayout._id)}
                ></Icon>
              </div>
              <div className="flex gap-1">
                Number of input fields:
                <p className="font-bold">{bookingLayout.inputs.length}</p>
              </div>
            </div>
          </Card>
        ))
      ) : (
        <div>No booking layouts</div>
      )}
    </div>
  );
};
