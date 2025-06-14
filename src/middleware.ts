import { NextRequest, NextResponse } from 'next/server';
import { auth } from './auth';

// fungsi utama middleware
export async function middleware(request: NextRequest) {
  // dapatkan sesi pengguna
  const session = await auth();
  // console.log(session);

  if (!session) {
    // jika pengguna belum login, arahkan ke halaman login
    const callbackUrl = encodeURIComponent(request.url);
    return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, request.url));
  }
  // jika pengguna sudah login, lanjutkan ke halaman tujuan
  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*'],
};
