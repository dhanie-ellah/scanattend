"use client";

// import { prisma } from '@/lib/db';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Modal from "../components/createEvent";
import QRPreview from "../components/qrpreview"
import { useDispatch } from "react-redux";
import { setModal } from "@/app/redux/modalSlice";

export default function EventsPage() {
  // const events = await prisma.event.findMany({
  //   orderBy: { createdAt: 'desc' },
  //   take: 10,
  // });

  const dispatch = useDispatch();

  return (
    <div className="bg-(--surface) text-(--on-surface) min-h-screen">
      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full space-y-5">
        {/* <!-- Header Section --> */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-(--primary) font-label font-bold text-xs uppercase tracking-widest mb-2 opacity-80">
              Management Portal
            </p>
            <h2 className="font-headline text-4xl font-extrabold tracking-tight text-(--on-background)">
              Events List
            </h2>
          </div>
          <Button
            className="inline-flex items-center justify-center gap-2 bg-(--primary) text-(--on-primary) px-8 py-6 rounded-full font-label font-bold shadow-lg hover:bg-(--primary-dim) active:scale-95 transition-all group"
            onClick={() => dispatch(setModal("createEvent"))}
          >
            <span className="material-symbols-outlined" data-icon="add">
              add
            </span>
            Create New Event
          </Button>
        </div>
        {/* <!-- Featured/Summary Grid (Bento Style) --> */}
        <Card className="bg-(--surface-container-lowest) p-4 md:p-8 rounded-xl flex flex-col justify-between relative overflow-hidden group border-(--outline-variant)/5">
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-(--primary-container)/20 rounded-full blur-3xl group-hover:bg-(--primary-container)/30 transition-colors"></div>
          <div>
            <span className="inline-block px-3 py-1 bg-(--secondary-container) text-(--on-secondary-container) rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              Upcoming Highlight
            </span>
            <h3 className="font-headline text-2xl font-bold mb-2">
              Workers Sunday Attendance
            </h3>
            <p className="text-(--on-surface-variant) font-body mb-6">
              Ensure all departmental heads are registered for the next
              weekend's primary assembly.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-xs text-(--on-surface-variant) font-medium">
                Date
              </span>
              <span className="font-bold">March 24</span>
            </div>
            <div className="flex flex-col border-l border-(--outline-variant)/30 pl-6">
              <span className="text-xs text-(--on-surface-variant) font-medium">
                Expected
              </span>
              <span className="font-bold">120 Participants</span>
            </div>
          </div>
        </Card>
        {/* <!-- Events Table Content --> */}
        <div className="bg-(--surface-container-low) rounded-xl overflow-hidden border-(--outline-variant)/5">
          <div className="px-8 py-6 border-b border-(--outline-variant)/10 flex items-center justify-between">
            <h4 className="font-headline font-bold text-lg">Active Events</h4>
            <div className="flex gap-2">
              <button className="p-2 text-(--on-surface-variant) hover:bg-(--surface-container-high) rounded-lg transition-colors">
                <span
                  className="material-symbols-outlined"
                  data-icon="filter_list"
                >
                  filter_list
                </span>
              </button>
              <button className="p-2 text-(--on-surface-variant) hover:bg-(--surface-container-high) rounded-lg transition-colors">
                <span className="material-symbols-outlined" data-icon="sort">
                  sort
                </span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table className="w-full border-collapse">
              <TableHeader>
                <TableRow className="text-left">
                  <TableHead className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-(--on-surface-variant) font-label">
                    Event Name
                  </TableHead>
                  <TableHead className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-(--on-surface-variant) font-label text-center">
                    Date
                  </TableHead>
                  <TableHead className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-(--on-surface-variant) font-label text-right">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-(--outline-variant)/5">
                {/* <!-- Row 1 --> */}
                <TableRow className=" hover:bg-white transition-colors group">
                  <TableCell className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-(--surface-container) flex items-center justify-center text-(--primary)">
                        <span
                          className="material-symbols-outlined"
                          data-icon="event"
                        >
                          event
                        </span>
                      </div>
                      <span className="font-bold text-(--on-surface) text-nowrap">
                        Workers Sunday Attendance
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-8 py-5 text-center">
                    <span className="inline-block px-4 py-1.5 bg-(--surface-container) rounded-full text-sm font-semibold text-nowrap">
                      March 24
                    </span>
                  </TableCell>
                  <TableCell className="px-8 py-5">
                    <div className="flex items-center justify-end gap-3">
                      <button
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-(--primary) hover:bg-(--primary-container) transition-all"
                        title="View QR"
                      >
                        <span
                          className="material-symbols-outlined text-xl"
                          data-icon="qr_code_2"
                        >
                          qr_code_2
                        </span>
                        <span className="text-xs font-bold font-label hidden lg:inline" onClick={() => dispatch(setModal("qrPreview"))}>
                          View QR
                        </span>
                      </button>
                      <button
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-(--secondary) hover:bg-(--secondary-container) transition-all"
                        title="View Attendance"
                      >
                        <span
                          className="material-symbols-outlined text-xl"
                          data-icon="group"
                        >
                          group
                        </span>
                        <span className="text-xs font-bold font-label hidden lg:inline">
                          View Attendance
                        </span>
                      </button>
                      <button
                        className="p-2 text-(--error) hover:bg-(--on-error) rounded-lg transition-all opacity-40 group-hover:opacity-100"
                        title="Delete"
                      >
                        <span
                          className="material-symbols-outlined text-xl"
                          data-icon="delete"
                        >
                          delete
                        </span>
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
                {/* <!-- Row 2 --> */}
                <TableRow className="hover:bg-white transition-colors group">
                  <TableCell className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-(--surface-container) flex items-center justify-center text-(--primary)">
                        <span
                          className="material-symbols-outlined"
                          data-icon="school"
                        >
                          school
                        </span>
                      </div>
                      <span className="font-bold text-(--on-surface) text-nowrap">
                        Leadership Seminar Vol. II
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-8 py-5 text-center">
                    <span className="inline-block px-4 py-1.5 bg-(--surface-container) rounded-full text-sm font-semibold text-nowrap">
                      April 02
                    </span>
                  </TableCell>
                  <TableCell className="px-8 py-5">
                    <div className="flex items-center justify-end gap-3">
                      <button
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-(--primary) hover:bg-(--primary-container) transition-all"
                        title="View QR"
                      >
                        <span
                          className="material-symbols-outlined text-xl"
                          data-icon="qr_code_2"
                        >
                          qr_code_2
                        </span>
                        <span className="text-xs font-bold font-label hidden lg:inline" onClick={() => dispatch(setModal("qrPreview"))}>
                          View QR
                        </span>
                      </button>
                      <button
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-(--secondary) hover:bg-(--secondary-container) transition-all"
                        title="View Attendance"
                      >
                        <span
                          className="material-symbols-outlined text-xl"
                          data-icon="group"
                        >
                          group
                        </span>
                        <span className="text-xs font-bold font-label hidden lg:inline">
                          View Attendance
                        </span>
                      </button>
                      <button
                        className="p-2 text-(--error) hover:bg-(--on-error) rounded-lg transition-all opacity-40 group-hover:opacity-100"
                        title="Delete"
                      >
                        <span
                          className="material-symbols-outlined text-xl"
                          data-icon="delete"
                        >
                          delete
                        </span>
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="px-8 py-5 flex items-center justify-between">
            <p className="text-xs text-(--on-surface-variant) font-medium">
              Showing 3 of 24 active events
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-(--surface-container) rounded-full text-xs font-bold text-(--on-surface) opacity-50 cursor-not-allowed">
                Previous
              </button>
              <button className="px-4 py-2 bg-(--primary) text-(--on-primary) rounded-full text-xs font-bold hover:bg-(--primary-dim) transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>

      <Modal />
      <QRPreview/>

      {/* <Card>
        <CardHeader>
          <CardTitle>Recent Events</CardTitle>
          <CardDescription>View and manage your upcoming and past events.</CardDescription>
        </CardHeader>
        <CardContent>
          {events.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No events yet.</p>
              <Button asChild>
                <Link href="/admin/events/create">Create your first event</Link>
              </Button>
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Attendees</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell className="font-medium">{event.name}</TableCell>
                      <TableCell>{new Date(event.date).toLocaleDateString()}</TableCell>
                      <TableCell>{event.location || 'TBD'}</TableCell>
                      <TableCell>{0}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/admin/events/${event.id}`}>View</Link>
                        </Button>
                        <Button variant="ghost" size="sm" className="ml-2">QR</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card> */}
    </div>
  );
}
