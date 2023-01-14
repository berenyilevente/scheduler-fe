import { FC, MouseEventHandler } from 'react';
import * as iconMap from './icon-types';

export interface IconProps {
  iconType: keyof typeof iconMap;
  onClick?: MouseEventHandler<HTMLSpanElement>;
}

export const Icon: FC<IconProps> = ({ iconType, onClick }) => {
  return (
    <div className="select-none" onClick={onClick}>
      {iconMap[iconType]}
    </div>
  );
};
