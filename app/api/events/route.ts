import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { CreateEventInput } from "@/models/Event";

export async function GET() {
  try {
    const events = await prisma.event.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateEventInput = await request.json();

    const event = await prisma.event.create({
      data: {
        name: body.name,
        description: body.description,
        date: new Date(body.date),
        location: body.location,
        maxAttendees: body.maxAttendees
          ? parseInt(body.maxAttendees)
          : undefined,
      },
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create event" },
      { status: 500 },
    );
  }
}
