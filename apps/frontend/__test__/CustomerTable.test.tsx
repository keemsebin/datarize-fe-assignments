import { describe, it, expect, beforeEach, vi, Mocked } from 'vitest';
import { renderWithQueryClient } from './renderWithQueryClient';
import { screen, waitFor } from '@testing-library/dom';
import { CustomerTable } from '../src/features/Shopping/components/customers/CustomerTable';
import userEvent from '@testing-library/user-event';
import { mockCustomerPurchases, mockCustomers } from './mocks/customers';
import { fetcher } from '@/apis/fetcher';

vi.mock('@/apis/fetcher', () => {
  return {
    fetcher: {
      get: vi.fn(),
    },
  };
});

const mockFetcher = fetcher as Mocked<typeof fetcher>;

describe('CustomerTable 컴포넌트 테스트', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mockFetcher.get.mockImplementation((url: string) => {
      if (url.includes('api/customers') && !url.includes('purchases')) {
        return Promise.resolve(mockCustomers);
      }
      if (url.includes('api/customers') && url.includes('purchases')) {
        return Promise.resolve(mockCustomerPurchases);
      }
      return Promise.reject(new Error(`Unknown API endpoint: ${url}`));
    });
  });

  it('고객 테이블을 렌더링하고 데이터를 표시한다.', async () => {
    renderWithQueryClient(<CustomerTable sortByPrice={null} customerName="" />);

    await waitFor(() => {
      expect(screen.getByText('홍길동')).toBeInTheDocument();
      expect(screen.getByText('5')).toBeInTheDocument();
      expect(screen.getByText('150000')).toBeInTheDocument();
    });
  });

  it('고객 행 클릭 시 모달이 열린다.', async () => {
    const user = userEvent.setup();

    renderWithQueryClient(<CustomerTable sortByPrice={null} customerName="" />);

    await waitFor(() => {
      expect(screen.getByText('홍길동')).toBeInTheDocument();
    });

    const customerRow = screen.getByText('홍길동').closest('tr');
    if (customerRow) {
      await user.click(customerRow);
    }

    await waitFor(() => {
      expect(screen.getByText(/홍길동.*님의 구매 내역/)).toBeInTheDocument();
    });
  });

  it('정렬이 asc일 때 오름차순으로 정렬된 데이터가 표시되어야 한다.', async () => {
    mockFetcher.get.mockImplementation((url: string) => {
      if (
        url.includes('api/customers') &&
        !url.includes('purchases') &&
        url.includes('sortBy=asc')
      ) {
        return Promise.resolve(mockCustomers.sort((a, b) => a.totalAmount - b.totalAmount));
      }

      return Promise.reject(new Error(`Unknown API endpoint: ${url}`));
    });
    const { container } = renderWithQueryClient(
      <CustomerTable sortByPrice="asc" customerName="" />,
    );

    await waitFor(() => {
      expect(mockFetcher.get).toHaveBeenCalled();
      const callArgs = mockFetcher.get.mock.calls[0];
      expect(callArgs[0]).toContain('sortBy=asc');
    });

    const tbody = container.querySelector('tbody');
    const firstRow = tbody?.querySelector('tr:first-child');
    const firstCell = firstRow?.querySelector('td:first-child');

    expect(firstCell).toHaveTextContent('김철수');
  });

  it('정렬이 desc일 때 내림차순으로 정렬된 데이터가 표시되어야 한다.', async () => {
    mockFetcher.get.mockImplementation((url: string) => {
      if (
        url.includes('api/customers') &&
        !url.includes('purchases') &&
        url.includes('sortBy=desc')
      ) {
        return Promise.resolve(mockCustomers.sort((a, b) => b.totalAmount - a.totalAmount));
      }

      return Promise.reject(new Error(`Unknown API endpoint: ${url}`));
    });
    const { container } = renderWithQueryClient(
      <CustomerTable sortByPrice="desc" customerName="" />,
    );

    await waitFor(() => {
      expect(mockFetcher.get).toHaveBeenCalled();
      const callArgs = mockFetcher.get.mock.calls[0];
      expect(callArgs[0]).toContain('sortBy=desc');
    });

    const tbody = container.querySelector('tbody');
    const firstRow = tbody?.querySelector('tr:first-child');
    const firstCell = firstRow?.querySelector('td:first-child');

    expect(firstCell).toHaveTextContent('이영희');
  });

  it('검색어가 있을 때 검색어에 맞는 데이터가 표시되어야 한다.', async () => {
    mockFetcher.get.mockImplementation((url: string) => {
      if (
        url.includes('api/customers') &&
        !url.includes('purchases') &&
        url.includes('name=홍길동')
      ) {
        return Promise.resolve(mockCustomers.filter((customer) => customer.name === '홍길동'));
      }

      return Promise.reject(new Error(`Unknown API endpoint: ${url}`));
    });
    const { container } = renderWithQueryClient(
      <CustomerTable sortByPrice={null} customerName="홍길동" />,
    );

    await waitFor(() => {
      expect(mockFetcher.get).toHaveBeenCalled();
      const callArgs = mockFetcher.get.mock.calls[0];
      expect(callArgs[0]).toContain('name=홍길동');
    });

    const tbody = container.querySelector('tbody');
    const firstRow = tbody?.querySelector('tr:first-child');
    const firstCell = firstRow?.querySelector('td:first-child');
    expect(firstCell).toHaveTextContent('홍길동');
  });
});
