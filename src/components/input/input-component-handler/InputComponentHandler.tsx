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
} from '../input-components';

export interface InputComponentHandlerProps {
  component: string;
  onChange: (value: string) => void;
  label: string;
  required: boolean;
}

export const InputComponentHandler: React.FC<InputComponentHandlerProps> = ({
  component,
  onChange,
  label,
  required,
}) => {
  const renderComponent = (component: string): JSX.Element => {
    if (component === undefined) {
      return <></>;
    }
    switch (component) {
      case InputComponent.Text:
        return (
          <TextInput onChange={onChange} label={label} required={required} />
        );
      case InputComponent.Email:
        return (
          <EmailInput onChange={onChange} label={label} required={required} />
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
          />
        );
      case InputComponent.Phone:
        return (
          <PhoneInput onChange={onChange} label={label} required={required} />
        );
      default:
        return <div>No component found!</div>;
    }
  };

  return renderComponent(component);
};
