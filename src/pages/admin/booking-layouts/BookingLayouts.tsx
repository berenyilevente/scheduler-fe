import { Button, Icon, Card, LoadingSpinner } from '@/components';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import {
  deleteBookingLayoutAction,
  getBookingLayoutAction,
  getBookingLayoutByIdAction,
} from '@/redux/state/booking-layout-state/bookingLayoutActions';
import { AppState } from '@/redux/store';
import i18n from '@/translations';
import { getTranslation, RouteUrl, useGetData } from '@/utils';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BookingLayoutNavigation } from './components/booking-layout-navigation/BookingLayoutNavigation';
import { DeleteModal } from './components/delete-modal/DeleteModal';

export interface BookingLayoutsProps {}

export const BookingLayouts: React.FC<BookingLayoutsProps> = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const selectedBookingLayoutId = id?.slice(3);
  const { bookingLayouts, isLoading, createSuccess, deleteSuccess } =
    useSelector((state: AppState) => state.bookingLayouts);

  useGetData(getBookingLayoutAction(), {
    createSuccess,
    deleteSuccess,
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
          variant="outline"
          size="medium"
          onClick={navigateCreateBookingLayout}
          iconType="plus"
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
              <Link
                key={bookingLayout._id}
                to={`${RouteUrl.BookingLayoutById}${bookingLayout._id}`}
                className={`w-full flex justify-start gap-x-4 items-center py-2 px-4 ${
                  selectedBookingLayoutId === bookingLayout._id
                    ? 'border-b border-b-sky-500'
                    : ''
                }`}
              >
                <div>{bookingLayout.name}</div>
              </Link>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="border border-slate-100 my-2"></div>
      <LoadingSpinner isLoading={isLoading} size="small">
        <>
          {bookingLayouts !== undefined ? (
            bookingLayouts.map(
              (bookingLayout) =>
                bookingLayout._id === selectedBookingLayoutId && (
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
                    </div>
                    <div className="p-4">
                      {bookingLayout.inputs.length !== undefined ? (
                        bookingLayout.inputs.map((input) => (
                          <div
                            key={input._id}
                            className="flex items-center gap-6 border border-slate-100 p-4 rounded-md my-4"
                          >
                            <Icon iconType="list" />
                            <div>
                              <p className="font-semibold">
                                {getTranslation(
                                  'inputFields',
                                  input.inputType,
                                  i18n
                                )}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <></>
                      )}
                    </div>
                  </Card>
                )
            )
          ) : (
            <span>{t('bookingLayouts.noResult')}</span>
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
