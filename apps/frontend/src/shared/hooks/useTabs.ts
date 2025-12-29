import { useState } from 'react';

/**
 * 탭을 관리하는 훅
 * @param initialTab - 초기 탭
 * @returns 탭 관리 객체 (activeTab: 현재 활성화된 탭, handleTabChange: 탭 변경 핸들러)
 */

export const useTabs = (initialTab = 'chart') => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return {
    activeTab,
    handleTabChange,
  };
};
