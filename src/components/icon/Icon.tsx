import { FC, MouseEventHandler } from 'react';
import * as iconMap from './icon-types';

export interface IconProps {
  iconType: keyof typeof iconMap;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  className?: string;
}

export const Icon: FC<IconProps> = ({ iconType, onClick, className }) => {
  return (
    <div
      className={`select-none hover:cursor-pointer ${className}`}
      onClick={onClick}
    >
      {iconMap[iconType]}
    </div>
  );
};
