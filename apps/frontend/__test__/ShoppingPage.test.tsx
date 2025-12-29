import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderWithQueryClient } from './renderWithQueryClient';
import { screen, waitFor } from '@testing-library/dom';
import { ShoppingPage } from '../src/features/Shopping/index';
import userEvent from '@testing-library/user-event';

describe('ShoppingPage 컴포넌트 테스트', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('페이지 제목을 표시한다.', () => {
    renderWithQueryClient(<ShoppingPage />);

    expect(screen.getByText('쇼핑몰 구매 데이터 대시보드')).toBeInTheDocument();
  });

  it('탭을 렌더링해야 한다', () => {
    renderWithQueryClient(<ShoppingPage />);

    expect(screen.getByText('구매 빈도 차트')).toBeInTheDocument();
    expect(screen.getByText('고객 목록')).toBeInTheDocument();
  });

  it('탭 전환이 작동해야 한다', async () => {
    const user = userEvent.setup();

    renderWithQueryClient(<ShoppingPage />);

    const chartTab = screen.getByRole('tab', { name: '구매 빈도 차트' });
    expect(chartTab).toHaveAttribute('aria-selected', 'true');

    const customersTab = screen.getByRole('tab', { name: '고객 목록' });
    await user.click(customersTab);

    await waitFor(() => {
      expect(customersTab).toHaveAttribute('aria-selected', 'true');
      expect(chartTab).toHaveAttribute('aria-selected', 'false');
    });
  });

  it('구매 빈도 차트 탭에서 날짜 범위 선택이 표시되어야 한다', () => {
    renderWithQueryClient(<ShoppingPage />);

    expect(screen.getByText('날짜 범위 선택')).toBeInTheDocument();
  });

  it('고객 목록 탭으로 전환 시 고객 목록이 표시되어야 한다', async () => {
    const user = userEvent.setup();

    renderWithQueryClient(<ShoppingPage />);

    const customersTab = screen.getByRole('tab', { name: '고객 목록' });
    await user.click(customersTab);

    await waitFor(() => {
      expect(screen.getByText('고객 목록')).toBeInTheDocument();
      expect(screen.getByText('이름')).toBeInTheDocument();
      expect(screen.getByText('구매 횟수')).toBeInTheDocument();
      expect(screen.getByText('총 구매 금액')).toBeInTheDocument();
      expect(screen.getByText('홍길동')).toBeInTheDocument();
    });
  });
});
