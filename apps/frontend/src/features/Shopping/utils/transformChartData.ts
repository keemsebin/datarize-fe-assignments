import { PurchaseFrequencyResponse } from '@/apis/shopping.types';
import { formatPriceRange } from './formatPriceRange';

export const transformChartData = (data: PurchaseFrequencyResponse) => {
  if (!data || data.length === 0) return [];
  return data.map((item) => ({
    ...item,
    displayRange: formatPriceRange(item.range),
  }));
};
