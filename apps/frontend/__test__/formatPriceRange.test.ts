import { describe, it, expect } from 'vitest';
import { formatPriceRange } from '../src/features/Shopping/utils/formatPriceRange';

describe('formatPriceRange 유틸 함수 테스트', () => {
  it('일반 범위를 올바르게 포맷팅해야 한다.', () => {
    expect(formatPriceRange('20000 - 30000')).toBe('2-3만원');
    expect(formatPriceRange('30000 - 40000')).toBe('3-4만원');
    expect(formatPriceRange('50000 - 60000')).toBe('5-6만원');
  });

  it('2만원 이하 범위는 2만원 이하로 포맷팅해야 한다.', () => {
    expect(formatPriceRange('0 - 20000')).toBe('2만원 이하');
  });

  it('9만원 이상 범위는 9만원 이상으로 포맷팅해야 한다.', () => {
    expect(formatPriceRange('90000 - 100000')).toBe('9만원 이상');
  });
});
