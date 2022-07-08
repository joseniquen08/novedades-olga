import { NextRequest, NextResponse } from 'next/server';
import decodeToken from '../../../utils/decodeToken';

export function middleware (req: NextRequest) {
  if (req.cookies['token']) {
    const tokenObject = decodeToken(req.cookies['token']);
    if (tokenObject.role === 'admin') {
      return NextResponse.redirect(new URL('/admin/inicio', req.url));
    } else if (tokenObject.role === 'client') {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }
}