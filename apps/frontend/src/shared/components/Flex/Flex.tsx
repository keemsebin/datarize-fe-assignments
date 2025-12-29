import { cn } from '@/shared/utils/cn';
import { ComponentPropsWithoutRef, ElementType } from 'react';

const DIR = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  col: 'flex-col',
  'col-reverse': 'flex-col-reverse',
} as const;

const ALIGN_ITEMS = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
} as const;

const JUSTIFY_CONTENT = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
  stretch: 'justify-stretch',
  baseline: 'justify-baseline',
} as const;

const WRAP = {
  nowrap: 'flex-nowrap',
  wrap: 'flex-wrap',
  'wrap-reverse': 'flex-wrap-reverse',
} as const;

const GAP = {
  0: 'gap-0',
  0.5: 'gap-0.5',
  1: 'gap-1',
  1.5: 'gap-1.5',
  2: 'gap-2',
  2.5: 'gap-2.5',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  8: 'gap-8',
  10: 'gap-10',
  12: 'gap-12',
  16: 'gap-16',
  20: 'gap-20',
  24: 'gap-24',
  32: 'gap-32',
} as const;

type FlexProps<T extends ElementType = 'div'> = {
  /**
   * The HTML element to use as the container.
   * @default 'div'
   */
  as?: T;
  /**
   * Defines the direction of the flex container's main axis.
   * @default row
   */
  dir?: keyof typeof DIR;
  /**
   * Specifies how flex items are aligned along the cross axis.
   * @default start
   */
  alignItems?: keyof typeof ALIGN_ITEMS;
  /**
   * Defines how flex items are distributed along the main axis.
   * @default center
   */
  justifyContent?: keyof typeof JUSTIFY_CONTENT;
  /**
   * Controls whether flex items should wrap onto multiple lines.
   * @default nowrap
   */
  wrap?: keyof typeof WRAP;
  /**
   * Defines the gap between flex items.
   * Can be a number (Tailwind spacing scale) or string (custom CSS value)
   * @example gap={4} → gap-4
   */
  gap?: number;
  /**
   * Additional CSS classNames to be applied to the container.
   * @default ''
   */
  className?: string;
  /**
   * The child elements to be rendered inside the Flex container.
   */
  children: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

export const Flex = <T extends ElementType = 'div'>({
  as,
  dir = 'row',
  alignItems = 'stretch',
  justifyContent = 'start',
  wrap = 'nowrap',
  gap = 0,
  className = '',
  children,
  ...props
}: FlexProps<T>) => {
  const Container = as || 'div';

  return (
    <Container
      className={cn(
        'flex',
        DIR[dir],
        ALIGN_ITEMS[alignItems],
        JUSTIFY_CONTENT[justifyContent],
        WRAP[wrap],
        GAP[gap as keyof typeof GAP],
        className
      )}
      {...(props as ComponentPropsWithoutRef<T>)}
    >
      {children}
    </Container>
  );
}
