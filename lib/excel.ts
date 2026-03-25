import XLSX from "xlsx";

export function generateExcel(attendanceData: any[]) {
  const ws = XLSX.utils.json_to_sheet(attendanceData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Attendance");
  const excelBuffer = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
  return excelBuffer;
}

export function downloadExcel(data: any[], filename = "attendance.xlsx") {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Attendance");
  XLSX.writeFile(wb, filename);
}
