// import { NextRequest, NextResponse } from 'next/server';

// This middleware function already defined by next-auth.
// So, No need this middleware function
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/new-page', request.url));
// }

// import middleware from 'next-auth/middleware';
// export default middleware;
// There is a shorter way to write this. insted of importing this middleware function
// and then exporting it, we can export it in one goal like this.
// With this syntax, we are exporting the default object is imported from this module.
export { default } from 'next-auth/middleware';

export const config = {
  // /users:id* --> Zero or More
  // /users:id+ --> One or More
  // /users:id? --> Zero or One
  // this always start with "/" forward slash
  matcher: ['/users/:id*'],
  //   matcher: ['/dashboard/:path*'],
};
