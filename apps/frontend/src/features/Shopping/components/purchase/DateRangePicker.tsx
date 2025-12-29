import { Flex } from '@/shared/components/Flex/Flex';
import { Text } from '@/shared/components/Text';

type DateRange = {
  from: string;
  to: string;
};

type DateRangePickerProps = {
  dateRange: DateRange;
  onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DateRangePicker = ({ dateRange, onDateChange }: DateRangePickerProps) => {
  return (
    <Flex dir="row" gap={4} alignItems="center" wrap="wrap">
      <Flex dir="row" gap={2} alignItems="center">
        <Text type="Body" weight="medium">
          시작 날짜:
        </Text>
        <input
          type="date"
          name="from"
          value={dateRange.from}
          max={dateRange.to}
          onChange={onDateChange}
          className="rounded-md border border-gray-300 px-2 py-1 text-base focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </Flex>
      <Flex dir="row" gap={2} alignItems="center">
        <Text type="Body" weight="medium">
          종료 날짜:
        </Text>
        <input
          type="date"
          name="to"
          value={dateRange.to}
          min={dateRange.from}
          max={new Date().toISOString().split('T')[0]}
          onChange={onDateChange}
          className="rounded-md border border-gray-300 px-2 py-1 text-base focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </Flex>
    </Flex>
  );
};
