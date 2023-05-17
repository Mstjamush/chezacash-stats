export interface CreateReport {
  registrations: number;
  deposits: number;
  withdrawals: number;
  stakes: number;
  payouts: number;
  bonuses: number;
  createdAt?: string;
}

export interface DateFilterParams {
  startTime: string;
  endTime: string;
}
