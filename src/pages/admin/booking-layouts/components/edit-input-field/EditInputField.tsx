import { DropdownInput, TextInput, SwitchInput, Button } from '@/components';
import { t } from 'i18next';
import React from 'react';

export interface EditInputFieldProps {}

const EditInputField: React.FC<EditInputFieldProps> = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div>
        <DropdownInput
          options={[]}
          onChange={(selectedOption) => console.log(selectedOption)}
          value={''}
          label={t('bookingLayouts.createField.type')!}
        />
        <div className="flex items-center gap-x-4">
          <TextInput
            onChange={(inputValue) => console.log(inputValue)}
            label={t('bookingLayouts.createField.label')!}
            value={''}
          />
          <div className="px-4">
            <SwitchInput
              onChange={(switchValue) => console.log(switchValue)}
              label="Required?"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <Button
          variant={'outline'}
          size="medium"
          onClick={() => console.log('clicked')}
          className="w-min"
          iconType="checkmark"
          iconColor="text-sky-500"
        >
          {t('bookingLayouts.editField.save')}
        </Button>
        <Button
          variant={'outline'}
          size="medium"
          onClick={() => console.log('clicked')}
          className="w-min"
        >
          {t('general.cancel')}
        </Button>
      </div>
    </div>
  );
};
export default EditInputField;
