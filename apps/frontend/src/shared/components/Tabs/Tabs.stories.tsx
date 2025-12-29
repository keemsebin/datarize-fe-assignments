import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tabs, TabsTrigger, TabList, TabsContent } from '.'

const meta = {
  title: 'components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Tabs 컴포넌트는 탭 메뉴와 콘텐츠를 관리하는 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof Tabs>

export const Basic: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('chart')

    const handleTabChange = (value: string) => {
      setActiveTab(value)
    }

    return (
      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabList>
          <TabsTrigger value="chart">구매 빈도 차트</TabsTrigger>
          <TabsTrigger value="customers">고객 목록</TabsTrigger>
        </TabList>
        <TabsContent value="chart">
          <div className="p-4">구매 빈도 차트 영역</div>
        </TabsContent>
        <TabsContent value="customers">
          <div className="p-4">고객 목록 영역</div>
        </TabsContent>
      </Tabs>
    )
  },
}
