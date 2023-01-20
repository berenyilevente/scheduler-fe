import React from 'react';
import {
  DropdownInput,
  TextInput,
  SwitchInput,
  Button,
  InputComponentHandler,
  LoadingSpinner,
  Icon,
} from '@/components';
import { dropdownInputOptions, GetInputArgs, useGetData } from '@/utils';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '@/redux/store';
import {
  deleteInputAction,
  getInputAction,
  postInputAction,
} from '@/redux/input-state/inputActions';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { DeleteInputModal } from '../../components/delete-input-modal/DeleteInputModal';
import { useTranslation } from 'react-i18next';

export interface InputSettingsPageProps {}

const InputSettingsPage: React.FC<InputSettingsPageProps> = () => {
  const dispatch = useAppDispatch();
  const { inputFields, isLoading, createInputSuccess, deleteInputSuccess } =
    useSelector((state: AppState) => state.inputs);

  useGetData(getInputAction(), createInputSuccess, deleteInputSuccess);

  const { t } = useTranslation();
  const [dropdownValue, setDropdownValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [switchValue, setSwitchValue] = useState<boolean>(false);
  const [showModal, setshowModal] = useState<boolean>(false);
  const [inputId, setInputId] = useState<string | null>(null);

  function onDropdownChange(selectedOption: string): void {
    setDropdownValue(selectedOption);
  }

  function onInputChange(inputValue: string): void {
    setInputValue(inputValue);
  }

  function onSwitchChange(switchValue: string): void {
    setSwitchValue(switchValue === 'true' && true);
  }

  function openDeleteModal(inputId: string): void {
    setshowModal(true);
    setInputId(inputId);
  }

  function onCreateInput(): void {
    if (dropdownValue === null || inputValue === null || switchValue === null) {
      return;
    }

    dispatch(
      postInputAction({
        inputType: dropdownValue,
        label: inputValue,
        required: switchValue,
      })
    );
    setDropdownValue(null);
    setInputValue(null);
    setSwitchValue(false);
  }

  function onDelete(): void {
    if (inputId === null) {
      return;
    }

    setshowModal(false);
    dispatch(deleteInputAction(inputId));
  }

  const [fieldUpdates, setFieldUpdates] = useState<
    {
      id: string | null;
      component: string | null;
      value: string | null;
    }[]
  >([]);

  const inputFieldUpdates = useCallback(
    (
      id: string | null,
      component: string | null,
      value: string | null,
      index: number
    ) => {
      setFieldUpdates((prevState) => {
        const newState = [...prevState];
        newState[index] = { id, component, value };
        return newState;
      });
    },
    []
  );

  console.log(fieldUpdates);

  return (
    <div className="grid gap-y-4 ">
      <div className="grid grid-cols-1 gap-y-5">
        <h2 className="text-2xl font-bold">
          {t('bookingLayouts.createField.title')}
        </h2>
        <DropdownInput
          options={dropdownInputOptions}
          onChange={(selectedOption) => onDropdownChange(selectedOption)}
          value={dropdownValue}
          label={t('bookingLayouts.createField.type')!}
        />
        <TextInput
          onChange={(inputValue) => onInputChange(inputValue)}
          label={t('bookingLayouts.createField.label')!}
          value={inputValue}
        />
        <SwitchInput
          onChange={(switchValue) => onSwitchChange(switchValue)}
          label="Required?"
        />
        <Button variant={'filled'} size="medium" onClick={onCreateInput}>
          {t('bookingLayouts.createField.create')}
        </Button>
      </div>
      <div className="border border-slate-100 mt-4"></div>
      <div className="grid grid-cols-1 gap-y-5">
        <h2 className="text-2xl font-bold">
          {t('bookingLayouts.createField.created')}
        </h2>
        <LoadingSpinner isLoading={isLoading} size="small">
          <>
            {inputFields.length &&
              inputFields.map((data: GetInputArgs, index: number) => (
                <div
                  key={data._id}
                  className="flex justify-between gap-4 items-center"
                >
                  <InputComponentHandler
                    componentType={data.inputType}
                    onChange={(value) =>
                      inputFieldUpdates(data._id, data.inputType, value, index)
                    }
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
              ))}
          </>
        </LoadingSpinner>
      </div>
      <DeleteInputModal
        showModal={showModal}
        onClose={() => setshowModal(false)}
        onDelete={onDelete}
      />
    </div>
  );
};
export default InputSettingsPage;
