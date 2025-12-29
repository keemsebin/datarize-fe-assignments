import { cn } from '@/shared/utils/cn';
import { ComponentProps } from 'react';

type InputProps = {
  /**
   * The class name of the input.
   */
  className?: string;
} & ComponentProps<'input'>;
export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        'rounded-md border-none px-2 py-1 text-base outline-1 outline-gray-300 focus:ring-3 focus:ring-blue-200 focus:outline-blue-400',
        className,
      )}
      {...props}
    />
  );
};
