import type { Meta, StoryObj } from '@storybook/react-vite';
import { Loading } from './Loading';
import { Flex } from '../Flex';

const meta = {
  title: 'components/Loading',
  component: Loading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Loading 컴포넌트는 로딩 상태를 표시하는 스피너입니다.',
      },
    },
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof Loading>;

export const Basic: Story = {
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <Flex dir="row" gap={8} alignItems="center">
      <Loading size="sm" />
      <Loading size="md" />
      <Loading size="lg" />
    </Flex>
  ),
};

export const WithCustomClassName: Story = {
  render: () => (
    <div className="h-[200px] w-full">
      <Loading className="h-full w-full" />
    </div>
  ),
};
