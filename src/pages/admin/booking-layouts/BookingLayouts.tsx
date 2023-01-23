import { Button, Icon, Card, LoadingSpinner } from '@/components';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import {
  deleteBookingLayoutAction,
  getBookingLayoutAction,
} from '@/redux/state/booking-layout-state/bookingLayoutActions';
import { AppState } from '@/redux/store';
import { RouteUrl, useGetData } from '@/utils';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DeleteModal } from './components/delete-modal/DeleteModal';

export interface BookingLayoutsProps {}

export const BookingLayouts: React.FC<BookingLayoutsProps> = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    bookingLayouts,
    isLoading,
    createBookingLayoutSuccess,
    deleteBookingLayoutSuccess,
  } = useSelector((state: AppState) => state.bookingLayouts);

  useGetData(getBookingLayoutAction(), {
    createSuccess: createBookingLayoutSuccess,
    deleteSuccess: deleteBookingLayoutSuccess,
  });

  const [showModal, setshowModal] = useState<boolean>(false);
  const [bookingLayoutId, setBookingLayoutId] = useState<string | null>(null);

  function navigateBookingLayoutInfo(id: string): void {
    navigate(`${RouteUrl.BookingLayouts}${RouteUrl.EditBookingLayout}${id}`);
  }

  function navigateCreateBookingLayout(): void {
    navigate(`${RouteUrl.BookingLayouts}${RouteUrl.CreateBookingLayout}`);
  }

  function openDeleteModal(bookingLayoutId: string): void {
    setshowModal(true);
    setBookingLayoutId(bookingLayoutId);
  }

  function onDelete(): void {
    if (bookingLayoutId === null) {
      return;
    }

    setshowModal(false);
    dispatch(deleteBookingLayoutAction(bookingLayoutId));
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
      <LoadingSpinner isLoading={isLoading} size="small">
        <>
          {bookingLayouts.length ? (
            bookingLayouts.map((bookingLayout) => (
              <Card key={bookingLayout._id}>
                <div className="grid gap-y-3 p-4">
                  <div className="flex justify-between">
                    <p className="text-xl font-semibold">
                      {bookingLayout.name}
                    </p>
                    <div className="flex gap-2">
                      <Icon
                        iconType="settings"
                        onClick={() =>
                          navigateBookingLayoutInfo(bookingLayout._id)
                        }
                      />
                      <Icon
                        iconType="trash"
                        onClick={() => openDeleteModal(bookingLayout._id)}
                      />
                    </div>
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
        </>
      </LoadingSpinner>

      <DeleteModal
        showModal={showModal}
        onClose={() => setshowModal(false)}
        onDelete={onDelete}
        title={'Are you sure you want to delte this Booking layout?'}
      />
    </div>
  );
};
