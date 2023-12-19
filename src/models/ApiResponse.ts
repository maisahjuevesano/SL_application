export interface Deviation {
  Text: string;
  Consequence: string;
  ImportanceLevel: number;
}

export interface Bus {
  GroupOfLine: string | null;
  TransportMode: string;
  LineNumber: string;
  Destination: string;
  JourneyDirection: number;
  StopAreaName: string;
  StopAreaNumber: number;
  StopPointNumber: number;
  StopPointDesignation: string | null;
  TimeTabledDateTime: string;
  ExpectedDateTime: string;
  DisplayTime: string;
  JourneyNumber: number;
  Deviations: Deviation[] | null;
}

export interface RealtimeDeparturesResponse {
  StatusCode: number;
  Message: string | null;
  ExecutionTime: number;
  ResponseData: {
    LatestUpdate: string;
    DataAge: number;
    Buses: Bus[];
    StopPointDeviations: null;
  };
}

export interface SLDeparturesData {
  Buses: Array<{
    Destination: string;
    DisplayTime: string;
  }>;
}
