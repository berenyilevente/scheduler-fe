import React, { useState } from 'react';
import { timeValues } from '@/utils';
import { Icon, InputLabel, InputError } from '@/components';

export interface TimepickerInputProps {
  onChange: (time: string, componentType: string | null) => void;
  label?: string;
  required?: boolean;
  errorMessage?: string;
  componentType?: string;
}

export const TimepickerInput: React.FC<TimepickerInputProps> = ({
  onChange,
  label,
  required,
  errorMessage,
  componentType,
}) => {
  const [timeValue, setTimeValue] = useState<string>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const onTimeClick = (time: string): void => {
    setIsOpen(false);
    onChange(time, componentType ? componentType : null);
    setTimeValue(time);
  };

  const InputValue = (): JSX.Element => {
    if (timeValue !== undefined) {
      return <span>{timeValue}</span>;
    }
    return <span>Please select a time</span>;
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
              {<InputValue />}
              <Icon iconType="arrowDown" />
            </button>
          </span>
        </div>
        {isOpen && (
          <div className="h-96 w-min overflow-y-auto absolute left-5 mt-2  rounded-md shadow-lg select-none z-50">
            <div className="rounded-md bg-white shadow-xs pr-8">
              <div className="py-1 flex flex-col  " role="menu">
                {timeValues.map((time, index) => (
                  <div
                    key={index}
                    onClick={() => onTimeClick(time)}
                    className="max-h-96 overflow-y-auto cursor-pointer text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <InputError errorMessage={errorMessage} />
    </InputLabel>
  );
};
