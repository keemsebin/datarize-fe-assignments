import { ReactElement, Suspense } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Loading } from '@/shared/components/Loading';

/**
 * 테스트용 QueryClient 생성
 * @returns QueryClient
 */
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 0,
        staleTime: Infinity,
      },
    },
  });

const QueryClientProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = createTestQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading className="h-[500px] w-full" />}>{children}</Suspense>
    </QueryClientProvider>
  );
};

export const renderWithQueryClient = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: QueryClientProviderWrapper, ...options });
