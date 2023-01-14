import React, { ReactNode } from 'react';

export interface InputLabelProps {
  label?: string;
  children: ReactNode;
  required?: boolean;
  errorMessage?: string;
}

const InputLabel: React.FC<InputLabelProps> = ({
  label,
  children,
  required,
}) => {
  const Required = (): JSX.Element | null =>
    required ? <span className="mt-1 px-1 text-red-500">*</span> : null;

  return (
    <div className="mb-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mb-2 text-sm opacity-80">
            {label}
            <Required />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
export default InputLabel;
