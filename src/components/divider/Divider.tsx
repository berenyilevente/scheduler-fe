import { cln } from '@/utils';
import React from 'react';

interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className }) => {
  return <div className={cln('border border-slate-100 my-2', className)}></div>;
};
