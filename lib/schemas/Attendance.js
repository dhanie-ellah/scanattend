import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
    enum: [
      "Worship",
      "Youth",
      "Children",
      "Prayer",
      "Tech",
      "Ushers",
      "Cleaning",
      "Other",
    ],
  },
  eventId: {
    type: String,
    required: true,
    index: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["on-time", "late"],
    default: "on-time",
  },
});

export default mongoose.models.Attendance ||
  mongoose.model("Attendance", AttendanceSchema);
