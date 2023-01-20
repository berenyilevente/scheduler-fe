import React, { ChangeEvent, useState } from 'react';
import { InputLabel } from '@/components';

export interface SwitchInputProps {
  onChange: (date: string, componentType: string | null) => void;
  label?: string;
  required?: boolean;
  errorMessage?: string;
  componentType?: string;
}

export const SwitchInput: React.FC<SwitchInputProps> = ({
  onChange,
  label,
  required,
  errorMessage,
  componentType,
}) => {
  const [toggled, setToggled] = useState(false);

  function onToggle(event: ChangeEvent<HTMLInputElement>) {
    setToggled(!toggled);
    onChange(
      String(event.target.checked),
      componentType ? componentType : null
    );
  }

  return (
    <InputLabel label={label} required={required} errorMessage={errorMessage}>
      <label className="inline-flex relative items-center mr-5 cursor-pointer select-none">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={toggled}
          readOnly
          onChange={(event) => onToggle(event)}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peerpeer-focus:ring-sky-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-400" />
      </label>
    </InputLabel>
  );
};
