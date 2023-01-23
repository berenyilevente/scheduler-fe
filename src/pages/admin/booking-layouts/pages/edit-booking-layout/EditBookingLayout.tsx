import { Icon, InputComponentHandler, LoadingSpinner } from '@/components';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import {
  deleteInputFromBookingLayoutAction,
  getBookingLayoutByIdAction,
} from '@/redux/state/booking-layout-state/bookingLayoutActions';
import { AppState } from '@/redux/store';
import { GetInputArgs, useGetData } from '@/utils';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DeleteModal } from '../../components/delete-modal/DeleteModal';

export interface EditBookingLayoutProps {}

const EditBookingLayout: React.FC<EditBookingLayoutProps> = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const bookingLayoutId: string = id!.slice(3);
  const {
    bookingLayout,
    isLoading,
    createBookingLayoutSuccess,
    deleteInputSuccess,
  } = useSelector((state: AppState) => state.bookingLayouts);
  const [showModal, setshowModal] = useState<boolean>(false);
  const [inputId, setInputId] = useState<string | null>(null);

  useGetData(getBookingLayoutByIdAction(bookingLayoutId), {
    deleteSuccess: deleteInputSuccess,
  });

  function openDeleteModal(inputId: string): void {
    setshowModal(true);
    setInputId(inputId);
  }

  function onDelete(): void {
    if (inputId === null) {
      return;
    }

    setshowModal(false);
    dispatch(deleteInputFromBookingLayoutAction(bookingLayoutId, inputId));
  }

  return (
    <div>
      {bookingLayout !== undefined ? (
        <>
          <p className="text-2xl pb-4">{bookingLayout.name}</p>
          <LoadingSpinner isLoading={isLoading} size="small">
            <>
              {bookingLayout.inputs.length &&
                bookingLayout.inputs.map(
                  (data: GetInputArgs, index: number) => (
                    <div
                      key={index}
                      className="flex justify-between gap-4 items-center"
                    >
                      <InputComponentHandler
                        componentType={data.inputType}
                        onChange={(value) => console.log(value)}
                        label={data.label}
                        required={data.required}
                        value=""
                      />
                      <Icon
                        iconType="trash"
                        className="pt-4"
                        onClick={() => openDeleteModal(data._id)}
                      />
                    </div>
                  )
                )}
            </>
          </LoadingSpinner>
        </>
      ) : (
        <div>No Booking layout with that id</div>
      )}
      <DeleteModal
        showModal={showModal}
        onClose={() => setshowModal(false)}
        onDelete={onDelete}
        title={'Are you sure you want to delte this input?'}
      />
    </div>
  );
};
export default EditBookingLayout;
