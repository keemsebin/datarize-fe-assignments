import { Flex } from '@/shared/components/Flex';
import { useSearchCustomer } from '../../hooks/useSearchCustomer';
import { SearchInput } from './SearchInput';
import { CustomerTable } from './CustomerTable';
import { useSortByPrice } from '../../hooks/useSortByPrice';
import { SortDropdown } from './SortDropdown';
import { Loading } from '@/shared/components/Loading';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from '@/shared/components/ErrorBoundary';
import { Suspense } from 'react';
import { Text } from '@/shared/components/Text';

export const List = () => {
  const { sortByPrice, handleSortByPriceChange } = useSortByPrice();
  const { customerName, handleCustomerNameChange, handleResetCustomerName } = useSearchCustomer();

  return (
    <Flex dir="col" gap={4}>
      <Text type="Title" weight="semibold">
        고객 목록
      </Text>
      <Flex dir="row" gap={4} justifyContent="between" wrap="wrap" className="w-full">
        <SearchInput
          customerName={customerName}
          handleCustomerNameChange={handleCustomerNameChange}
        />
        <SortDropdown sortBy={sortByPrice} handleSortByChange={handleSortByPriceChange} />
      </Flex>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={() => {
              handleResetCustomerName();
              reset();
            }}
          >
            <Suspense fallback={<Loading className="h-[500px] w-full" />}>
              <CustomerTable sortByPrice={sortByPrice} customerName={customerName} />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Flex>
  );
};
