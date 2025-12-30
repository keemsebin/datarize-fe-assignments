import { useState } from 'react';
import { PurchaseFrequencyRequest } from '../api/shopping.types';

export const DEFAULT_DATE_RANGE = {
  from: '2024-07-01',
  to: '2024-07-31',
};

/**
 * 날짜 범위를 관리하는 훅
 * @returns 날짜 범위 관리 객체 (dateRange: 날짜 범위, handleDateChange: 날짜 범위 변경 핸들러)
 */

export const useDateRange = () => {
  const [dateRange, setDateRange] = useState<PurchaseFrequencyRequest>(DEFAULT_DATE_RANGE);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDateRange((prev) => ({ ...prev, [name]: value }));
  };

  const resetDateRange = () => {
    setDateRange(DEFAULT_DATE_RANGE);
  };

  return {
    dateRange,
    handleDateChange,
    resetDateRange,
  };
};
