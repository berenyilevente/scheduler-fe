import { Button, Icon, Card, LoadingSpinner } from '@/components';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import {
  deleteBookingLayoutAction,
  getBookingLayoutAction,
  getBookingLayoutByIdAction,
} from '@/redux/state/booking-layout-state/bookingLayoutActions';
import { AppState } from '@/redux/store';
import i18n from '@/translations';
import {
  GetBookingLayoutArgs,
  GetInputArgs,
  getTranslation,
  RouteUrl,
  useGetData,
} from '@/utils';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { DeleteModal } from './components/delete-modal/DeleteModal';

export interface BookingLayoutsProps {}

export const BookingLayouts: React.FC<BookingLayoutsProps> = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const urlBookingLayoutId = id?.slice(3);
  const { bookingLayouts, isLoading, createSuccess, deleteSuccess } =
    useSelector((state: AppState) => state.bookingLayouts);

  useGetData(getBookingLayoutAction(), {
    createSuccess,
    deleteSuccess,
  });

  const [showModal, setshowModal] = useState<boolean>(false);
  const [bookingLayoutId, setBookingLayoutId] = useState<string | null>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editInputFields, setEditInputFields] =
    useState<GetInputArgs[] | null>(null);

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

  function onRemoveInput(field: GetInputArgs): void {
    if (editInputFields === null) {
      return;
    }
    const newInputFields = [...editInputFields].filter(
      (inputField) => inputField !== field
    );
    setEditInputFields(newInputFields);
  }

  function getUnderLine(id: string): string {
    if (urlBookingLayoutId === id) {
      return ' border-b border-b-sky-500';
    }
    return '';
  }

  function onEditClick(): void {
    setIsEdit(!isEdit);
  }

  function navigateTo(routeUrl: string): void {
    setEditInputFields(null);
    setIsEdit(false);
    navigate(routeUrl);
  }

  function onResetValues(): void {
    if (bookingLayouts === undefined || bookingLayouts.length === undefined) {
      return;
    }

    for (let i = 0; i < bookingLayouts.length; i++) {
      const bookingLayout: GetBookingLayoutArgs = bookingLayouts[i];

      if (bookingLayout._id === urlBookingLayoutId) {
        setEditInputFields(bookingLayout.inputs);
      }
    }
  }

  useEffect(() => {
    if (urlBookingLayoutId !== undefined) {
      return;
    }

    navigate(`${RouteUrl.BookingLayoutById}${bookingLayouts[0]._id}`);
  }, []);

  useEffect(() => {
    if (isEdit === false) {
      setEditInputFields(null);
      return;
    }

    if (bookingLayouts === undefined || bookingLayouts.length === undefined) {
      return;
    }

    for (let i = 0; i < bookingLayouts.length; i++) {
      const bookingLayout: GetBookingLayoutArgs = bookingLayouts[i];

      if (bookingLayout._id === urlBookingLayoutId) {
        setEditInputFields(bookingLayout.inputs);
      }
    }
  }, [isEdit, deleteSuccess]);

  return (
    <div className="grid gap-y-4 ">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{t('bookingLayouts.myLayouts')}</h2>
        <Button
          variant="outline"
          size="medium"
          onClick={navigateCreateBookingLayout}
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
                  navigateTo(
                    `${RouteUrl.BookingLayoutById}${bookingLayout._id}`
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
      <div className="border border-slate-100 my-2"></div>
      <LoadingSpinner isLoading={isLoading} size="small">
        <>
          {bookingLayouts !== undefined ? (
            bookingLayouts.map(
              (bookingLayout) =>
                bookingLayout._id === urlBookingLayoutId && (
                  <Card key={bookingLayout._id}>
                    <div className="grid gap-y-3 p-4">
                      <div className="flex justify-between">
                        <p className="text-xl font-semibold">
                          {bookingLayout.name}
                        </p>
                        <div className="flex gap-3 items-center">
                          <Button
                            variant="outline"
                            size="medium"
                            iconType={`${isEdit ? 'refresh' : 'settings'}`}
                            onClick={() =>
                              isEdit === false ? onEditClick() : onResetValues()
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
                    <div className="p-4">
                      {bookingLayout.inputs.length !== undefined ? (
                        (editInputFields || bookingLayout.inputs).map(
                          (inputField) => (
                            <div
                              key={inputField._id}
                              className={`${
                                isEdit && 'animate-shake hover:cursor-pointer'
                              }  flex justify-between border border-slate-100 p-4 rounded-md my-4`}
                            >
                              <div className="flex items-center gap-6">
                                <Icon iconType="list" />
                                <div>
                                  <p className="font-semibold">
                                    {getTranslation(
                                      'inputFields',
                                      inputField.inputType,
                                      i18n
                                    )}
                                  </p>
                                  <p className="text-sm">
                                    {'label: ' + inputField.label}
                                  </p>
                                </div>
                              </div>
                              {isEdit && (
                                <div className="flex gap-x-3 items-center">
                                  <Icon iconType="edit" />
                                  <Icon
                                    iconType="remove"
                                    onClick={() => onRemoveInput(inputField)}
                                  />
                                </div>
                              )}
                            </div>
                          )
                        )
                      ) : (
                        <></>
                      )}
                    </div>
                    {isEdit && (
                      <div className="flex justify-end gap-4 px-4">
                        <Button
                          size="medium"
                          variant="outline"
                          onClick={() => setIsEdit(false)}
                        >
                          Cancel
                        </Button>
                        <Button size="medium" variant="filled" iconType="save">
                          Save
                        </Button>
                      </div>
                    )}
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
