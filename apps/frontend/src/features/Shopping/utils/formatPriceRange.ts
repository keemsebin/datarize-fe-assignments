export const formatPriceRange = (range: string): string => {
  const [minStr, maxStr] = range.split(' - ').map(Number)
  const min = Math.floor(minStr / 10000)
  const max = Math.floor(maxStr / 10000)

  if (min === 0) {
    return `${max}만원 이하`
  }
  if (max === 10) {
    return `${min}만원 이상`
  }
  return `${min}-${max}만원`
}