export type PurchaseFrequencyResponse = Purchase[];

export type PurchaseFrequencyRequest = {
  from: string;
  to: string;
};

export type Purchase = {
  range: string;
  count: number;
};
