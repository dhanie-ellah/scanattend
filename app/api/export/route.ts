import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const eventId = searchParams.get("eventId");

    if (!eventId) {
      return NextResponse.json({ error: "Event ID required" }, { status: 400 });
    }

    const attendances = await prisma.attendance.findMany({
      where: { eventId },
      include: { event: true },
    });

    // Generate CSV
    const headers = ["Name", "Email", "Checked In", "Event"];
    const csv = [
      headers.join(","),
      ...attendances.map((a) =>
        [
          `"${a.attendeeName || "Anonymous"}"`,
          `"${a.attendeeEmail || ""}"`,
          new Date(a.checkedInAt).toISOString(),
          `"${a.event?.name || ""}"`,
        ].join(","),
      ),
    ].join("\n");

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="attendance-${eventId}.csv"`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate export" },
      { status: 500 },
    );
  }
}
