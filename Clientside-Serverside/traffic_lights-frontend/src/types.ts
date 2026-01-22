export interface CarCount {
  minute: number;
  amount: number;
}

export interface TrafficData {
  location: string;
  timestamp: string;
  totalCarlastHour: number;
  carCounts: CarCount[];
}
