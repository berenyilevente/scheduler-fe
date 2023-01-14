import React, { ReactNode, useState } from 'react';
import { DropdownOption } from '../../../../utils';
import { Icon } from '../../../icon/Icon';
import { InputError } from '../../input-error/InputError';
import InputLabel from '../../input-label/InputLabel';

export interface DropdownProps {
  options: DropdownOption[];
  value: React.ReactNode;
  onChange: (value: string) => void;
  label?: string;
  required?: boolean;
  errorMessage?: string;
}

export const DropdownInput: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  label,
  required,
  errorMessage,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropdownValue, setDropdownValue] = useState<DropdownOption>();
  const toggleDropdown = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const handleOptionClick = (option: DropdownOption): void => {
    setDropdownValue(option);
    onChange(option.value);
    setIsOpen(false);
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
              {dropdownValue?.value || value}
              <Icon iconType="arrowDown" />
            </button>
          </span>
        </div>
        {isOpen && (
          <div className="absolute left-0 mt-2 w-full rounded-md shadow-lg">
            <div className="rounded-md bg-white shadow-xs">
              <div className="py-1 flex flex-col" role="menu">
                {options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="cursor-pointer text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  >
                    {option.value}
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
