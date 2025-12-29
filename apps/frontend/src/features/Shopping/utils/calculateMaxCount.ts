import { PurchaseFrequencyResponse } from '@/apis/shopping.types';

const DEFAULT_MAX_COUNT = 10;

export const calculateMaxCount = (data: PurchaseFrequencyResponse) => {
  if (!data || data.length === 0) return DEFAULT_MAX_COUNT;
  const max = Math.max(...data.map((item) => item.count));
  return max === 0 ? DEFAULT_MAX_COUNT : Math.ceil(max);
};
