import { useState } from 'react';

/**
 * 고객 이름을 검색하는 훅
 * @returns 고객 이름 관리 객체 (customerName: 고객 이름, handleCustomerNameChange: 고객 이름 변경 핸들러, handleResetCustomerName: 고객 이름 초기화 핸들러)
 */
export const useSearchCustomer = () => {
  const [customerName, setCustomerName] = useState('');

  const handleCustomerNameChange = (customerName: string) => {
    setCustomerName(customerName);
  };

  const handleResetCustomerName = () => {
    setCustomerName('');
  };

  return {
    customerName,
    handleCustomerNameChange,
    handleResetCustomerName,
  };
};
