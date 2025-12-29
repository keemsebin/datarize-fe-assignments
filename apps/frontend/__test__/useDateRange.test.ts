import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useDateRange } from '../src/features/Shopping/hooks/useDateRange';

describe('useDateRange', () => {
  it('초기값이 올바르게 설정되어야 한다.', () => {
    const { result } = renderHook(() => useDateRange());

    expect(result.current.dateRange).toEqual({
      from: '2024-07-01',
      to: '2024-07-31',
    });
  });

  it('from 날짜를 변경할 수 있어야 한다.', () => {
    const { result } = renderHook(() => useDateRange());

    act(() => {
      result.current.handleDateChange({
        target: { name: 'from', value: '2024-08-01' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.dateRange.from).toBe('2024-08-01');
    expect(result.current.dateRange.to).toBe('2024-07-31');
  });

  it('to 날짜를 변경할 수 있어야 한다.', () => {
    const { result } = renderHook(() => useDateRange());

    act(() => {
      result.current.handleDateChange({
        target: { name: 'to', value: '2024-08-31' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.dateRange.from).toBe('2024-07-01');
    expect(result.current.dateRange.to).toBe('2024-08-31');
  });

  it('여러 번 날짜를 변경할 수 있어야 한다.', () => {
    const { result } = renderHook(() => useDateRange());

    act(() => {
      result.current.handleDateChange({
        target: { name: 'from', value: '2024-06-01' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleDateChange({
        target: { name: 'to', value: '2024-06-30' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.dateRange).toEqual({
      from: '2024-06-01',
      to: '2024-06-30',
    });
  });
});
