import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/shared/utils/cn';

export type LoadingProps = {
  /**
   * 로딩 스피너의 크기
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Loading 컴포넌트의 className
   */
  className?: string;
} & ComponentPropsWithoutRef<'div'>;

const SIZE_CLASSES: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'h-4 w-4 border-2',
  md: 'h-8 w-8 border-2',
  lg: 'h-12 w-12 border-4',
};

export const Loading = ({ size = 'md', className, ...props }: LoadingProps) => {
  return (
    <div
      className={cn('flex items-center justify-center', className)}
      role="status"
      aria-label="Loading"
      {...props}
    >
      <div
        className={cn(
          'animate-spin rounded-full border-blue-600 border-t-transparent',
          SIZE_CLASSES[size],
        )}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
