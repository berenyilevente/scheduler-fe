import React from 'react';
export interface InputErrorProps {
  errorMessage?: string;
}
export const InputError: React.FC<InputErrorProps> = ({ errorMessage }) => {
  return (
    <>
      {errorMessage ? (
        <small className="text-red-500">{errorMessage}</small>
      ) : null}
    </>
  );
};
