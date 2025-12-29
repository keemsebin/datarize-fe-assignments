import { type ReactNode } from 'react';
import { cn } from '@/shared/utils/cn';

export type TableProps = {
  /**
   * Table 컴포넌트의 자식 요소
   */
  children: ReactNode;
  /**
   * Table 컴포넌트의 className
   */
  className?: string;
};

export const Table = ({ children, className }: TableProps) => {
  return (
    <div className={cn('w-full overflow-x-auto rounded-lg border border-gray-200', className)}>
      <table className="w-full border-collapse">{children}</table>
    </div>
  );
};
export type TableHeaderProps = {
  /**
   * TableHeader 컴포넌트의 자식 요소
   */
  children: ReactNode;
  /**
   * TableHeader 컴포넌트의 className
   */
  className?: string;
};

export const TableHeader = ({ children, className }: TableHeaderProps) => {
  return (
    <thead className={cn('sticky top-0 z-10 border-b border-gray-200 bg-gray-100', className)}>
      {children}
    </thead>
  );
};

export type TableBodyProps = {
  /**
   * TableBody 컴포넌트의 자식 요소
   */
  children: ReactNode;
  /**
   * TableBody 컴포넌트의 className
   */
  className?: string;
};

export const TableBody = ({ children, className }: TableBodyProps) => {
  return <tbody className={cn('divide-y divide-gray-200 bg-white', className)}>{children}</tbody>;
};

export type TableRowProps = {
  /**
   * 행에 호버 효과를 적용할지 여부
   * @default false
   */
  hover?: boolean;
  /**
   * TableRow 컴포넌트의 className
   */
  className?: string;
  /**
   * TableRow 컴포넌트의 자식 요소
   */
  children: ReactNode;
};

export const TableRow = ({ children, className, hover = false }: TableRowProps) => {
  return (
    <tr className={cn('transition-colors', hover && 'cursor-pointer hover:bg-gray-50', className)}>
      {children}
    </tr>
  );
};

export type TableHeadProps = {
  /**
   * TableHead 컴포넌트의 자식 요소
   */
  children: ReactNode;
  /**
   * TableHead 컴포넌트의 className
   */
  className?: string;
  /**
   * 텍스트 정렬 방식
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right';
};

export const TableHead = ({ children, className }: TableHeadProps) => {
  return (
    <th
      className={cn(
        'px-6 py-3 text-center text-base font-semibold tracking-wider text-gray-700 uppercase',

        className,
      )}
    >
      {children}
    </th>
  );
};

export type TableCellProps = {
  /**
   * TableCell 컴포넌트의 자식 요소
   */
  children: ReactNode;
  /**
   * TableCell 컴포넌트의 className
   */
  className?: string;
};

export const TableCell = ({ children, className }: TableCellProps) => {
  return (
    <td
      className={cn('px-6 py-4 text-center text-base whitespace-nowrap text-gray-900', className)}
    >
      {children}
    </td>
  );
};
