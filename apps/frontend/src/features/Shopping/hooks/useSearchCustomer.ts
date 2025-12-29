import { useState } from 'react';

export const useSearchCustomer = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (search: string) => {
    setSearch(search);
  };

  const handleResetSearch = () => {
    setSearch('');
  };

  return {
    search,
    handleSearchChange,
    handleResetSearch,
  };
};
