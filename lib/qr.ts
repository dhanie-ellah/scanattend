// QR generation using Google Charts API (no deps needed)
export async function generateQR(eventId: string): Promise<string> {
  return `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=/e/${eventId}&choe=UTF-8`;
}

export function getEventUrl(eventId: string): string {
  return `/e/${eventId}`;
}
