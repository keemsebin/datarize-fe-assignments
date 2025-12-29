/**
 * 백엔드 에러 메시지를 사용자 친화적인 메시지로 변환
 */
export const getUserFriendlyErrorMessage = (error: unknown): string => {
  if (!error || typeof error !== 'object') {
    return '알 수 없는 오류가 발생했습니다.';
  }

  // HTTP 에러인 경우
  if ('response' in error) {
    const httpError = error as { response: { status: number; body?: { error?: string } } };
    const errorMessage = httpError.response?.body?.error || '';

    // 백엔드 에러 메시지 매핑
    const errorMessageMap: Record<string, string> = {
      'Both from and to must be provided': '시작 날짜와 종료 날짜를 모두 입력해주세요.',
      'Invalid date format. Dates must be in ISO 8601 format':
        '날짜 형식이 올바르지 않습니다. 올바른 날짜를 입력해주세요.',
      'From date must be before to date': '시작 날짜는 종료 날짜보다 이전이어야 합니다.',
      'Product with ID': '제품 정보를 불러오는 중 오류가 발생했습니다.',
      'An error occurred while processing your request.': '요청을 처리하는 중 오류가 발생했습니다.',
    };

    // 에러 메시지 매핑 확인
    for (const [key, value] of Object.entries(errorMessageMap)) {
      if (errorMessage.includes(key)) {
        return value;
      }
    }

    // 상태 코드별 기본 메시지
    if (httpError.response.status === 400) {
      return errorMessage || '잘못된 요청입니다. 입력값을 확인해주세요.';
    }
    if (httpError.response.status === 404) {
      return '요청한 데이터를 찾을 수 없습니다.';
    }
    if (httpError.response.status === 500) {
      return '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
    }

    return errorMessage || '오류가 발생했습니다.';
  }

  // 일반 에러인 경우
  if (error instanceof Error) {
    return error.message;
  }

  return '알 수 없는 오류가 발생했습니다.';
};
