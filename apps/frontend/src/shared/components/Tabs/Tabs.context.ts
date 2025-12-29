import { createContext, useContext } from 'react'

type TabsContextValue = {
  activeTab: string
  onTabChange: (value: string) => void
}

export const TabsContext = createContext<TabsContextValue | null>(null)

export const useTabsContext = () => {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('Tabs 컴포넌트는 TabsContext 내부에서 사용되어야 합니다.')
  }
  return context
}
