import { ChangeEvent, forwardRef, useState } from 'react';
import { Icon, InputLabel, InputError } from '@/components';
import { useInputValueHandler } from '@/utils';

export interface EmailInputProps {
  className?: string;
  errorMessage?: string;
  label?: string;
  required?: boolean;
  onChange: (value: string, componentType: string | null) => void;
  value: string | null;
  componentType?: string;
}

export const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
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
              type="email"
              onChange={onInputChange}
              ref={ref}
            />
            <Icon iconType="email"></Icon>
          </div>
          <InputError errorMessage={errorMessage} />
        </div>
      </InputLabel>
    );
  }
);
