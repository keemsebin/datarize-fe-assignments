import { ComponentProps } from 'react';
import { cn } from '@/shared/utils/cn';

export type DropdownOption = {
  value: string;
  label: string;
};

export type DropdownProps = {
  /**
   * 드롭다운에 표시할 옵션 목록
   */
  options: DropdownOption[];
  /**
   * Dropdown 컴포넌트의 className
   */
  className?: string;
} & ComponentProps<'select'>;

export const Dropdown = ({ options, className, disabled = false, ...props }: DropdownProps) => {
  return (
    <select
      disabled={disabled}
      className={cn(
        'rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-700 transition-colors outline-none',
        'focus:border-blue-500 focus:ring-2 focus:ring-blue-200',
        'disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400',
        className,
      )}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
