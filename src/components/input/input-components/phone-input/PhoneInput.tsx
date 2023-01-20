import { ChangeEvent, forwardRef, useState } from 'react';
import { Icon, InputLabel, InputError } from '@/components';
import { useInputValueHandler } from '@/utils';

export interface PhoneInputProps {
  className?: string;
  errorMessage?: string;
  label?: string;
  required?: boolean;
  onChange: (value: string, componentType: string | null) => void;
  value: string;
  componentType?: string;
}

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      onChange,
      className,
      errorMessage,
      label,
      required,
      value,
      componentType,
    },
    ref
  ) => {
    const { inputValue, setInputValue } = useInputValueHandler(value);

    const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setInputValue(event.target.value);
      onChange(event.target.value, componentType ? componentType : null);
    };

    const onError = (errorMessage?: string): string => {
      if (!errorMessage) {
        return '';
      }
      return 'border-red-500';
    };

    return (
      <InputLabel label={label} required={required} errorMessage={errorMessage}>
        <div className={`relative rounded-md ${className}`}>
          <div
            className={`flex justify-between items-center shadow-sm px-4 py-2 bg-white rounded-md border border-gray-300 ${onError(
              errorMessage
            )}`}
          >
            <input
              value={inputValue || ''}
              className="border-none outline-none w-full text-sm"
              type="tel"
              onChange={onInputChange}
              ref={ref}
            />
            <div>
              <Icon iconType="phone"></Icon>
            </div>
          </div>
          <InputError errorMessage={errorMessage} />
        </div>
      </InputLabel>
    );
  }
);
