import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './Text';

const meta = {
  title: 'components/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Text 컴포넌트는 다양한 텍스트 스타일과 타입을 제공합니다.',
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Basic: Story = {
  args: {
    type: 'Body',
    weight: 'regular',
    children: '기본 텍스트',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['Display', 'Title', 'Heading', 'Body', 'Label'],
    },
    weight: {
      control: { type: 'select' },
      options: ['regular', 'medium', 'semibold', 'bold'],
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'p', 'label', 'span'],
    },
  },
  render: (args) => <Text {...args} />,
};

export const Display: Story = {
  args: {
    type: 'Display',
    weight: 'bold',
    children: 'Display 텍스트',
  },
};

export const Title: Story = {
  args: {
    type: 'Title',
    weight: 'semibold',
    children: 'Title 텍스트',
  },
};

export const Heading: Story = {
  args: {
    type: 'Heading',
    weight: 'semibold',
    children: 'Heading 텍스트',
  },
};

export const Body: Story = {
  args: {
    type: 'Body',
    weight: 'regular',
    children: 'Body 텍스트',
  },
};

export const Label: Story = {
  args: {
    type: 'Label',
    weight: 'medium',
    children: 'Label 텍스트',
  },
};
