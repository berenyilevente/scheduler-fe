import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface UseInputValueHandler {
  inputValue: string | null;
  setInputValue: Dispatch<SetStateAction<string | null>>;
}

export function useInputValueHandler(
  value: string | null
): UseInputValueHandler {
  const [inputValue, setInputValue] = useState<string | null>(null);

  useEffect(() => {
    if (value === null) {
      setInputValue(null);
    }

    setInputValue(value);
  }, [value]);

  return { inputValue, setInputValue };
}
