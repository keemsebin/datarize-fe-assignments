import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'

export type TextElementType = 'h1' | 'h2' | 'h3' | 'p' | 'label' | 'span'

type TypographyType = 'Display' | 'Title' | 'Heading' | 'Body' | 'Label'

type WeightType = 'regular' | 'medium' | 'semibold' | 'bold'

const TYPOGRAPHY_CLASSES: Record<TypographyType, string> = {
  Display: 'text-3xl md:text-[2.25rem]',
  Title: 'text-xl md:text-[1.75rem]',
  Heading: 'text-xl',
  Body: 'text-base',
  Label: 'text-sm',
}

const WEIGHT_CLASSES: Record<WeightType, string> = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
}

export type TextProps<T extends TextElementType = 'p'> = {
  /**
   * 렌더링할 HTML 요소 또는 React 컴포넌트
   * @default 'p'
   */
  as?: T
  /**
   * 텍스트의 타입으로, 스타일링 목적으로 사용됨
   * @default 'Body'
   */
  type?: TypographyType
  /**
   * 텍스트의 폰트 굵기
   * 일반적인 값: 'regular', 'medium', 'semibold', 'bold'
   * @default 'regular'
   */
  weight?: WeightType
  /**
   * 텍스트 컴포넌트 내부에 표시할 내용
   */
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'color'>

export const Text = <T extends TextElementType = 'p'>({
  as,
  type = 'Body',
  weight = 'regular',
  children,
  className,
  ...props
}: TextProps<T>) => {
  const Component = as || 'p' as ElementType

  return (
    <Component
      className={cn(
        'whitespace-pre-wrap leading-[140%] m-0',
        TYPOGRAPHY_CLASSES[type],
        WEIGHT_CLASSES[weight],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
