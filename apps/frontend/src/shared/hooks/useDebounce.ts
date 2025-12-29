import { useEffect, useState } from 'react';

/**
 * 값의 변경을 디바운싱하는 hook
 * @param value - 디바운싱할 값
 * @param delay - 디바운싱 지연 시간 (밀리초)
 * @returns 디바운싱된 값
 */

export const useDebounce = <T>(value: T, delay: number = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
