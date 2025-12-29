import { describe, it, expect } from 'vitest';
import { calculateMaxCount } from '../src/features/Shopping/utils/calculateMaxCount';
import { PurchaseFrequencyResponse } from '@/features/Shopping/api/shopping.types';

describe('calculateMaxCount 유틸 함수 테스트', () => {
  it('빈 배열일 때 기본값 10을 반환한다.', () => {
    expect(calculateMaxCount([])).toBe(10);
  });

  it('null이나 undefined일 때 기본값 10을 반환한다.', () => {
    expect(calculateMaxCount(null as unknown as PurchaseFrequencyResponse)).toBe(10);
    expect(calculateMaxCount(undefined as unknown as PurchaseFrequencyResponse)).toBe(10);
  });

  it('최대값이 0일 때 기본값 10을 반환한다.', () => {
    const data: PurchaseFrequencyResponse = [
      { range: '0 - 10000', count: 0 },
      { range: '10000 - 20000', count: 0 },
    ];
    expect(calculateMaxCount(data)).toBe(10);
  });

  it('정상적인 데이터에서 최대값을 올바르게 계산한다.', () => {
    const data: PurchaseFrequencyResponse = [
      { range: '0 - 10000', count: 5 },
      { range: '10000 - 20000', count: 15 },
      { range: '20000 - 30000', count: 8 },
    ];
    expect(calculateMaxCount(data)).toBe(15);
  });

  it('소수점이 있는 경우 올림 처리한다.', () => {
    const data: PurchaseFrequencyResponse = [
      { range: '0 - 10000', count: 5.3 },
      { range: '10000 - 20000', count: 12.7 },
    ];
    expect(calculateMaxCount(data)).toBe(13);
  });

  it('큰 값도 올바르게 처리한다.', () => {
    const data: PurchaseFrequencyResponse = [
      { range: '0 - 10000', count: 100 },
      { range: '10000 - 20000', count: 250 },
      { range: '20000 - 30000', count: 150 },
    ];
    expect(calculateMaxCount(data)).toBe(250);
  });
});
