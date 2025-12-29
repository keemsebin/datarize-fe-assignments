import { useState } from 'react';

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
