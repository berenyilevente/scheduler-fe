import React from 'react';
import { InputType } from '@/utils';
import {
  TextInput,
  EmailInput,
  CalendarInput,
  SwitchInput,
  TimepickerInput,
  PasswordInput,
  PhoneInput,
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
      case InputType.Text:
        return (
          <TextInput
            onChange={onChange}
            label={label}
            required={required}
            value={value}
          />
        );
      case InputType.Email:
        return (
          <EmailInput
            onChange={onChange}
            label={label}
            required={required}
            value={value}
          />
        );
      case InputType.Calendar:
        return (
          <CalendarInput
            onChange={onChange}
            label={label}
            required={required}
          />
        );
      case InputType.Timepicker:
        return (
          <TimepickerInput
            onChange={onChange}
            label={label}
            required={required}
          />
        );
      case InputType.Switch:
        return (
          <SwitchInput onChange={onChange} label={label} required={required} />
        );
      case InputType.Password:
        return (
          <PasswordInput
            onChange={onChange}
            label={label}
            required={required}
            value={value}
          />
        );
      case InputType.Phone:
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
