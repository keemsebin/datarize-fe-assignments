import { Flex } from '@/shared/components/Flex/Flex';
import { Input } from '@/shared/components/Input';
import { Text } from '@/shared/components/Text';
import { PurchaseFrequencyRequest } from '../../api/shopping.types';
import { DEFAULT_DATE_RANGE } from '../../hooks/useDateRange';

type DateRangePickerProps = {
  dateRange: PurchaseFrequencyRequest;
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
          min={DEFAULT_DATE_RANGE.from}
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
          max={DEFAULT_DATE_RANGE.to}
          onChange={onDateChange}
        />
      </Flex>
    </Flex>
  );
};
