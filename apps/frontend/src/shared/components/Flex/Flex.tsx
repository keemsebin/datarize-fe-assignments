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
   * 컨테이너로 사용할 HTML 요소
   * @default 'div'
   */
  as?: T;
  /**
   * flex 컨테이너의 주축 방향을 정의
   * @default row
   */
  dir?: keyof typeof DIR;
  /**
   * 교차축을 따라 flex 항목이 정렬되는 방식을 지정
   * @default start
   */
  alignItems?: keyof typeof ALIGN_ITEMS;
  /**
   * 주축을 따라 flex 항목이 분배되는 방식을 정의
   * @default center
   */
  justifyContent?: keyof typeof JUSTIFY_CONTENT;
  /**
   * flex 항목이 여러 줄로 줄바꿈되어야 하는지 제어
   * @default nowrap
   */
  wrap?: keyof typeof WRAP;
  /**
   * flex 항목 간의 간격을 정의
   * 숫자(Tailwind spacing scale) 또는 문자열(커스텀 CSS 값)을 사용할 수 있음
   * @example gap={4} → gap-4
   */
  gap?: number;
  /**
   * 컨테이너에 적용할 추가 CSS className
   * @default ''
   */
  className?: string;
  /**
   * Flex 컨테이너 내부에 렌더링할 자식 요소
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
        className,
      )}
      {...props}
    >
      {children}
    </Container>
  );
};
