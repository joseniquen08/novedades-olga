import { NextRequest, NextResponse } from "next/server";
import decodeToken from '../../../utils/decodeToken';

export function middleware (req: NextRequest) {
  if (req.cookies['token']) {
    const tokenObject = decodeToken(req.cookies['token']);
    if (tokenObject.role === 'admin' || tokenObject.role === 'super') {
      return NextResponse.next();
    } else if (tokenObject.role === 'client') {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }
  return NextResponse.redirect(new URL('/admin/login', req.url));
}
