import { type ReactNode } from 'react';
import { TabsContext, useTabsContext } from './Tabs.context';
import { cn } from '@/shared/utils/cn';

type TabsProps = {
  /**
   * 활성화된 탭의 값
   */
  value: string;
  /**
   * 활성화된 탭의 값이 변경될 때 호출되는 함수
   */
  onValueChange: (value: string) => void;
  /**
   * Tabs 컴포넌트의 자식 요소
   */
  children: ReactNode;
};

export const Tabs = ({ value, onValueChange, children }: TabsProps) => {
  return (
    <TabsContext.Provider value={{ activeTab: value, onTabChange: onValueChange }}>
      <>{children}</>
    </TabsContext.Provider>
  );
};

type TabListProps = {
  /**
   * TabList 컴포넌트의 자식 요소
   */
  children: ReactNode;
  /**
   * TabList 컴포넌트의 className
   */
  className?: string;
};

export const TabList = ({ children, className }: TabListProps) => {
  return (
    <div className={cn('flex w-full border-b border-gray-200', className)} role="tablist">
      {children}
    </div>
  );
};

type TabsTriggerProps = {
  /**
   * TabsTrigger 컴포넌트의 값
   */
  value: string;
  /**
   * TabsTrigger 컴포넌트의 자식 요소
   */
  children: ReactNode;
  /**
   * TabsTrigger 컴포넌트의 className
   */
  className?: string;
};

export const TabsTrigger = ({ value, children, className }: TabsTriggerProps) => {
  const { activeTab, onTabChange } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${value}`}
      id={`tab-${value}`}
      className={cn(
        'min-w-0 flex-1 cursor-pointer border-b-2 border-transparent px-4 py-4 text-center text-sm font-medium transition-colors md:px-8 md:text-base lg:text-xl',
        isActive ? 'border-blue-600 font-semibold text-black' : 'text-gray-400 hover:text-gray-600',
        className,
      )}
      onClick={() => onTabChange(value)}
    >
      {children}
    </button>
  );
};

type TabsContentProps = {
  /**
   * TabsContent 컴포넌트의 값
   */
  value: string;
  /**
   * TabsContent 컴포넌트의 자식 요소
   */
  children: ReactNode;
  /**
   * TabsContent 컴포넌트의 className
   */
  className?: string;
};

export const TabsContent = ({ value, children, className }: TabsContentProps) => {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === value;

  if (!isActive) return null;

  return (
    <div
      role="tabpanel"
      id={`panel-${value}`}
      aria-labelledby={`tab-${value}`}
      className={cn('w-full p-4', className)}
    >
      {children}
    </div>
  );
};
