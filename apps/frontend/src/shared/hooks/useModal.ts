import { useState } from 'react';

/**
 * 모달을 관리하는 훅
 * @returns 모달 관리 객체 (isOpen: 모달 열림 여부, open: 모달 열기, close: 모달 닫기)
 */

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, open, close };
};
