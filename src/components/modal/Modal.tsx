import { Icon } from '..';
import React, { PropsWithChildren, ReactNode } from 'react';
import StarIcon from '../../resources/images/svg/star.svg';

interface ModalProps {
  title?: ReactNode;
  showModal: boolean | null;
  closeModal: () => void;
}

export const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  title,
  showModal,
  closeModal,
  children,
}) => {
  return (
    <>
      {showModal && (
        <div className="fixed select-none flex top-20 overflow-y-auto left-0 justify-center align-middle z-50 w-full  h-full before:fixed before:top-0 before:left-0 before:h-full before:w-full before:bg-slate-300 before:opacity-60">
          <div className="h-min relative w-full max-w-max sm:px-12 px-2 z-50">
            <div className="bg-white rounded-lg">
              <div className="flex justify-between gap-x-3 align-middle px-5 pt-5">
                <div className="font-medium">
                  <p className="ml-4">{title}</p>
                </div>
                <Icon
                  iconType="close"
                  onClick={closeModal}
                  className="cursor-pointer"
                />
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
