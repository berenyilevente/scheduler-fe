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

  function navigateSettings() {
    navigate(`${RouteUrl.BookingLayouts}/${RouteUrl.InputSettings}`);
  }

  console.log(bookingLayouts);

  return (
    <div className="grid gap-y-4 ">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{t('bookingLayouts.myLayouts')}</h2>
        <Button variant="filled" size="medium">
          Create layout
        </Button>
      </div>
      <Card>
        <div className="grid gap-y-3 p-4">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Test booking layout</p>
            <Icon iconType="settings" onClick={navigateSettings}></Icon>
          </div>
          <div>
            <p>Info 1</p>
            <p>Info 1</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
