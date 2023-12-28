export interface ServiceDay {
  planningPeriodBegin: string;
  planningPeriodEnd: string;
  sDaysR: string;
  sDaysI: string;
  sDaysB: string;
}

export interface Stop {
  name: string;
  type: string;
  id: string;
  extId: string;
  lon: number;
  lat: number;
  prognosisType: string;
  time: string;
  date: string;
  track?: string;
  hasMainMast: boolean;
  mainMastId?: string;
  mainMastExtId?: string;
  additional: boolean;
}

export interface Product {
  name: string;
  num: string;
  line: string;
  catOut: string;
  catIn: string;
  catCode: string;
  catOutS: string;
  catOutL: string;
  operatorCode: string;
  operator: string;
  admin: string;
}

export interface Leg {
  Origin: Stop;
  Destination: Stop;
  JourneyDetailRef: {
    ref: string;
  };
  JourneyStatus: string;
  Product: Product;
  Stops: null;
  idx: string;
  name: string;
  number: string;
  category: string;
  type: string;
  reachable: boolean;
  redirected: boolean;
  direction: string;
}

export interface LegList {
  Leg: Leg[];
}

export interface Trip {
  ServiceDays: ServiceDay[];
  LegList: LegList;
  TariffResult: null;
  alternative: boolean;
  valid: boolean;
  idx: number;
  tripId: string;
  ctxRecon: string;
  duration: string;
  return: boolean;
  checksum: string;
  transferCount: number;
}

export interface TripResponse {
  Trip: Trip[];
  scrB: string;
  scrF: string;
  serverVersion: string;
  dialectVersion: string;
  requestId: string;
}
