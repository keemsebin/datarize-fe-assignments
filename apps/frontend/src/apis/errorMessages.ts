/**
 * 백엔드 에러 메시지 맵
 */
const ERROR_MESSAGE_MAP: Record<string, string> = {
  // Customer API
  'Invalid name type parameter.': '이름 형식이 올바르지 않습니다.',
  'Invalid sortBy parameter. Use "asc" or "desc".': '정렬 기준은 "asc" 또는 "desc"만 가능합니다.',

  // Customer ID API
  'Customer not found': '고객 정보를 찾을 수 없습니다.',

  // Purchase Frequency API
  'Both from and to must be provided': '시작 날짜와 종료 날짜를 모두 입력해주세요.',
  'Invalid date format. Dates must be in ISO 8601 format': '날짜 형식이 올바르지 않습니다.',
  'From date must be before to date': '시작 날짜는 종료 날짜보다 이전이어야 합니다.',

  // 기타
  'An error occurred while processing your request.': '요청 처리 중 오류가 발생했습니다.',
} as const;

/**
 * HTTP 상태 코드별 기본 메시지
 */
const STATUS_MESSAGE_MAP: Record<number, string> = {
  400: '잘못된 요청입니다. 입력값을 확인해주세요.',
  401: '인증이 필요합니다.',
  403: '접근 권한이 없습니다.',
  404: '요청한 데이터를 찾을 수 없습니다.',
  500: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
  502: '서버 연결에 실패했습니다.',
  503: '서비스를 일시적으로 사용할 수 없습니다.',
} as const;

/**
 * 백엔드 에러 메시지를 사용자 친화적인 메시지로 변환
 * @param errorMessage - 백엔드 에러 메시지
 * @param statusCode - HTTP 상태 코드
 * @returns 사용자 친화적인 메시지
 */
export const getUserFriendlyErrorMessage = (errorMessage: unknown, statusCode?: number): string => {
  if (!errorMessage) {
    return statusCode && STATUS_MESSAGE_MAP[statusCode]
      ? STATUS_MESSAGE_MAP[statusCode]
      : '알 수 없는 오류가 발생했습니다.';
  }

  // 1. 정확한 매칭 우선
  if (errorMessage && typeof errorMessage === 'string' && ERROR_MESSAGE_MAP[errorMessage]) {
    return ERROR_MESSAGE_MAP[errorMessage];
  }

  // 2. 부분 매칭 (특정 패턴)
  if (
    errorMessage &&
    typeof errorMessage === 'string' &&
    errorMessage.startsWith('Product with ID')
  ) {
    return '제품 정보를 불러오는 중 오류가 발생했습니다.';
  }

  // 3. 원본 메시지가 유의미한 경우 반환
  if (
    errorMessage &&
    typeof errorMessage === 'string' &&
    errorMessage.length > 0 &&
    errorMessage.length < 200
  ) {
    return errorMessage;
  }

  // 4. 상태 코드 기반 폴백
  if (statusCode && STATUS_MESSAGE_MAP[statusCode]) {
    return STATUS_MESSAGE_MAP[statusCode];
  }

  // 5. 최종 폴백
  return '알 수 없는 오류가 발생했습니다.';
};
