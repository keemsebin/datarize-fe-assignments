import { CustomerResponse, CustomerPurchaseResponse } from '@/features/Shopping/api/shopping.types';

/**
 * 테스트용 고객 목록 mock 데이터
 */
export const mockCustomers: CustomerResponse = [
  { id: 1, name: '홍길동', count: 5, totalAmount: 150000 },
  { id: 2, name: '김철수', count: 3, totalAmount: 80000 },
  { id: 3, name: '이영희', count: 7, totalAmount: 200000 },
];

/**
 * 테스트용 단일 고객 mock 데이터
 */
export const mockSingleCustomer: CustomerResponse = [
  { id: 1, name: '홍길동', count: 5, totalAmount: 150000 },
];

/**
 * 테스트용 고객 구매 내역 mock 데이터
 */
export const mockCustomerPurchases: CustomerPurchaseResponse = [
  {
    date: '2024-07-15',
    imgSrc: 'http://localhost:4000/imgs/tshirts.jpg',
    price: 20000,
    product: '티셔츠',
    quantity: 1,
  },
  {
    date: '2024-07-20',
    imgSrc: 'http://localhost:4000/imgs/bluejeans.jpg',
    price: 50000,
    product: '청바지',
    quantity: 1,
  },
];
