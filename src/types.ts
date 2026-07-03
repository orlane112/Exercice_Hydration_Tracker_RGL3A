export interface WaterLog {
  id: string;
  amountMs: number;
  timestamp: Date;
}

export interface HydrationState {
  currentAmount: number; // in ml
  goalAmount: number; // in ml
  logs: WaterLog[];
}
