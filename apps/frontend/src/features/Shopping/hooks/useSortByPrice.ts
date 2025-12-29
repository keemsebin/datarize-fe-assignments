import { SortBy } from '@/apis/shopping.types';
import { useState } from 'react';

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
