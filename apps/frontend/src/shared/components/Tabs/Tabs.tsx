import { type ReactNode } from 'react'
import { TabsContext, useTabsContext } from './Tabs.context'
import { cn } from '@/shared/utils/cn'

type TabsProps = {
  /**
   * The value of the active tab.
   */
  value: string
  /**
   * The function to call when the value of the active tab changes.
   */
  onValueChange: (value: string) => void
  /**
   * The children of the Tabs component.
   */
  children: ReactNode
}

export const Tabs = ({ value, onValueChange, children }: TabsProps) => {
  return (
    <TabsContext.Provider value={{ activeTab: value, onTabChange: onValueChange }}>
      <>{children}</>
    </TabsContext.Provider>
  )
}

type TabListProps = {
  /**
   * The children of the TabList component.
   */
  children: ReactNode
  /**
   * The className of the TabList component.
   */
  className?: string
}

export const TabList = ({ children, className }: TabListProps) => {
  return (
    <div className={cn('flex w-full border-b border-gray-200 mb-4', className)} role="tablist">
      {children}
    </div>
  )
}

type TabsTriggerProps = {
  /**
   * The value of the TabsTrigger component.
   */
  value: string
  /**
   * The children of the TabsTrigger component.
   */
  children: ReactNode
  /**
   * The className of the TabsTrigger component.
   */
  className?: string
}

export const TabsTrigger = ({ value, children, className }: TabsTriggerProps) => {
  const { activeTab, onTabChange } = useTabsContext()
  const isActive = activeTab === value

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${value}`}
      id={`tab-${value}`}
      className={cn(
        'flex-1 px-8 py-4 font-medium text-xl transition-colors border-b-2 border-transparent text-center cursor-pointer',
        isActive ? 'text-black border-blue-600 font-semibold' : 'text-gray-400 hover:text-gray-600',
        className,
      )}
      onClick={() => onTabChange(value)}
    >
      {children}
    </button>
  )
}

type TabsContentProps = {
  /**
   * The value of the TabsContent component.
   */
  value: string
  /**
   * The children of the TabsContent component.
   */
  children: ReactNode
  /**
   * The className of the TabsContent component.
   */
  className?: string
}

export const TabsContent = ({ value, children, className }: TabsContentProps) => {
  const { activeTab } = useTabsContext()
  const isActive = activeTab === value

  if (!isActive) return null

  return (
    <div role="tabpanel" id={`panel-${value}`} aria-labelledby={`tab-${value}`} className={cn('w-full p-4', className)}>
      {children}
    </div>
  )
}
