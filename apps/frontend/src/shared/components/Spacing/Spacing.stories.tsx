import type { Meta, StoryObj } from '@storybook/react-vite'
import { Spacing } from './Spacing'

const meta = {
  title: 'components/Spacing',
  component: Spacing,
  tags: ['autodocs'],
} satisfies Meta<typeof Spacing>

export default meta
type Story = StoryObj<typeof Spacing>

export const Basic: Story = {
  args: {
    size: 1,
    
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [1, 2, 4, 8, 16, 32, 64, 128, 256],
    },
  
  },
  render: (args: Story['args']) => <Spacing className='bg-gray-200' {...args} />,
}