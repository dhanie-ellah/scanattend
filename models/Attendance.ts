export interface Attendance {
  _id: string;
  name: string;
  department: string;
  eventId: string;
  timestamp: Date;
  status: "on-time" | "late";
}

export interface CreateAttendanceInput {
  name: string;
  department: string;
  eventId: string;
}
