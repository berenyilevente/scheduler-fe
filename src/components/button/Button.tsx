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
    if (iconType !== undefined) {
      return 'flex items-center gap-x-3';
    }
    if (iconPosition === 'left' && iconType !== undefined) {
      return 'flex-row gap-x-3';
    }
    if (iconPosition === 'right' && iconType !== undefined) {
      return 'flex-row-reverse gap-x-3';
    }
    return '';
  }

  switch (variant) {
    case 'filled':
      return (
        <button
          className={`bg-sky-400 whitespace-nowrap text-white py-2 px-4 rounded-md font-medium text-sm ${getIconPosition()} ${className}`}
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
          className={`bg-red-500 whitespace-nowrap text-white py-2 px-4 rounded-md font-medium ${getIconPosition()} ${className}`}
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
          className={`bg-transparent whitespace-nowrap text-black py-2 px-4 rounded-lg font-medium border text-sm border-slate-200 shadow-sm ${getIconPosition()} ${className}`}
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
          className={`bg-transparent whitespace-nowrap text-black py-2 px-4 font-medium text-sm ${getIconPosition()} ${className}`}
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
          className={`bg-sky-400 whitespace-nowrap text-white py-2 px-4 rounded-md font-medium  ${getIconPosition()} ${className}`}
          type={type}
          {...rest}
        >
          <Icon className={iconColor} iconType={iconType!} />
          {children}
        </button>
      );
  }
};
