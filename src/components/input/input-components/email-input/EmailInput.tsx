import { ChangeEvent, forwardRef, useState } from 'react';
import { Icon } from '../../../icon/Icon';
import { InputError } from '../../input-error/InputError';
import InputLabel from '../../input-label/InputLabel';

export interface EmailInputProps {
  className?: string;
  errorMessage?: string;
  label?: string;
  required?: boolean;
  onChange: (value: string) => void;
}

export const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  ({ onChange, className, errorMessage, label, required }, ref) => {
    const [inputValue, setInputValue] = useState<string | null>(null);

    const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setInputValue(event.target.value);
      onChange(event.target.value);
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
