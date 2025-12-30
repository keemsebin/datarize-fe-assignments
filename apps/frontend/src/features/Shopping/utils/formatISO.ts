/**
 * 날짜를 시작 시간으로 변환
 * @param date 날짜
 * @returns 시작 시간
 */
export const toStartOfDayISO = (date: string) => `${date}T00:00:00Z`;

/**
 * 날짜를 종료 시간으로 변환
 * @param date 날짜
 * @returns 종료 시간
 */
export const toEndOfDayISO = (date: string) => `${date}T23:59:59Z`;
