import { FC, PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`bg-white-100 shadow-md rounded-lg h-min w-full p-4 border border-slate-100 ${className}`}
    >
      {children}
    </div>
  );
};
