import { Button, Modal } from '@/components';
import React from 'react';

export interface DeleteModalProps {
  showModal: boolean;
  onClose: () => void;
  onDelete: () => void;
  title: string;
}

export const DeleteModal: React.FC<DeleteModalProps> = ({
  showModal,
  onClose,
  onDelete,
  title,
}) => {
  return (
    <Modal showModal={showModal} closeModal={onClose} title={title}>
      <div className="flex justify-around px-12 py-4">
        <Button variant="outline" size="medium" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="danger" size="medium" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </Modal>
  );
};
