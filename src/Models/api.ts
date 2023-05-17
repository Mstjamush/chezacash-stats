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

export interface TaxInfo {
  periodFrom: string;
  periodTo: string;
  stakeAmount: number;
  punterAmount: number;
  totalExcise: number;
  totalWinnings: number;
  totalPayouts: number;
  totalWithholding: number;
  stakes: Stake[];
  outcomes: OutcomeElement[];
}

export interface OutcomeElement {
  id: string;
  betId: string;
  customerId: string;
  outcome: OutcomeEnum;
  outcomeDate: Date;
  winnings: number;
  payout: number;
  withholdingTax: number;
  walletBalanceOutcome: number;
  createdAt: Date;
  updatedAt: Date;
}

export enum OutcomeEnum {
  CachedOut = "CachedOut",
  Cashout = "CASHOUT",
  Empty = "",
  Lose = "LOSE",
  Lost = "Lost",
  Win = "WIN",
  Won = "Won",
}

export interface Stake {
  id: string;
  betId: string;
  customerId: string;
  mobileNo: string;
  punterAmt: number;
  stakeAmt: number;
  exciseAmt: number;
  desc: Desc;
  odds: number;
  stakeType: StakeType;
  dateOfStake: Date;
  expectedOutcomeTime: Date;
  walletBalanceStake: number;
  createdAt: Date;
  updatedAt: Date;
}

export enum Desc {
  Multiway = "Multiway",
  Single = "Single",
}

export enum StakeType {
  Normal = "NORMAL",
}
