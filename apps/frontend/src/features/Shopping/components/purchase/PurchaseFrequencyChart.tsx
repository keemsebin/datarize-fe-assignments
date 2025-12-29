import { Suspense } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

import { ErrorBoundary } from '@/shared/components/ErrorBoundary';
import { Flex } from '@/shared/components/Flex/Flex';
import { Loading } from '@/shared/components/Loading';
import { DateRangePicker } from './DateRangePicker';
import { useDateRange } from '../../hooks/useDateRange';
import { BarChart } from './BarChart';

export const PurchaseFrequencyChart = () => {
  const { dateRange, handleDateChange } = useDateRange();

  return (
    <Flex dir="col" gap={6} className="w-full">
      <DateRangePicker dateRange={dateRange} onDateChange={handleDateChange} />
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onRetry={reset}>
            <Suspense fallback={<Loading size="lg" className="h-[300px] w-full" />}>
              <BarChart dateRange={dateRange} />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Flex>
  );
};
