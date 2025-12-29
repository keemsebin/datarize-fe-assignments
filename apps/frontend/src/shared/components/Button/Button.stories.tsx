import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { Flex } from '../Flex';

const meta = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Button 컴포넌트는 다양한 스타일과 크기의 버튼을 제공합니다.',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: '버튼',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export const Variants: Story = {
  render: () => (
    <Flex dir="row" wrap="wrap" gap={2}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex dir="row" wrap="wrap" gap={2} alignItems="center">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </Flex>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Flex dir="row" wrap="wrap" gap={2}>
      <Button variant="primary" disabled>
        Primary Disabled
      </Button>
      <Button variant="secondary" disabled>
        Secondary Disabled
      </Button>
      <Button variant="outline" disabled>
        Outline Disabled
      </Button>
    </Flex>
  ),
};

export const WithOnClick: Story = {
  render: () => (
    <Flex dir="row" wrap="wrap" gap={2}>
      <Button onClick={() => alert('클릭됨!')}>클릭 가능한 버튼</Button>
      <Button variant="secondary" onClick={() => alert('클릭됨!')}>
        Secondary 버튼
      </Button>
    </Flex>
  ),
};
