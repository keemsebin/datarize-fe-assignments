import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from './index';
import { Text } from '../Text';
import { Button } from '../Button';
import { useModal } from '@/shared/hooks/useModal';

const meta = {
  title: 'components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Modal 컴포넌트는 createPortal을 사용하여 body에 렌더링되는 모달입니다.',
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: function BasicStory() {
    const { isOpen, open, close } = useModal();

    return (
      <>
        <Button onClick={open}>모달 열기</Button>
        <Modal isOpen={isOpen} onClose={close}>
          <Text>안녕하세요</Text>
        </Modal>
      </>
    );
  },
};
