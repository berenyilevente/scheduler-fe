import React, { useEffect, useState } from 'react';
import { DropdownOption } from '@/utils';
import { Icon, InputLabel, InputError } from '@/components';
import { getTranslation } from '@/utils';
import i18n from '@/translations';
import { useTranslation } from 'react-i18next';
import { useInputValueHandler } from '@/utils';

export interface DropdownProps {
  options: string[];
  value: string | null;
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
  const { t } = useTranslation();
  const { inputValue, setInputValue } = useInputValueHandler(value);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleDropdown(): void {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function handleOptionClick(option: string): void {
    setInputValue(option);
    onChange(option);
    setIsOpen(false);
  }

  function onError(errorMessage?: string): string {
    if (!errorMessage) {
      return '';
    }
    return 'border-red-500';
  }

  function getDropdownValue(dropdownValue: string | null): string | null {
    if (dropdownValue === null) {
      return null;
    }

    return getTranslation('inputFields', dropdownValue, i18n);
  }

  function DopdownValue(): JSX.Element {
    if (inputValue === null) {
      return <div>{t('components.dropdown.select')}</div>;
    }

    return <div>{getDropdownValue(inputValue)}</div>;
  }

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
              <DopdownValue />
              <Icon iconType="arrowDown" />
            </button>
          </span>
        </div>
        {isOpen && (
          <div className="absolute left-0 mt-2 w-full rounded-md shadow-lg z-50">
            <div className="rounded-md bg-white shadow-xs">
              <div className="py-1 flex flex-col" role="menu">
                {options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="cursor-pointer text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  >
                    {getDropdownValue(option)}
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
