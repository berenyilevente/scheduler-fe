import React from 'react';
import {
  DropdownInput,
  TextInput,
  SwitchInput,
  Button,
  InputComponentHandler,
  Icon,
  Card,
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
  const { createSuccess } = useSelector(
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

  function onAddInputField(): void {
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

  function onRemoveInputField(addedInputField: PostInputArgs): void {
    if (addedInputFields === null) {
      return;
    }
    const newInputFields = [...addedInputFields].filter(
      (inputField) => inputField !== addedInputField
    );
    setAddedInputFields(newInputFields);
  }

  function onCreateBookingLayout(): void {
    if (
      bookingLayoutNameValue === null ||
      addedInputFields === null ||
      addedInputFields.length < 1
    ) {
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

    if (createSuccess === true) {
      navigate(RouteUrl.BookingLayouts);
    }
  }

  return (
    <div className="grid gap-y-4 ">
      <h1 className="text-2xl font-bold">Create a booking layout</h1>
      <div>
        <Card>
          <div className="flex flex-row gap-8 items-center">
            <Icon iconType="createNew" className="pt-2" />
            <p>{t('bookingLayouts.createBookingLayout.description')}</p>
          </div>
        </Card>
      </div>
      <Card className="p-8">
        <div className="grid grid-cols-1 gap-y-5">
          <TextInput
            onChange={(value) => onBookingLayoutNameChange(value)}
            value={bookingLayoutNameValue}
            label={'Booking layout name'}
            required
          />
          <div className="border border-slate-100 my-2"></div>
          <DropdownInput
            options={dropdownInputOptions}
            onChange={(selectedOption) => onDropdownChange(selectedOption)}
            value={inputFieldType}
            label={t('bookingLayouts.createField.type')!}
          />
          <div className="flex items-center gap-x-4">
            <TextInput
              onChange={(inputValue) => onInputChange(inputValue)}
              label={t('bookingLayouts.createField.label')!}
              value={inputLabel}
            />
            <div className="px-4">
              <SwitchInput
                onChange={(switchValue) => onSwitchChange(switchValue)}
                label="Required?"
              />
            </div>
          </div>
          <Button
            variant={'outline'}
            size="medium"
            onClick={onAddInputField}
            className="w-min"
            iconType="plus"
            iconColor="text-sky-500"
          >
            {t('bookingLayouts.createField.add')}
          </Button>
        </div>
      </Card>

      <div className="border border-slate-100 mt-4"></div>
      <div className="grid grid-cols-1 gap-y-5">
        <h2 className="text-lg font-semibold">
          {t('bookingLayouts.createField.preview')}
        </h2>
        <Card>
          <div className="flex gap-x-3 items-center">
            <p>Layout name:</p>
            <p className="font-semibold">{bookingLayoutNameValue}</p>
          </div>
          {addedInputFields.length ? (
            addedInputFields.map(
              (addedInputField: PostInputArgs, index: number) => (
                <div
                  key={index}
                  className="flex justify-between gap-4 items-center border border-slate-100 p-4 rounded-md my-4"
                >
                  <InputComponentHandler
                    componentType={addedInputField.inputType}
                    onChange={(value) => console.log(value)}
                    label={addedInputField.label}
                    required={addedInputField.required}
                    value=""
                  />
                  <Icon
                    iconType="remove"
                    className="pt-4"
                    onClick={() => onRemoveInputField(addedInputField)}
                  />
                </div>
              )
            )
          ) : (
            <div className="border border-slate-100 p-4 rounded-md my-4">
              No fields added
            </div>
          )}
        </Card>
      </div>
      <div className="border border-slate-100 mt-4"></div>
      <div className="flex gap-x-4 justify-end">
        <Button
          variant="outline"
          size="large"
          className="w-min"
          onClick={() => navigate(-1)}
        >
          Cancel
        </Button>
        <Button
          variant="filled"
          size="large"
          className="w-min"
          onClick={onCreateBookingLayout}
        >
          Create booking layout
        </Button>
      </div>
    </div>
  );
};
