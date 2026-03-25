// import { prisma } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { generateQR } from "@/lib/qr";
// import QRCode from "qrcode.react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface EventPageProps {
  params: Promise<{ eventId: string }>;
}

export default async function EventPage({ params }: EventPageProps) {
  const { eventId } = await params;

  // const event = await prisma.event.findUnique({
  //   where: { id: eventId },
  //   include: { attendances: true },
  // });

  // if (!event) {
  //   return <div>Event not found</div>;
  // }

  return (
    <div className="min-h-screen bg-background space-y-6 p-8">
      <div className="flex items-center justify-between">
        {/* <div>
          <h1 className="text-3xl font-bold">{event.name}</h1>
          <p className="text-muted-foreground">
            {event.date.toLocaleDateString()}
          </p>
        </div> */}
        <div className="space-x-2">
          <Button>Edit</Button>
          <Button variant="outline">Delete</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>QR Code for Check-in</CardTitle>
          </CardHeader>
          <CardContent className="text-center pt-6">
            <div className="mx-auto w-64 h-64 bg-white p-4 rounded-2xl shadow-lg flex items-center justify-center mb-6">
              {generateQR(eventId)}
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Share this QR with attendees
            </p>
            <Button className="w-full">Download QR</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Event Details</CardTitle>
          </CardHeader>
          {/* <CardContent className="space-y-4">
            <div>
              <span className="text-sm text-muted-foreground">Date</span>
              <p className="text-lg font-semibold">
                {event.date.toLocaleDateString()}
              </p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Location</span>
              <p className="text-lg font-semibold">
                {event.location || "Not specified"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Max Attendees
              </span>
              <p className="text-lg font-semibold">
                {event.maxAttendees || "Unlimited"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Current Attendees
              </span>
              <p className="text-lg font-semibold">
                {event.attendances.length}
              </p>
            </div>
          </CardContent> */}
        </Card>
      </div>

      <Card>
        {/* <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Attendance ({event.attendances.length})</CardTitle>
          <Button>Export CSV</Button>
        </CardHeader> */}
        <CardContent className="pt-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Checked In</TableHead>
              </TableRow>
            </TableHeader>
            {/* <TableBody>
              {event.attendances.map((attendance) => (
                <TableRow key={attendance.id}>
                  <TableCell>
                    {attendance.attendeeName || "Anonymous"}
                  </TableCell>
                  <TableCell>{attendance.attendeeEmail || "-"}</TableCell>
                  <TableCell>
                    {new Date(attendance.checkedInAt).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
              {event.attendances.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} className="h-24 text-center">
                    No check-ins yet
                  </TableCell>
                </TableRow>
              )}
            </TableBody> */}
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
