import { Icon } from '@/components';
import i18n from '@/translations';
import { GetBookingLayoutArgs, GetInputArgs, getTranslation } from '@/utils';
import React from 'react';
import { AddInputField } from '../add-input-field/AddInputField';
import EditInputField from '../edit-input-field/EditInputField';

export interface InputFieldProps {
  bookingLayout: GetBookingLayoutArgs;
  editInputFields: GetInputArgs[] | null;
  isEdit: boolean;
  editSingleInputId: string | null;
  onRemoveInput: (field: GetInputArgs) => void;
  onEditSingleInput: (inputId: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  bookingLayout,
  editInputFields,
  isEdit,
  editSingleInputId,
  onRemoveInput,
  onEditSingleInput,
}) => {
  function getInputFields(): GetInputArgs[] {
    if (editInputFields === null) {
      return bookingLayout.inputs;
    }
    return editInputFields;
  }

  return (
    <>
      {bookingLayout.inputs.length !== undefined ? (
        getInputFields().map((inputField, index) => (
          <div
            key={inputField._id || index}
            className="border border-slate-100 p-4 rounded-md my-4"
          >
            <div className="flex justify-between">
              <div className="flex items-center gap-6">
                <Icon iconType="list" />
                <div>
                  <p className="font-semibold">
                    {getTranslation('inputFields', inputField.inputType, i18n)}
                  </p>
                  <p className="text-sm">{'label: ' + inputField.label}</p>
                </div>
              </div>

              {isEdit === true && (
                <div className="flex gap-x-3 items-center">
                  <Icon
                    iconType={'edit'}
                    onClick={() => onEditSingleInput(inputField._id!)}
                  />
                  <Icon
                    iconType="remove"
                    onClick={() => onRemoveInput(inputField)}
                  />
                </div>
              )}
            </div>
            {editSingleInputId === inputField._id && <EditInputField />}
          </div>
        ))
      ) : (
        <span>No input fields added.</span>
      )}
    </>
  );
};
