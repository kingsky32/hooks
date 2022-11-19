import React from 'react';

export type UseDebounceReturn<T = any> = {
  debounceValue: T;
  isDebouncing: boolean;
};

export function useDebounce<T = any>(
  value: T,
  delay = 200,
): UseDebounceReturn<T> {
  const [debounceValue, setDebounceValue] = React.useState<T>(value);
  const [isDebouncing, setIsDebouncing] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsDebouncing(true);
    const handler = setTimeout(() => {
      setIsDebouncing(false);
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { debounceValue, isDebouncing };
}
