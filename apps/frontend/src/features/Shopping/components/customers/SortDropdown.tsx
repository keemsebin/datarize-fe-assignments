import { SortBy } from '@/apis/shopping.types';
import { Dropdown } from '@/shared/components/Dropdown';

type SortDropdownProps = {
  sortBy: SortBy | null;
  handleSortByChange: (sortBy: SortBy | null) => void;
};

const SORT_OPTIONS = [
  { value: '', label: '전체' },
  { value: 'asc', label: '오름차순' },
  { value: 'desc', label: '내림차순' },
];

export const SortDropdown = ({ sortBy, handleSortByChange }: SortDropdownProps) => {
  return (
    <Dropdown
      options={SORT_OPTIONS}
      value={sortBy || ''}
      onChange={(e) => handleSortByChange(e.target.value as SortBy)}
    />
  );
};
