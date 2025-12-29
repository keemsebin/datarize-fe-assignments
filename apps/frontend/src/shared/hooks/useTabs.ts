import { useState } from 'react'

export const useTabs = (initialTab: string = 'chart') => {
  const [activeTab, setActiveTab] = useState(initialTab)

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  return {
    activeTab,
    handleTabChange,
  }
}

