import { Button } from '@/components';
import React from 'react';

export interface BookingLayoutCardFooterProps {
  isEdit: boolean;
  bookingLayoutId: string;
  onCancel: () => void;
  onSave: (id: string) => void;
}

export const BookingLayoutCardFooter: React.FC<BookingLayoutCardFooterProps> =
  ({ isEdit, bookingLayoutId, onCancel, onSave }) => {
    return isEdit ? (
      <div className="flex justify-end gap-4 px-4">
        <Button size="medium" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          size="medium"
          variant="filled"
          iconType="save"
          onClick={() => onSave(bookingLayoutId)}
        >
          Save
        </Button>
      </div>
    ) : (
      <></>
    );
  };
