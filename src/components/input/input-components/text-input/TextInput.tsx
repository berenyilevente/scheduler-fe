import { ChangeEvent, forwardRef, useEffect, useState } from 'react';
import { InputLabel, InputError } from '@/components';
import { useInputValueHandler } from '@/utils';

export interface TextInputProps {
  className?: string;
  errorMessage?: string;
  label?: string;
  required?: boolean;
  onChange: (value: string, componentType: string | null) => void;
  value: string | null;
  componentType?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
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

    function onInputChange(event: ChangeEvent<HTMLInputElement>) {
      setInputValue(event.target.value);
      onChange(event.target.value, componentType ? componentType : null);
    }

    function onError(errorMessage?: string): string {
      if (!errorMessage) {
        return '';
      }
      return 'border-red-500';
    }

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
          </div>
          <InputError errorMessage={errorMessage} />
        </div>
      </InputLabel>
    );
  }
);
