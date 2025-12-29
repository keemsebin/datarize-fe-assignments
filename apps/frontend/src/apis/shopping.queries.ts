import { queryOptions } from '@tanstack/react-query';
import { fetcher } from './fetcher';
import { PurchaseFrequencyRequest, PurchaseFrequencyResponse } from './shopping.types';

export const shoppingQueryKeys = {
  purchaseFrequency: ({ from, to }: PurchaseFrequencyRequest) => ['purchase-frequency', from, to],
};

export const shoppingQueryOptions = {
  purchaseFrequency: ({ from, to }: PurchaseFrequencyRequest) =>
    queryOptions({
      queryKey: shoppingQueryKeys.purchaseFrequency({ from, to }),
      queryFn: () => {
        return fetcher.get<PurchaseFrequencyResponse>(
          `api/purchase-frequency?from=${from}&to=${to}`,
        );
      },
    }),
};
