import { Card, LoadingSpinner, Divider, Button } from '@/components';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import {
  deleteBookingLayoutAction,
  getBookingLayoutAction,
  patchBookingLayoutAction,
} from '@/redux/state/booking-layout-state/bookingLayoutActions';
import { AppState } from '@/redux/store';
import {
  dropdownInputOptions,
  GetBookingLayoutArgs,
  GetInputArgs,
  PrivateRouteUrl,
  useGetData,
} from '@/utils';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AddInputField } from './components/add-input-field/AddInputField';
import { BookingLayoutCardFooter } from './components/booking-layout-card-footer/BookingLayoutCardFooter';
import { BookingLayoutCard } from './components/booking-layout-card/BookingLayoutCard';
import { BookingLayoutHeader } from './components/booking-layout-header/BookingLayoutHeader';
import { DeleteModal } from './components/delete-modal/DeleteModal';
import { InputField } from './components/input-field/InputField';
import { DropResult } from 'react-beautiful-dnd';

export interface BookingLayoutsProps {}

export const BookingLayouts: React.FC<BookingLayoutsProps> = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const urlBookingLayoutId = id?.slice(3);
  const {
    bookingLayouts,
    isLoading,
    createSuccess,
    deleteSuccess,
    patchSuccess,
  } = useSelector((state: AppState) => state.bookingLayouts);

  useGetData(getBookingLayoutAction(), {
    createSuccess,
    deleteSuccess,
    patchSuccess,
  });

  const [showModal, setshowModal] = useState<boolean>(false);
  const [bookingLayoutId, setBookingLayoutId] = useState<string | null>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [addField, setAddField] = useState<boolean>(false);
  const [editInputFields, setEditInputFields] =
    useState<GetInputArgs[] | null>(null);
  const [bookingLayoutNameValue, setBookingLayoutNameValue] =
    useState<string | null>(null);
  const [inputFieldType, setInputFieldType] = useState<string | null>(null);
  const [inputLabel, setInputLabel] = useState<string | null>(null);
  const [requiredSwitch, setRequiredSwitch] = useState<boolean>(false);
  const [editSingleInputId, setEditSingleInputId] =
    useState<string | null>(null);

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

  function onEditClick(bookingLayoutName: string): void {
    setIsEdit(!isEdit);
    setBookingLayoutNameValue(bookingLayoutName);
  }

  function onResetValues(): void {
    if (bookingLayouts === undefined || bookingLayouts.length === undefined) {
      return;
    }

    for (let i = 0; i < bookingLayouts.length; i++) {
      const bookingLayout: GetBookingLayoutArgs = bookingLayouts[i];

      if (bookingLayout._id === urlBookingLayoutId) {
        setEditInputFields(bookingLayout.inputs);
        setBookingLayoutNameValue(bookingLayout.name);
      }
    }
  }

  function patchBookingLayout(id: string): void {
    if (editInputFields === null || bookingLayoutNameValue === null) {
      return;
    }

    dispatch(
      patchBookingLayoutAction(id, {
        inputs: editInputFields,
        name: bookingLayoutNameValue,
      })
    );

    if (patchSuccess) {
      setIsEdit(false);
    }
  }

  function onAddInputField(index: number): void {
    setAddField(!addField);

    if (
      editInputFields === null ||
      inputFieldType === null ||
      inputLabel === null ||
      requiredSwitch === null
    ) {
      return;
    }

    setEditInputFields([
      ...editInputFields,
      {
        _id: index.toString(),
        inputType: inputFieldType,
        label: inputLabel,
        required: requiredSwitch,
      },
    ]);

    setInputFieldType(null);
    setInputLabel(null);
    setRequiredSwitch(false);
  }

  function onDropdownChange(selectedOption: string): void {
    setInputFieldType(selectedOption);
  }

  function onInputChange(inputValue: string): void {
    setInputLabel(inputValue);
  }

  function onSwitchChange(switchValue: string): void {
    setRequiredSwitch(switchValue === 'true' && true);
  }

  function onEditSingleInput(inputId: string): void {
    setEditSingleInputId((prevState) =>
      prevState === inputId ? null : inputId
    );
  }

  function navigateToCreateBookingLayout(): void {
    navigate(
      `${PrivateRouteUrl.BookingLayouts}${PrivateRouteUrl.CreateBookingLayout}`
    );
  }

  useEffect(() => {
    if (bookingLayouts.length < 1) {
      return;
    }

    if (urlBookingLayoutId === undefined) {
      navigate(`${PrivateRouteUrl.BookingLayoutById}${bookingLayouts[0]._id}`);
    }
    setIsEdit(false);
  }, [navigate]);

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
      <BookingLayoutHeader
        bookingLayouts={bookingLayouts}
        urlBookingLayoutId={urlBookingLayoutId}
      />
      <Divider />
      <LoadingSpinner isLoading={isLoading} size="small">
        <>
          {bookingLayouts.length ? (
            bookingLayouts.map(
              (bookingLayout, index) =>
                bookingLayout._id === urlBookingLayoutId && (
                  <Card key={bookingLayout._id}>
                    <BookingLayoutCard
                      bookingLayout={bookingLayout}
                      isEdit={isEdit}
                      editInputFields={editInputFields}
                      bookingLayoutNameValue={bookingLayoutNameValue}
                      onChange={(value) => setBookingLayoutNameValue(value)}
                      onEditClick={onEditClick}
                      onResetValues={onResetValues}
                      openDeleteModal={openDeleteModal}
                    />
                    <InputField
                      bookingLayout={bookingLayout}
                      editInputFields={editInputFields}
                      isEdit={isEdit}
                      editSingleInputId={editSingleInputId}
                      onRemoveInput={onRemoveInput}
                      onEditSingleInput={onEditSingleInput}
                      setEditInputFields={setEditInputFields}
                    />

                    {isEdit && (
                      <div className="border border-slate-100 p-4 rounded-md my-4">
                        <AddInputField
                          dropdownInputOptions={dropdownInputOptions}
                          inputFieldType={inputFieldType}
                          inputLabel={inputLabel}
                          onDropdownChange={(selectedOption) =>
                            onDropdownChange(selectedOption)
                          }
                          onChange={(inputValue) => onInputChange(inputValue)}
                          onSwitchChange={(switchValue) =>
                            onSwitchChange(switchValue)
                          }
                          onAddInputField={() => onAddInputField(index)}
                        />
                      </div>
                    )}
                    <BookingLayoutCardFooter
                      isEdit={isEdit}
                      bookingLayoutId={bookingLayout._id}
                      onCancel={() => setIsEdit(false)}
                      onSave={() => patchBookingLayout(bookingLayout._id)}
                    />
                  </Card>
                )
            )
          ) : (
            <div className="grid place-items-center gap-y-4">
              <div>{t('bookingLayouts.noResult')}</div>
              <div>
                <Button
                  variant="filled"
                  size="medium"
                  onClick={navigateToCreateBookingLayout}
                  iconType="plus"
                  iconColor="text-white"
                  iconPosition="left"
                >
                  Create layout
                </Button>
              </div>
            </div>
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
