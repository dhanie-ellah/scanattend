// import { prisma } from "@/lib/db";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface AttendancePageProps {
  params: Promise<{ eventId: string }>;
}

export default async function AttendancePage({ params }: AttendancePageProps) {
  const { eventId } = await params;

  // const event = await prisma.event.findUnique({
  //   where: { id: eventId },
  //   include: { attendances: { orderBy: { checkedInAt: "desc" } } },
  // });

  // if (!event) {
  //   return <div>Event not found</div>;
  // }

  // const attendanceData = event.attendances.map((a) => ({
  //   name: a.attendeeName || "Anonymous",
  //   email: a.attendeeEmail || "-",
  //   checkedIn: new Date(a.checkedInAt).toLocaleString(),
  // }));

  return (
    <div className="min-h-screen bg-(--surface) text-(--on-surface) space-y-6 p-8">
      <main className="p-4 md:p-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* <!-- Page Header Section --> */}
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-(--primary) font-bold text-sm uppercase tracking-widest mb-2">
                <span
                  className="material-symbols-outlined text-[18px]"
                  data-icon="event"
                >
                  event
                </span>
                <span>Active Session</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-(--on-surface) tracking-tight leading-tight">
                Workers Sunday Attendance <br />
                <span className="text-(--primary-dim) opacity-70">
                  October 24, 2024
                </span>
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button className="bg-(--secondary-container) text-(--on-secondary-container) rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-sm px-8 py-6">
                <span
                  className="material-symbols-outlined"
                  data-icon="ios_share"
                >
                  ios_share
                </span>
                <span>Export to Excel</span>
              </Button>
            </div>
          </div>
          {/* <!-- Dashboard Stats Tonal Layering --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="bg-(--surface-container-lowest) p-6 rounded-xl shadow-sm border border-(--outline-variant)/10">
              <p className="text-sm text-(--on-surface-variant) font-medium mb-1">
                Total Expected
              </p>
              <p className="text-3xl font-headline font-bold text-(--on-surface)">
                124
              </p>
            </Card>
            <Card className="bg-(--primary)/5 p-6 rounded-xl border border-(--primary)/10">
              <p className="text-sm text-(--primary) font-bold mb-1">Present</p>
              <p className="text-3xl font-headline font-bold text-(--primary)">
                108
              </p>
            </Card>
            <Card className="bg-(--surface-container-low) p-6 rounded-xl border-(--primary)/10">
              <p className="text-sm text-(--on-surface-variant) font-medium mb-1">
                Late Arrivals
              </p>
              <p className="text-3xl font-headline font-bold text-(--on-surface)">
                12
              </p>
            </Card>
            <Card className="bg-(--error)/5 p-6 rounded-xl border border-(--error)/10">
              <p className="text-sm text-(--error) font-bold mb-1">Absent</p>
              <p className="text-3xl font-headline font-bold text-(--error)">16</p>
            </Card>
          </div>
          {/* <!-- List Controls & Search --> */}
          <div className="bg-(--surface-container-lowest) rounded-2xl shadow-sm overflow-hidden border border-(--outline-variant)/10">
            <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-white">
              <div className="relative w-full md:w-96">
                <span className="absolute inset-y-0 left-4 flex items-center text-(--on-surface-variant)/60">
                  <span
                    className="material-symbols-outlined"
                    data-icon="search"
                  >
                    search
                  </span>
                </span>
                <input
                  className="w-full bg-(--surface-container) border-none rounded-xl py-3.5 pl-12 pr-4 focus:bg-white focus:ring-2 focus:ring-(--primary)/30 transition-all text-sm"
                  placeholder="Search by name, ID or department..."
                  type="text"
                />
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm text-(--on-surface-variant) font-medium mr-2">
                  Showing 108 attendees
                </p>
                <button className="p-2 text-(--on-surface-variant) hover:bg-(--surface-container) rounded-lg transition-colors">
                  <span className="material-symbols-outlined" data-icon="sort">
                    sort
                  </span>
                </button>
              </div>
            </div>
            {/* <!-- Modern Data Table --> */}
            <div className="overflow-x-auto">
              <Table className="w-full text-left border-collapse">
                <TableHeader>
                  <TableRow className="bg-(--surface-container-low) text-(--on-surface-variant) uppercase text-[10px] font-bold tracking-widest">
                    <TableHead className="px-8 py-4">Attendee Name</TableHead>
                    <TableHead className="px-6 py-4">Department</TableHead>
                    <TableHead className="px-6 py-4">Arrival Time</TableHead>
                    <TableHead className="px-6 py-4">Status</TableHead>
                    <TableHead className="px-6 py-4 text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-(--surface-container)">
                  {/* <!-- Row 1 --> */}
                  <TableRow className="hover:bg-(--surface-container-low)/50 transition-colors">
                    <TableCell className="px-8 py-4">
                          <p className="font-bold text-(--on-surface) text-sm">
                            Sarah Jenkins
                          </p>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <span className="text-sm font-medium text-(--on-surface)">
                        Music Ministry
                      </span>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <span className="text-sm font-mono text-(--on-surface)">
                        07:42 AM
                      </span>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-teal-100 text-teal-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                        On Time
                      </span>
                    </TableCell>
                    <TableCell className="px-6 py-4 text-right">
                      <button className="p-2 text-(--on-surface-variant) hover:text-primary transition-colors">
                        <span
                          className="material-symbols-outlined"
                          data-icon="more_vert"
                        >
                          more_vert
                        </span>
                      </button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            {/* <!-- Pagination/Footer --> */}
            <div className="p-6 bg-white flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-(--on-surface-variant)">
                Showing 1 to 4 of 108 attendees
              </p>
              <div className="flex items-center gap-1">
                <button
                  className="p-2 hover:bg-(--surface-container) rounded-lg disabled:opacity-30"
                  disabled
                >
                  <span
                    className="material-symbols-outlined"
                    data-icon="chevron_left"
                  >
                    chevron_left
                  </span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-(--primary) text-(--on-primary) font-bold text-sm">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-(--surface-container) text-(--on-surface) font-bold text-sm">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-(--surface-container) text-(--on-surface) font-bold text-sm">
                  3
                </button>
                <span className="px-2 text-(--on-surface-variant)">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-(--surface-container) text-(--on-surface) font-bold text-sm">
                  27
                </button>
                <button className="p-2 hover:bg-(--surface-container) rounded-lg">
                  <span
                    className="material-symbols-outlined"
                    data-icon="chevron_right"
                  >
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
