import { describe, it, expect } from 'vitest';
import { transformChartData } from '../src/features/Shopping/utils/transformChartData';
import { PurchaseFrequencyResponse } from '../src/features/Shopping/api/shopping.types';

describe('transformChartData 유틸 함수 테스트', () => {
  it('빈 배열일 때 빈 배열을 반환한다.', () => {
    expect(transformChartData([])).toEqual([]);
  });

  it('null이나 undefined일 때 빈 배열을 반환한다.', () => {
    expect(transformChartData(null as unknown as PurchaseFrequencyResponse)).toEqual([]);
    expect(transformChartData(undefined as unknown as PurchaseFrequencyResponse)).toEqual([]);
  });

  it('데이터를 올바르게 변환한다.', () => {
    const data: PurchaseFrequencyResponse = [
      { range: '0 - 20000', count: 20 },
      { range: '20001 - 30000', count: 8 },
    ];

    const result = transformChartData(data);

    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({
      range: '0 - 20000',
      count: 20,
      displayRange: '2만원 이하',
    });
    expect(result[1]).toEqual({
      range: '20001 - 30000',
      count: 8,
      displayRange: '2-3만원',
    });
  });
});
