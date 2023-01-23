import React from 'react';
import {
  DropdownInput,
  TextInput,
  SwitchInput,
  Button,
  InputComponentHandler,
  Icon,
} from '@/components';
import { dropdownInputOptions, PostInputArgs, RouteUrl } from '@/utils';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '@/redux/store';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { postBookingLayoutAction } from '@/redux/state/booking-layout-state/bookingLayoutActions';
import { useNavigate } from 'react-router-dom';

export interface CreateBookingLayoutProps {}

export const CreateBookingLayout: React.FC<CreateBookingLayoutProps> = () => {
  const dispatch = useAppDispatch();
  const { createBookingLayoutSuccess } = useSelector(
    (state: AppState) => state.bookingLayouts
  );
  const navigate = useNavigate();

  const { t } = useTranslation();
  const [inputFieldType, setInputFieldType] = useState<string | null>(null);
  const [bookingLayoutNameValue, setBookingLayoutNameValue] =
    useState<string | null>(null);
  const [inputLabel, setInputLabel] = useState<string | null>(null);
  const [requiredSwitch, setRequiredSwitch] = useState<boolean>(false);
  const [addedInputFields, setAddedInputFields] = useState<PostInputArgs[]>([]);

  function onDropdownChange(selectedOption: string): void {
    setInputFieldType(selectedOption);
  }

  function onBookingLayoutNameChange(inputValue: string): void {
    setBookingLayoutNameValue(inputValue);
  }

  function onInputChange(inputValue: string): void {
    setInputLabel(inputValue);
  }

  function onSwitchChange(switchValue: string): void {
    setRequiredSwitch(switchValue === 'true' && true);
  }

  function onCreateInput(): void {
    if (
      inputFieldType === null ||
      inputLabel === null ||
      requiredSwitch === null
    ) {
      return;
    }

    setAddedInputFields([
      ...addedInputFields,
      {
        inputType: inputFieldType,
        label: inputLabel,
        required: requiredSwitch,
      },
    ]);

    setInputFieldType(null);
    setInputLabel(null);
    setRequiredSwitch(false);
  }

  function onRemoveInputField(index: number): void {}

  function onCreateBookingLayout(): void {
    if (bookingLayoutNameValue === null || addedInputFields.length < 1) {
      return;
    }

    dispatch(
      postBookingLayoutAction({
        inputs: addedInputFields,
        name: bookingLayoutNameValue,
      })
    );

    setBookingLayoutNameValue(null);
    setInputFieldType(null);
    setInputLabel(null);
    setRequiredSwitch(false);

    if (createBookingLayoutSuccess === true) {
      navigate(RouteUrl.BookingLayouts);
    }
  }

  return (
    <div className="grid gap-y-4 ">
      <div className="grid gap-y-5">
        <h1 className="text-2xl font-bold">Create a booking layout</h1>
        <TextInput
          onChange={(value) => onBookingLayoutNameChange(value)}
          value={bookingLayoutNameValue}
          label={'Booking layout name'}
          required
        />
      </div>
      <div className="border border-slate-100 mt-4"></div>
      <div className="grid grid-cols-1 gap-y-5">
        <h2 className="text-2xl font-bold">{'Booking layout input fields'}</h2>
        <DropdownInput
          options={dropdownInputOptions}
          onChange={(selectedOption) => onDropdownChange(selectedOption)}
          value={inputFieldType}
          label={t('bookingLayouts.createField.type')!}
        />
        <TextInput
          onChange={(inputValue) => onInputChange(inputValue)}
          label={t('bookingLayouts.createField.label')!}
          value={inputLabel}
        />
        <SwitchInput
          onChange={(switchValue) => onSwitchChange(switchValue)}
          label="Required?"
        />
        <Button variant={'outline'} size="medium" onClick={onCreateInput}>
          {t('bookingLayouts.createField.create')}
        </Button>
      </div>
      <div className="border border-slate-100 mt-4"></div>
      <div className="grid grid-cols-1 gap-y-5">
        <h2 className="text-2xl font-bold">
          {t('bookingLayouts.createField.created')}
        </h2>
        <>
          {addedInputFields.length ? (
            addedInputFields.map((data: PostInputArgs, index: number) => (
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
                  onClick={() => onRemoveInputField(index)}
                />
              </div>
            ))
          ) : (
            <>No fields added</>
          )}
        </>
      </div>
      <div className="border border-slate-100 mt-4"></div>
      <Button variant="filled" size="large" onClick={onCreateBookingLayout}>
        Create booking layout
      </Button>
    </div>
  );
};
