import { Button, Modal } from '@/components';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { deleteInputAction } from '@/redux/input-state/inputActions';
import React, { useEffect, useState } from 'react';

export interface DeleteInputModalProps {
  showModal: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export const DeleteInputModal: React.FC<DeleteInputModalProps> = ({
  showModal,
  onClose,
  onDelete,
}) => {
  return (
    <Modal
      showModal={showModal}
      closeModal={onClose}
      title="Are you sure you want to delete this input?"
    >
      <div className="px-12 py-4">
        <Button variant="danger" size="medium" onClick={onDelete}>
          Delete input
        </Button>
      </div>
    </Modal>
  );
};
