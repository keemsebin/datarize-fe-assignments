import { SortBy } from '@/features/Shopping/api/shopping.types';
import { useState } from 'react';

/**
 * 가격 정렬을 관리하는 훅
 * @returns 가격 정렬 관리 객체 (sortByPrice: 가격 정렬, handleSortByPriceChange: 가격 정렬 변경 핸들러)
 */

export const useSortByPrice = () => {
  const [sortByPrice, setSortByPrice] = useState<SortBy | null>(null);

  const handleSortByPriceChange = (sortBy: SortBy | null) => {
    setSortByPrice(sortBy);
  };

  return {
    sortByPrice,
    handleSortByPriceChange,
  };
};
