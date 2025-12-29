import { SortBy } from '@/apis/shopping.types';
import { useState } from 'react';

export const useSortByPrice = () => {
  const [sortBy, setSortBy] = useState<SortBy | null>(null);

  const handleSortByChange = (sortBy: SortBy | null) => {
    setSortBy(sortBy);
  };

  return {
    sortBy,
    handleSortByChange,
  };
};
