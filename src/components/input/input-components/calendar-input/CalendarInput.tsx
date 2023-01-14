import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import InputLabel from '../../input-label/InputLabel';
import './index.css';
import { InputError } from '../../input-error/InputError';
import { Icon } from '../../../icon/Icon';

export interface CalendarInputProps {
  label?: string;
  onChange: (date: string) => void;
  required?: boolean;
  errorMessage?: string;
}

export const CalendarInput: React.FC<CalendarInputProps> = ({
  label,
  onChange,
  required,
  errorMessage,
}) => {
  const [selected, setSelected] = useState<Date>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const onSelect = (date: Date): void => {
    onChange(format(date, 'dd.MM.yyyy'));
    setSelected(date);
    setIsOpen(false);
  };

  const InputValue = (): JSX.Element => {
    if (selected !== undefined) {
      return <span>{format(selected, 'dd.MM.yyyy')}</span>;
    }
    return <span>Please select a date</span>;
  };

  const onError = (errorMessage?: string): string => {
    if (!errorMessage) {
      return '';
    }
    return 'border-red-500';
  };

  return (
    <InputLabel label={label} required={required} errorMessage={errorMessage}>
      <div className="relative inline-block text-left select-none w-full">
        <div>
          <span className="rounded-md shadow-sm">
            <button
              type="button"
              onClick={toggleDropdown}
              className={`flex items-center justify-between w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm text-gray-700 ${onError(
                errorMessage
              )}`}
              id="options"
            >
              <InputValue />
              <Icon iconType="calendar" />
            </button>
          </span>
        </div>
        {isOpen && (
          <div className="select-none bg-white w-min p-1 mt-2 rounded-md">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={(date) => onSelect(date!)}
            />
          </div>
        )}
        <InputError errorMessage={errorMessage} />
      </div>
    </InputLabel>
  );
};
