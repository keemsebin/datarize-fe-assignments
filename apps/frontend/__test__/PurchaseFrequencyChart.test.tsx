import { describe, it, expect, beforeEach, vi, Mocked } from 'vitest';
import { renderWithQueryClient } from './renderWithQueryClient';
import { PurchaseFrequencyChart } from '../src/features/Shopping/components/purchase/PurchaseFrequencyChart';
import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/dom';
import { fetcher } from '@/apis/fetcher';
import { mockPurchaseFrequencyData } from './mocks/purchaseFrequency';
import { BarChart } from '@/features/Shopping/components/purchase/BarChart';

vi.mock('@/apis/fetcher', () => {
  return {
    fetcher: {
      get: vi.fn(),
    },
  };
});

const mockFetcher = fetcher as Mocked<typeof fetcher>;

describe('PurchaseFrequencyChart 컴포넌트 테스트', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockFetcher.get.mockImplementation((url: string) => {
      if (url.includes('api/purchase-frequency')) {
        return Promise.resolve(mockPurchaseFrequencyData);
      }
      return Promise.reject(new Error(`Unknown API endpoint: ${url}`));
    });
  });

  it('날짜 범위 선택 컴포넌트를 렌더링한다.', () => {
    renderWithQueryClient(<PurchaseFrequencyChart />);

    expect(screen.getByText('날짜 범위 선택')).toBeInTheDocument();
    expect(screen.getByDisplayValue('2024-07-01')).toBeInTheDocument();
    expect(screen.getByDisplayValue('2024-07-31')).toBeInTheDocument();
  });

  it('날짜 범위 변경 시 API가 올바른 파라미터로 호출되어야 한다.', async () => {
    const user = userEvent.setup();

    renderWithQueryClient(<PurchaseFrequencyChart />);

    await waitFor(() => {
      expect(mockFetcher.get).toHaveBeenCalled();
    });

    vi.clearAllMocks();

    const fromInput = screen.getByDisplayValue('2024-07-01') as HTMLInputElement;

    await user.clear(fromInput);
    await user.type(fromInput, '2024-07-05');

    await waitFor(
      () => {
        expect(mockFetcher.get).toHaveBeenCalled();
        const callArgs = mockFetcher.get.mock.calls[mockFetcher.get.mock.calls.length - 1];
        expect(callArgs[0]).toContain('from=2024-07-05');
      },
      { timeout: 2000 },
    );
  });

  it('차트 데이터를 로드하고 표시한다.', async () => {
    renderWithQueryClient(<BarChart dateRange={{ from: '2024-07-01', to: '2024-07-31' }} />);

    await waitFor(() => {
      expect(screen.getByTestId('purchase-frequency-chart')).toBeInTheDocument();
    });
  });
});
