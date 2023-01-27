import { Button, DropdownInput, SwitchInput, TextInput } from '@/components';
import { t } from 'i18next';
import React from 'react';

export interface AddInputFieldProps {
  dropdownInputOptions: string[];
  inputFieldType: string | null;
  inputLabel: string | null;
  onDropdownChange: (selectedOption: string) => void;
  onChange: (value: string) => void;
  onSwitchChange: (switchValue: string) => void;
  onAddInputField: () => void;
}

export const AddInputField: React.FC<AddInputFieldProps> = ({
  dropdownInputOptions,
  inputFieldType,
  inputLabel,
  onDropdownChange,
  onChange,
  onSwitchChange,
  onAddInputField,
}) => {
  return (
    <>
      <div className="flex flex-col gap-y-3">
        <DropdownInput
          options={dropdownInputOptions}
          onChange={onDropdownChange}
          value={inputFieldType}
          label={t('bookingLayouts.createField.type')!}
        />
        <div className="flex items-center gap-x-4">
          <TextInput
            onChange={onChange}
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
    </>
  );
};
