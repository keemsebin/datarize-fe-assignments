import { Text } from '@/shared/components/Text';
import { Flex } from '../../shared/components/Flex/Flex';
import { Tabs, TabsContent, TabList, TabsTrigger } from '@/shared/components/Tabs';
import { PurchaseFrequencyChart } from './components/purchase/PurchaseFrequencyChart';
import { List } from './components/customers/List';
import { useTabs } from '../../shared/hooks/useTabs';

const TABS = [
  {
    value: 'chart',
    label: '구매 빈도 차트',
    component: PurchaseFrequencyChart,
  },
  {
    value: 'customers',
    label: '고객 목록',
    component: List,
  },
] as const;

export const ShoppingPage = () => {
  const { activeTab, handleTabChange } = useTabs('chart');

  return (
    <Flex dir="col" gap={8} className="mt-10">
      <Text type="Display" weight="semibold">
        쇼핑몰 구매 데이터 대시보드
      </Text>
      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabList className="w-1/3">
          {TABS.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabList>
        {TABS.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <tab.component />
          </TabsContent>
        ))}
      </Tabs>
    </Flex>
  );
};
