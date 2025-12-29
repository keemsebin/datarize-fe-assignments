import { PurchaseFrequencyResponse } from '@/features/Shopping/api/shopping.types';

const DEFAULT_MAX_COUNT = 10;

/**
 * 구매 횟수 최대값을 계산하는 유틸 함수
 * @param data - 구매 횟수 데이터
 * @returns 구매 횟수 최대값
 */

export const calculateMaxCount = (data: PurchaseFrequencyResponse) => {
  if (!data || data.length === 0) return DEFAULT_MAX_COUNT;
  const max = Math.max(...data.map((item) => item.count));
  return max === 0 ? DEFAULT_MAX_COUNT : Math.ceil(max);
};
