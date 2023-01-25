import { Icon } from '@/components';
import i18n from '@/translations';
import { GetBookingLayoutArgs, GetInputArgs, getTranslation } from '@/utils';
import React from 'react';

export interface InputFieldProps {
  bookingLayout: GetBookingLayoutArgs;
  editInputFields: GetInputArgs[] | null;
  isEdit: boolean;
  onRemoveInput: (field: GetInputArgs) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  bookingLayout,
  editInputFields,
  isEdit,
  onRemoveInput,
}) => {
  function getInputFields(): GetInputArgs[] {
    if (editInputFields === null) {
      return bookingLayout.inputs;
    }
    return editInputFields;
  }

  return (
    <div className="p-4">
      {bookingLayout.inputs.length !== undefined ? (
        getInputFields().map((inputField) => (
          <div
            key={inputField._id}
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
                    onClick={() => console.log('editSingleInput')}
                  />
                  <Icon
                    iconType="remove"
                    onClick={() => onRemoveInput(inputField)}
                  />
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <span>No input fields added.</span>
      )}
    </div>
  );
};
