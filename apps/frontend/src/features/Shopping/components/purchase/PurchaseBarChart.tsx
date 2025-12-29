import { PurchaseFrequencyResponse } from '@/apis/shopping.types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { transformChartData } from '../../utils/transformChartData';
import { calculateMaxCount } from '../../utils/calculateMaxCount';

type BarChartProps = {
  data: PurchaseFrequencyResponse;
};

export const PurchaseBarChart = ({ data }: BarChartProps) => {
  const chartData = transformChartData(data);
  const maxCount = calculateMaxCount(data);

  return (
    <div className="w-full" style={{ height: '600px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
          barCategoryGap="10%"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="displayRange"
            textAnchor="middle"
            height={120}
            tick={{ fontSize: 11 }}
            interval={0}
            stroke="#6b7280"
          />
          <YAxis
            label={{ value: '구매 횟수', angle: -90, position: 'insideLeft' }}
            tick={{ fontSize: 12 }}
            domain={[0, maxCount]}
            stroke="#6b7280"
          />
          <Tooltip
            formatter={(value: number | undefined) => [`${value ?? 0}건`, '구매 횟수']}
            labelFormatter={(label: string) => `가격대: ${label}`}
          />
          <Bar
            dataKey="count"
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
            stroke="#2563eb"
            strokeWidth={1}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
