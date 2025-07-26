import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

export const useLocalStorage = (
  key: string,
  defaultValue = ''
): [string, Dispatch<SetStateAction<string>>] => {
  const [value, setValue] = useState(() => {
    try {
      return localStorage.getItem(key) || defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};
