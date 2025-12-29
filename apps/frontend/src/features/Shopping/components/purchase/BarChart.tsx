import { PurchaseFrequencyResponse } from '@/apis/shopping.types';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { transformChartData } from '../../utils/transformChartData';
import { calculateMaxCount } from '../../utils/calculateMaxCount';
import { Text } from '@/shared/components/Text';
import { Flex } from '@/shared/components/Flex';
import { chartColors } from '@/shared/styles/chart';

type BarChartProps = {
  data: PurchaseFrequencyResponse;
};

export const BarChart = ({ data }: BarChartProps) => {
  const chartData = transformChartData(data);
  const maxCount = calculateMaxCount(data);

  return (
    <Flex dir="col" className="h-[600px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
          <XAxis
            dataKey="displayRange"
            height={120}
            tick={{ fontSize: 12, fill: chartColors.axis.text, fontWeight: 500 }}
            tickLine={false}
            axisLine={{ stroke: chartColors.axis.line, strokeWidth: 1.5 }}
          />
          <YAxis
            label={{
              value: '구매 횟수',
              angle: -90,
              position: 'insideLeft',
              style: {
                textAnchor: 'middle',
                fill: chartColors.axis.label,
                fontSize: '14px',
                fontWeight: '600',
              },
            }}
            tick={{ fontSize: 12, fill: chartColors.axis.text, fontWeight: 500 }}
            domain={[0, maxCount]}
            tickLine={false}
            axisLine={{ stroke: chartColors.axis.line, strokeWidth: 1 }}
          />
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={chartColors.grid.stroke}
            opacity={1}
            vertical={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: chartColors.bar.hover }} />
          <Bar dataKey="count" fill={chartColors.bar.fill} radius={[4, 4, 0, 0]} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </Flex>
  );
};

type TooltipProps = {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
};

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="min-w-[140px] rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
        <Text type="Label" weight="semibold" className="mb-2 text-gray-700">
          가격대: {label}
        </Text>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue-500" />
          <Text type="Body" weight="medium" className="text-blue-600">
            구매 횟수: <span className="font-bold text-blue-700">{payload[0].value}건</span>
          </Text>
        </div>
      </div>
    );
  }
  return null;
};
