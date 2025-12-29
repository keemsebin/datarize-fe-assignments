import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Dropdown } from './Dropdown';

const meta = {
  title: 'components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Dropdown 컴포넌트는 정렬 순서(오름차순/내림차순)를 선택할 수 있는 드롭다운입니다.',
      },
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

const OPTIONS = [
  { value: 'asc', label: '오름차순' },
  { value: 'desc', label: '내림차순' },
];

export const Basic: Story = {
  render: function Storybook() {
    const [value, setValue] = useState<'asc' | 'desc'>('asc');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(e.target.value as 'asc' | 'desc');
    };

    return (
      <div className="w-48">
        <Dropdown options={OPTIONS} value={value} onChange={handleChange} />
      </div>
    );
  },
};
