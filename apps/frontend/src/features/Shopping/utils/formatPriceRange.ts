/**
 * 가격 범위를 포맷팅하는 유틸 함수
 * @param range - 가격 범위
 * @returns 포맷팅된 가격 범위
 */

export const formatPriceRange = (range: string) => {
  const [minStr, maxStr] = range.split(' - ').map(Number);
  const min = Math.floor(minStr / 10000);
  const max = Math.floor(maxStr / 10000);

  if (min === 0) {
    return `${max}만원 이하`;
  }
  if (max === 10) {
    return `${min}만원 이상`;
  }
  return `${min}-${max}만원`;
};
