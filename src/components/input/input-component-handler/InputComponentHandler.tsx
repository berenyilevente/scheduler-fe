import React from 'react';
import { ComponentType } from '../../../utils';
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
  component: ComponentType;
  onChange: (value: string) => void;
}

export const InputComponentHandler: React.FC<InputComponentHandlerProps> = ({
  component,
  onChange,
}) => {
  const renderComponent = (component: ComponentType): JSX.Element => {
    if (component === undefined) {
      <div>No component found!</div>;
    }
    switch (component) {
      case ComponentType.Text:
        return <TextInput onChange={onChange} />;
      case ComponentType.Email:
        return <EmailInput onChange={onChange} />;
      case ComponentType.Calendar:
        return <CalendarInput onChange={onChange} />;
      case ComponentType.Timepicker:
        return <TimepickerInput onChange={onChange} />;
      case ComponentType.Switch:
        return <SwitchInput onChange={onChange} />;
      case ComponentType.Password:
        return <PasswordInput onChange={onChange} />;
      case ComponentType.Phone:
        return <PhoneInput onChange={onChange} />;
      default:
        return <div>No component found!</div>;
    }
  };

  return renderComponent(component);
};
