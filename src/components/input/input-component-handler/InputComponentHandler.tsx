import React from 'react';
import { InputComponent } from '@/utils';
import {
  TextInput,
  EmailInput,
  CalendarInput,
  SwitchInput,
  TimepickerInput,
  PasswordInput,
  PhoneInput,
  DropdownInput,
} from '../input-components';

export interface InputComponentHandlerProps {
  componentType: string;
  onChange: (value: string, componentType?: string | null) => void;
  label: string;
  value: string;
  required: boolean;
}

export const InputComponentHandler: React.FC<InputComponentHandlerProps> = ({
  componentType,
  onChange,
  label,
  required,
  value,
}) => {
  const renderComponent = (componentType: string): JSX.Element => {
    switch (componentType) {
      case InputComponent.Text:
        return (
          <TextInput
            onChange={onChange}
            label={label}
            required={required}
            value={value}
          />
        );
      case InputComponent.Email:
        return (
          <EmailInput
            onChange={onChange}
            label={label}
            required={required}
            value={value}
          />
        );
      case InputComponent.Calendar:
        return (
          <CalendarInput
            onChange={onChange}
            label={label}
            required={required}
          />
        );
      case InputComponent.Timepicker:
        return (
          <TimepickerInput
            onChange={onChange}
            label={label}
            required={required}
          />
        );
      case InputComponent.Switch:
        return (
          <SwitchInput onChange={onChange} label={label} required={required} />
        );
      case InputComponent.Password:
        return (
          <PasswordInput
            onChange={onChange}
            label={label}
            required={required}
            value={value}
          />
        );
      case InputComponent.Phone:
        return (
          <PhoneInput
            onChange={onChange}
            label={label}
            required={required}
            value={value}
          />
        );

      default:
        return <div>No component found!</div>;
    }
  };

  return renderComponent(componentType);
};
