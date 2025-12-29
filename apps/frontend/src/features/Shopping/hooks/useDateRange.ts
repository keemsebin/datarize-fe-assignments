import { useState } from 'react';

type DateRange = {
  from: string;
  to: string;
};

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
