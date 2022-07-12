import decodeToken from '@utils/decodeToken';
import { NextRequest, NextResponse } from 'next/server';

export function middleware (req: NextRequest) {
  if (req.cookies['token']) {
    const tokenObject = decodeToken(req.cookies['token']);
    if (tokenObject.role === 'admin' || tokenObject.role === 'super') {
      return NextResponse.redirect(new URL('/admin/store', req.url));
    } else if (tokenObject.role === 'client') {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }
}