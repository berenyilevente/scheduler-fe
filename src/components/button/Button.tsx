import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'filled' | 'outline' | 'text' | 'danger';
  size: 'small' | 'medium' | 'large';
  icon?: ReactNode;
  className?: string;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  size,
  icon,
  className,
  iconPosition,
  type = 'button',
  disabled,
  children,
  ...rest
}) => {
  switch (variant) {
    case 'filled':
      return (
        <button
          className={`bg-sky-400 text-white py-2 px-4 rounded-md font-medium ${
            icon ? 'flex items-center' : ''
          } ${className || ''}  ${
            iconPosition === 'left' && icon ? 'flex-row' : 'flex-row-reverse'
          } `}
          type={type}
          {...rest}
        >
          {icon}
          {children}
        </button>
      );
    case 'danger':
      return (
        <button
          className={`bg-red-500 text-white py-2 w-full rounded-md font-medium ${
            icon ? 'flex items-center' : ''
          } ${className || ''}  ${
            iconPosition === 'left' && icon ? 'flex-row' : 'flex-row-reverse'
          } `}
          type={type}
          {...rest}
        >
          {icon}
          {children}
        </button>
      );

    default:
      return (
        <button
          className={` ${icon ? 'flex items-center content-center' : ''} ${
            className || ''
          }  ${
            iconPosition === 'left' && icon ? 'flex-row' : 'flex-row-reverse'
          } `}
          type={type}
          disabled={disabled}
          {...rest}
        >
          {icon}
          {children}
        </button>
      );
  }
};
