import { PurchaseFrequencyResponse } from '@/features/Shopping/api/shopping.types';
import { formatPriceRange } from './formatPriceRange';

/**
 * 차트 데이터를 변환하는 유틸 함수
 * @param data - 차트 데이터
 * @returns 변환된 차트 데이터
 */

export const transformChartData = (data: PurchaseFrequencyResponse) => {
  if (!data || data.length === 0) return [];
  return data.map((item) => ({
    ...item,
    displayRange: formatPriceRange(item.range),
  }));
};
