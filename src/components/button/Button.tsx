import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon } from '@/components';
import * as iconMap from '../icon/icon-types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'filled' | 'outline' | 'text' | 'danger';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  iconType?: keyof typeof iconMap;
  iconColor?: string;
}
export const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  size,
  className,
  iconPosition,
  type = 'button',
  disabled,
  iconType,
  children,
  iconColor,
  ...rest
}) => {
  function getIconPosition(): string {
    if (iconPosition === 'left' && iconType !== undefined) {
      return 'gap-x-2 flex-row';
    }
    if (iconPosition === 'right' && iconType !== undefined) {
      return 'gap-x-2 flex-row-reverse';
    }

    return '';
  }

  switch (variant) {
    case 'filled':
      return (
        <button
          className={`bg-sky-400 whitespace-nowrap text-white py-2 px-4 rounded-md font-medium text-sm text-center flex items-center  justify-center ${getIconPosition()} ${className}`}
          type={type}
          {...rest}
        >
          <Icon className={iconColor} iconType={iconType!} />
          {children}
        </button>
      );

    case 'danger':
      return (
        <button
          className={`bg-red-500 whitespace-nowrap text-white py-2 px-4 rounded-md font-medium flex items-center  justify-center ${getIconPosition()} ${className}`}
          type={type}
          {...rest}
        >
          <Icon className={iconColor} iconType={iconType!} />
          {children}
        </button>
      );

    case 'outline':
      return (
        <button
          className={`bg-transparent whitespace-nowrap text-black py-2 px-4 rounded-lg font-medium border  text-sm border-slate-200 shadow-sm flex items-center justify-center ${getIconPosition()} ${className}`}
          type={type}
          {...rest}
        >
          <Icon className={iconColor} iconType={iconType!} />
          {children}
        </button>
      );
    case 'text':
      return (
        <button
          className={`bg-transparent whitespace-nowrap text-black py-2 px-4 font-medium text-sm ${getIconPosition()} flex items-center  justify-center ${className}`}
          type={type}
          {...rest}
        >
          <Icon className={iconColor} iconType={iconType!} />
          {children}
        </button>
      );

    default:
      return (
        <button
          className={`bg-sky-400 whitespace-nowrap text-white py-2 px-4 rounded-md font-medium  ${getIconPosition()} flex items-center  justify-center ${className}`}
          type={type}
          {...rest}
        >
          <Icon className={iconColor} iconType={iconType!} />
          {children}
        </button>
      );
  }
};
