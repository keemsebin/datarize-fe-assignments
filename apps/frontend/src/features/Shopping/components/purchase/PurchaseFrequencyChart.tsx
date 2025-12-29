import { shoppingQueryOptions } from '@/apis/shopping.queries';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Flex } from '@/shared/components/Flex/Flex';
import { DateRangePicker } from './DateRangePicker';
import { useDateRange } from '../../hooks/useDateRange';
import { BarChart } from './BarChart';

export const PurchaseFrequencyChart = () => {
  const { dateRange, handleDateChange } = useDateRange();

  const { data: purchaseFrequencyData } = useSuspenseQuery(
    shoppingQueryOptions.purchaseFrequency({
      from: dateRange.from,
      to: dateRange.to,
    }),
  );

  return (
    <Flex dir="col" gap={6} className="w-full">
      <DateRangePicker dateRange={dateRange} onDateChange={handleDateChange} />
      <BarChart data={purchaseFrequencyData} />
    </Flex>
  );
};
