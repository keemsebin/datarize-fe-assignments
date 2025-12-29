import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 클래스 이름을 병합하는 유틸 함수
 * @param inputs - 병합할 클래스 이름
 * @returns 병합된 클래스 이름
 */

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
