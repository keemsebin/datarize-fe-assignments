import { type ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/shared/utils/cn';
import { Button } from '@/shared/components/Button';

export type ModalProps = {
  /**
   * 모달이 열려있는지 여부
   */
  isOpen: boolean;
  /**
   * 모달을 닫는 함수
   */
  onClose: () => void;
  /**
   * 모달 내부에 표시할 내용
   */
  children: ReactNode;
  /**
   * Modal 컴포넌트의 className
   */
  className?: string;
};

export const Modal = ({ isOpen, onClose, children, className }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return createPortal(
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div
          className={cn(
            'relative z-10 w-full max-w-lg rounded-lg bg-white p-4 shadow-xl',
            className,
          )}
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 h-8 w-8 p-0"
            aria-label="닫기"
          >
            X
          </Button>
          {children}
        </div>
      </div>
    ),
    document.body,
  );
};
