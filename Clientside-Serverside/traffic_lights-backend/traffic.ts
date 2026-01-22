export interface carCount{
    minute:number;
    amount:number;
}

export interface trafficData{
    location:string;
    // JSON-friendly timestamp (ISO 8601 string), e.g. "2026-01-21T10:15:00.000Z"
    timestamp:string;
    totalCarlastHour:number;
    carCounts:carCount[];
}