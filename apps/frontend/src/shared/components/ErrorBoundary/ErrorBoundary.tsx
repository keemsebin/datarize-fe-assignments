import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { Text } from '../Text';
import { Flex } from '../Flex';
import { Button } from '../Button';

type ErrorFallbackProps = {
  /**
   * 에러 객체
   */
  error: Error;
  /**
   * 에러 바운더리를 리셋하는 함수
   */
  resetErrorBoundary: () => void;
  /**
   * 에러 바운더리가 리셋될 때 호출되는 선택적 콜백 함수
   * @optional - 리셋 콜백 함수
   */
  onReset?: () => void;
};

const ErrorFallback = ({ error, resetErrorBoundary, onReset }: ErrorFallbackProps) => {
  const handleGoBack = () => {
    if (onReset) {
      onReset();
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
        <Button variant="secondary" onClick={handleGoBack}>
          돌아가기
        </Button>
      </Flex>
    </Flex>
  );
};

type ErrorBoundaryProps = {
  /**
   * 에러 바운더리가 리셋될 때 호출되는 선택적 콜백 함수
   */
  onReset?: () => void;
  /**
   * ErrorBoundary 내부에 렌더링될 자식 컴포넌트
   */
  children: React.ReactNode;
};

export const ErrorBoundary = ({ children, onReset }: ErrorBoundaryProps) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={(props) => <ErrorFallback {...props} onReset={onReset} />}
      onReset={onReset}
    >
      {children}
    </ReactErrorBoundary>
  );
};
