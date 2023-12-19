export interface Departure {
  line: string;
  destination: string;
  displayTime: string;
}

export interface DeparturesData {
  Buses: Departure[];
  Trains: Departure[];
  Trams: Departure[];
  // Du kan lägga till fler om ditt API returnerar annan typ av information
}
