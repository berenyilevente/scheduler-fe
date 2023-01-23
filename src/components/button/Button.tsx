import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon } from '@/components';
import * as iconMap from '../icon/icon-types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'filled' | 'outline' | 'text' | 'danger';
  size: 'small' | 'medium' | 'large';
  className?: string;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  iconType?: keyof typeof iconMap;
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
  ...rest
}) => {
  function getIconPosition(): string {
    if (iconType !== undefined) {
      return 'flex items-center gap-3';
    }
    if (iconPosition === 'left' && iconType !== undefined) {
      return 'flex-row gap-3';
    }
    if (iconPosition === 'right' && iconType !== undefined) {
      return 'flex-row-reverse gap-3';
    }
    return '';
  }

  switch (variant) {
    case 'filled':
      return (
        <button
          className={`bg-sky-400 text-white py-2 px-4 rounded-md font-medium  ${getIconPosition()} ${className}`}
          type={type}
          {...rest}
        >
          <Icon iconType={iconType!} />
          {children}
        </button>
      );

    case 'danger':
      return (
        <button
          className={`bg-red-500 text-white py-2 px-4 rounded-md font-medium ${getIconPosition()} ${className}`}
          type={type}
          {...rest}
        >
          <Icon iconType={iconType!} />
          {children}
        </button>
      );

    case 'outline':
      return (
        <button
          className={`bg-transparent text-black py-2 px-4 rounded-lg font-medium border border-slate-200 shadow-sm ${getIconPosition()} ${className}`}
          type={type}
          {...rest}
        >
          <Icon className="text-sky-500" iconType={iconType!} />
          {children}
        </button>
      );

    default:
      return (
        <button
          className={`bg-sky-400 text-white py-2 px-4 rounded-md font-medium  ${getIconPosition()} ${className}`}
          type={type}
          {...rest}
        >
          <Icon iconType={iconType!} />
          {children}
        </button>
      );
  }
};
