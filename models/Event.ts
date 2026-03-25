export interface Event {
  _id: string;
  title: string;
  date: Date;
  expectedArrivalTime: Date;
  organizationName: string;
  eventId: string;
  createdAt: Date;
}

export interface CreateEventInput {
  title: string;
  date: string;
  expectedArrivalTime: string;
  organizationName: string;
}
