import { PurchaseFrequencyResponse } from '@/features/Shopping/api/shopping.types';

/**
 * 테스트용 구매 빈도 mock 데이터
 */
export const mockPurchaseFrequencyData: PurchaseFrequencyResponse = [
  { range: '0 - 10000', count: 5 },
  { range: '10000 - 20000', count: 15 },
  { range: '20000 - 30000', count: 8 },
  { range: '30000 - 40000', count: 12 },
  { range: '40000 - 50000', count: 10 },
  { range: '50000 - 60000', count: 8 },
  { range: '60000 - 70000', count: 6 },
  { range: '70000 - 80000', count: 4 },
  { range: '80000 - 90000', count: 2 },
  { range: '90000 - 100000', count: 1 },
];
