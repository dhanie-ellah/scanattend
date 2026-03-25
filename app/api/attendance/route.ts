import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventId, attendeeName, attendeeEmail } = body;

    const attendance = await prisma.attendance.create({
      data: {
        eventId,
        attendeeName,
        attendeeEmail,
      },
    });

    return NextResponse.json(attendance, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to record attendance" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const attendances = await prisma.attendance.findMany({
      include: { event: true },
      orderBy: { checkedInAt: "desc" },
    });
    return NextResponse.json(attendances);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch attendance" },
      { status: 500 },
    );
  }
}
