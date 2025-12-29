export type PurchaseFrequencyResponse = Purchase[];

export type PurchaseFrequencyRequest = {
  from: string;
  to: string;
};

export type Purchase = {
  range: string;
  count: number;
};

export type CustomerResponse = Customer[];

export type CustomerPurchaseRequest = {
  sortBy: SortBy | null;
  name: string;
};

export type SortBy = 'asc' | 'desc';

export type Customer = {
  id: number;
  name: string;
  count: number;
  totalAmount: number;
};
