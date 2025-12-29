import { cn } from "@/shared/utils/cn";
import { ComponentProps } from "react";

type SpacingProps = {
  /**
   * 간격의 크기
   */
  size: number;
  /**
   * Spacing 컴포넌트의 className
   */
  className?: string;
} & ComponentProps<'div'>


const SIZE = {
  0.5: 'h-0.5',
  1: 'h-1',
  2: 'h-2',
  4: 'h-4',
  8: 'h-8',
  16: 'h-16',
  32: 'h-32',
  64: 'h-64',
  128: 'h-[128px]',
  256: 'h-[256px]',
}

export const Spacing = ({ size, className }: SpacingProps) => {
  return (
    <div className={cn('w-full', SIZE[size as keyof typeof SIZE], className)} />
  )
}