// app/middleware/auth.js
import { NextResponse } from 'next/server';

export default function middleware(request) {
  console.log("inside of middleware");

  // Access the 'Cookie' header from the request
  const cookies = request.headers.get('Cookie');

  // Parse the cookies to find the JWT token
  const jwtToken = cookies? cookies.split('; ').find(row => row.startsWith('jwtToken')).split('=')[1] : null;

  console.log(jwtToken, "JWT Token");

  if (jwtToken!==null) {
    // User is not authenticated, redirect to sign-in page
    const intendedRoute = request.nextUrl.pathname;
    console.log(`Intended route: ${intendedRoute}`);

    // Redirect to the sign-out page and pass the  url.pathname = `/signout${intendedRoute}`;

  // Return a rewrite response with the absolute URL
  const url = request.nextUrl.clone();

  // Modify the pathname to include the intended route
  url.pathname = `/signout${intendedRoute}`;

  // Return a rewrite response with the absolute URL
  return NextResponse.rewrite(url);
   // Corrected redirect URL
  } else {
    // User is authenticated, proceed with the request
   
    console.log("User is not authenticated");
    return NextResponse.next();
  }
}

// app/middleware/auth.js
export const config = {
  matcher: ['/signin', '/signup'], // Specify paths for sign-in and sign-up pages
};
