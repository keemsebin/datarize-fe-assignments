import { Customer, SortBy } from '@/features/Shopping/api/shopping.types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/Table';
import { useSuspenseQuery } from '@tanstack/react-query';
import { shoppingQueryOptions } from '@/features/Shopping/api/shopping.queries';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useModal } from '@/shared/hooks/useModal';
import { DetailModal } from './DetailModal';
import { useState } from 'react';

type CustomerTableProps = {
  sortByPrice: SortBy | null;
  customerName: string;
};

export const CustomerTable = ({ sortByPrice, customerName }: CustomerTableProps) => {
  const { isOpen, open, close } = useModal();
  const debouncedCustomerName = useDebounce(customerName, 500);
  const { data: customers } = useSuspenseQuery(
    shoppingQueryOptions.customers({ sortBy: sortByPrice ?? null, name: debouncedCustomerName }),
  );

  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const handleCustomerClick = (customer: Customer) => {
    setSelectedCustomer(customer);
    open();
  };

  return (
    <>
      <Table className="h-[500px] overflow-y-auto">
        <TableHeader>
          <TableRow>
            <TableHead>이름</TableHead>
            <TableHead>구매 횟수</TableHead>
            <TableHead>총 구매 금액</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id} hover onClick={() => handleCustomerClick(customer)}>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.count}</TableCell>
              <TableCell>{customer.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DetailModal selectedCustomer={selectedCustomer ?? null} isOpen={isOpen} onClose={close} />
    </>
  );
};
