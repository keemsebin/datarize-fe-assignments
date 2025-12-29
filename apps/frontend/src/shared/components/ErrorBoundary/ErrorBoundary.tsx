import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { Text } from '../Text';
import { Flex } from '../Flex';

type ErrorBoundaryProps = {
  /**
   * 에러 바운더리가 리셋될 때 호출되는 선택적 콜백 함수
   */
  onReset?: () => void;
  /**
   * 재시도할 때 호출되는 선택적 콜백 함수 (예: 쿼리 재요청)
   */
  onRetry?: () => void;
  /**
   * ErrorBoundary 내부에 렌더링될 자식 컴포넌트
   */
  children: React.ReactNode;
};

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
  onReset?: () => void;
  onRetry?: () => void;
};

const ErrorFallback = ({ error, resetErrorBoundary, onReset, onRetry }: ErrorFallbackProps) => {
  const handleGoBack = () => {
    if (onReset) {
      onReset();
    }
    resetErrorBoundary();
  };

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    }
    resetErrorBoundary();
  };

  return (
    <Flex
      dir="col"
      alignItems="center"
      justifyContent="center"
      gap={4}
      className="min-h-[200px] p-8"
    >
      <Text type="Body" className="text-gray-500">
        {error.message || '알 수 없는 오류가 발생했습니다'}
      </Text>
      <Flex dir="row" gap={4}>
        <button
          onClick={handleGoBack}
          className="rounded bg-gray-600 px-4 py-2 text-white transition-colors hover:bg-gray-700"
        >
          돌아가기
        </button>
        <button
          onClick={handleRetry}
          className="rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          다시 시도
        </button>
      </Flex>
    </Flex>
  );
};

export const ErrorBoundary = ({ children, onReset, onRetry }: ErrorBoundaryProps) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={(props) => (
        <ErrorFallback {...props} onReset={onReset} onRetry={onRetry} />
      )}
      onReset={onReset}
    >
      {children}
    </ReactErrorBoundary>
  );
};
