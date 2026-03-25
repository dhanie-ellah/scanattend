import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect admin routes (stub - replace with real auth like Clerk)
  // if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
  //   const token = request.cookies.get('admin-token')?.value;
  //   if (!token) {
  //     return NextResponse.redirect(new URL('/admin/login', request.url));
  //   }
  // }

  // return NextResponse.next();
}

// export const config = {
//   matcher: ['/admin/:path*'],
// };

