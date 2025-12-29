import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { Text } from '../Text';
import { Flex } from '../Flex';

type ErrorBoundaryProps = {
  /**
   * Optional callback function to be called when the error boundary is reset.
   */
  onReset?: () => void;
  /**
   * The child components to be rendered inside the ErrorBoundary.
   */
  children: React.ReactNode;
};

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  return (
    <Flex
      dir="col"
      alignItems="center"
      justifyContent="center"
      gap={4}
      className="min-h-[200px] p-8"
    >
      <Text type="Heading" weight="semibold" className="text-red-600">
        데이터를 불러오는 중 오류가 발생했습니다
      </Text>
      <Text type="Body" className="text-gray-500">
        {error.message || '알 수 없는 오류가 발생했습니다'}
      </Text>
      <button
        onClick={resetErrorBoundary}
        className="rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
      >
        다시 시도
      </button>
    </Flex>
  );
};

export const ErrorBoundary = ({ children, onReset }: ErrorBoundaryProps) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback} onReset={onReset}>
      {children}
    </ReactErrorBoundary>
  );
};
