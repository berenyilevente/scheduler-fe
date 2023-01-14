import React, { ChangeEvent, useEffect, useState } from 'react';

export interface SwitchInputProps {
  onChange: (toggled: string) => void;
}

export const SwitchInput: React.FC<SwitchInputProps> = ({ onChange }) => {
  const [toggled, setToggled] = useState(false);

  function onToggle(event: ChangeEvent<HTMLInputElement>) {
    setToggled(!toggled);
    onChange(String(event.target.checked));
  }

  return (
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
  );
};
