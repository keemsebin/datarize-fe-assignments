import { Input } from '@/shared/components/Input';

type SearchInputProps = {
  customerName: string;
  handleCustomerNameChange: (customerName: string) => void;
};

export const SearchInput = ({ customerName, handleCustomerNameChange }: SearchInputProps) => {
  return (
    <div className="w-[200px]">
      <Input
        type="text"
        value={customerName}
        onChange={(e) => handleCustomerNameChange(e.target.value)}
        placeholder="이름으로 검색..."
        className="w-full rounded-md border border-gray-300 px-4 py-2"
      />
    </div>
  );
};
