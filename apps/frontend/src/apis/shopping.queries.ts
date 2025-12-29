import { queryOptions } from '@tanstack/react-query';
import { fetcher } from './fetcher';
import {
  CustomerPurchaseRequest,
  CustomerResponse,
  PurchaseFrequencyRequest,
  PurchaseFrequencyResponse,
} from './shopping.types';

export const shoppingQueryKeys = {
  purchase: {
    all: () => ['purchase-frequency'],
    purchaseFrequency: ({ from, to }: PurchaseFrequencyRequest) => [
      ...shoppingQueryKeys.purchase.all(),
      from,
      to,
    ],
  },
  customers: {
    all: () => ['customers'],
    customers: ({ sortBy, name }: CustomerPurchaseRequest) => [
      ...shoppingQueryKeys.customers.all(),
      sortBy,
      name,
    ],
    customersPurchases: (customerId: number) => [...shoppingQueryKeys.customers.all(), customerId],
  },
};

export const shoppingQueryOptions = {
  purchaseFrequency: ({ from, to }: PurchaseFrequencyRequest) =>
    queryOptions({
      queryKey: shoppingQueryKeys.purchase.purchaseFrequency({ from, to }),
      queryFn: () => {
        return fetcher.get<PurchaseFrequencyResponse>(
          `api/purchase-frequency?from=${from}&to=${to}`,
        );
      },
    }),
  customers: ({ sortBy, name }: CustomerPurchaseRequest) =>
    queryOptions({
      queryKey: shoppingQueryKeys.customers.customers({ sortBy, name }),
      queryFn: () => {
        return fetcher.get<CustomerResponse>(`api/customers?sortBy=${sortBy ?? ''}&name=${name}`);
      },
    }),
};
