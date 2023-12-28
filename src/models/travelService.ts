export interface TripResponse {
  trips: Trip[];
}

export interface Trip {
  duration: string;
  legs: Leg[];
}

export interface Leg {
  origin: string;
  destination: string;
}
