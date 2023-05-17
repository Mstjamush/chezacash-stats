export interface Summary {
  registrations: number;
  deposits: number;
  withdrawals: number;
  stakes: number;
  payouts: number;
  bonuses: number;
  data: Report[];
}

export interface Report {
  id: string;
  registrations: number;
  deposits: number;
  withdrawals: number;
  stakes: number;
  payouts: number;
  bonuses: number;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface CreateReportModel {
  name: string;
}
export interface CreateReportApiModel {
  registrations: number;
  deposits: number;
  withdrawals: number;
  stakes: number;
  // bonuses: number;
  payouts: number;
  exciseDuty: number;
  bettingTax: number;
  profitAndLoss: number;
  stakeAfterTax: number;
  winningAmount: number;
  withholdingTax: number;
  createdAt: Date | string;
}
