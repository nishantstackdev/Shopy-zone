import { NextResponse } from "next/server";

// Pages requiring login
const PROTECTED_PATHS = [
  "/checkout",
  "/profile",
];

// Auth pages
const AUTH_PATHS = [
  "/login",
  "/register",
  "/verify-otp"
];

export default function middleware(request) {
  const { pathname } = request.nextUrl;

  const token =
    request.cookies.get("jwt")?.value || null;
    

  // Not logged in → redirect to login
  if (PROTECTED_PATHS.includes(pathname) && !token) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  // Already logged in → prevent auth pages
  if (AUTH_PATHS.includes(pathname) && token) {
    return NextResponse.redirect(
      new URL("/", request.url)
    );
  }

  return NextResponse.next();
}


export const config = {
  matcher: [
    "/checkout",
    "/profile",
    "/login",
    "/register",
    "/verify-otp",
  ],
};