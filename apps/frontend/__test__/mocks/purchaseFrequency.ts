import { PurchaseFrequencyResponse } from '@/features/Shopping/api/shopping.types';

/**
 * 테스트용 구매 빈도 mock 데이터
 */
export const mockPurchaseFrequencyData: PurchaseFrequencyResponse = [
  { range: '0 - 10000', count: 5 },
  { range: '10000 - 20000', count: 15 },
  { range: '20000 - 30000', count: 8 },
];
