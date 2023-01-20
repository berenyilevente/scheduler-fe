import { FC, PropsWithChildren } from 'react';

export const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-white-100 shadow-lg rounded-lg h-min w-[32em]">
      {children}
    </div>
  );
};
