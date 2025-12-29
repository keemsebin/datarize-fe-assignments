import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '.';

const meta = {
  title: 'components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Input 컴포넌트는 입력 필드를 관리하는 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  render: (args: Story['args']) => <Input {...args} />,
};
