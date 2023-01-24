import {
  Button,
  Icon,
  InputComponentHandler,
  LoadingSpinner,
} from '@/components';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import {
  deleteInputFromBookingLayoutAction,
  getBookingLayoutByIdAction,
} from '@/redux/state/booking-layout-state/bookingLayoutActions';
import { AppState } from '@/redux/store';
import { GetInputArgs, useGetData } from '@/utils';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { DeleteModal } from '../../components/delete-modal/DeleteModal';

export interface EditBookingLayoutProps {}

const EditBookingLayout: React.FC<EditBookingLayoutProps> = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const bookingLayoutId: string = id!.slice(3);
  const { bookingLayout, isLoading, deleteSuccess } = useSelector(
    (state: AppState) => state.bookingLayouts
  );
  const [showModal, setshowModal] = useState<boolean>(false);
  const [inputId, setInputId] = useState<string | null>(null);
  const [inputFields, setInputFields] = useState<GetInputArgs[]>([]);

  useGetData(getBookingLayoutByIdAction(bookingLayoutId), {
    deleteSuccess,
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

  function removeInput(field: GetInputArgs): void {
    const newInputFields = [...inputFields].filter(
      (inputField) => inputField !== field
    );
    setInputFields(newInputFields);
  }

  useEffect(() => {
    if (bookingLayout === undefined) {
      return;
    }
    setInputFields(bookingLayout.inputs);
  }, [bookingLayoutId]);

  return (
    <div>
      {bookingLayout !== undefined ? (
        <>
          <p className="text-2xl pb-4">{bookingLayout.name}</p>
          <LoadingSpinner isLoading={isLoading} size="small">
            <>
              {inputFields.length &&
                inputFields.map((inputField: GetInputArgs, index: number) => (
                  <div
                    key={index}
                    className="flex justify-between gap-4 items-center"
                  >
                    <InputComponentHandler
                      componentType={inputField.inputType}
                      onChange={(value) => console.log(value)}
                      label={inputField.label}
                      required={inputField.required}
                      value=""
                    />
                    <Icon
                      iconType="trash"
                      className="pt-4"
                      onClick={() => removeInput(inputField)}
                    />
                  </div>
                ))}
              <div className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <Button
                    size="medium"
                    variant="outline"
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </Button>
                  <Button size="medium" variant="filled">
                    Save
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="small"
                  onClick={() => setInputFields(bookingLayout.inputs)}
                >
                  Reset
                </Button>
              </div>
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
