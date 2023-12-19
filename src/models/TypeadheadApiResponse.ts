export interface TypeaheadAPIResponse {
  StatusCode: number;
  Message: string | null;
  ExecutionTime: number;
  ResponseData: Array<{
    Name: string;
    SiteId: string;
    Type: string;
    X: string;
    Y: string;
    Products: null;
  }>;
}
