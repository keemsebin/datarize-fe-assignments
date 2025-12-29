import { Flex } from '@/shared/components/Flex/Flex';
import { Input } from '@/shared/components/Input';
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
    <Flex dir="col" gap={2}>
      <Text as="h2" type="Heading" weight="semibold">
        날짜 범위 선택
      </Text>
      <Flex dir="row" gap={4} alignItems="center" wrap="wrap">
        <Input
          type="date"
          name="from"
          value={dateRange.from}
          max={dateRange.to}
          onChange={onDateChange}
        />
        <Text type="Body" weight="medium">
          ~
        </Text>
        <Input
          type="date"
          name="to"
          value={dateRange.to}
          min={dateRange.from}
          max={new Date().toISOString().split('T')[0]}
          onChange={onDateChange}
        />
      </Flex>
    </Flex>
  );
};
