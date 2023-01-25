import { Button, Modal } from '@/components';
import React from 'react';

export interface DeleteModalProps {
  showModal: boolean;
  onClose: () => void;
  onDelete: () => void;
  title: string;
  text?: string;
}

export const DeleteModal: React.FC<DeleteModalProps> = ({
  showModal,
  onClose,
  onDelete,
  title,
  text,
}) => {
  return (
    <Modal showModal={showModal} closeModal={onClose} title={title}>
      <p className="px-8 py-4 text-sm">{text}</p>
      <div className="flex justify-around pb-4">
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
