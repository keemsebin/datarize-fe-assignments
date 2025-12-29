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
   * The HTML element or React component to render as.
   * @default 'p'
   */
  as?: T
  /**
   * The type of text, which can be used for styling purposes.
   * @default 'Body'
   */
  type?: TypographyType
  /**
   * The font weight of the text.
   * Common values include 'regular', 'medium', 'semibold', 'bold'.
   * @default 'regular'
   */
  weight?: WeightType
  /**
   * The content to be displayed inside the text component.
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
