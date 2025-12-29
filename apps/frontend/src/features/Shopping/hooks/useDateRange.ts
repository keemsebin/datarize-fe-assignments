import { useState } from 'react';

type DateRange = {
  from: string;
  to: string;
};

/**
 * 날짜 범위를 관리하는 훅
 * @returns 날짜 범위 관리 객체 (dateRange: 날짜 범위, handleDateChange: 날짜 범위 변경 핸들러)
 */
export const useDateRange = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: '2024-07-01',
    to: '2024-07-31',
  });

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDateRange((prev) => ({ ...prev, [name]: value }));
  };

  return {
    dateRange,
    handleDateChange,
  };
};
