import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|.*\\..*).*)", // Match all routes except static files

    // Allow public routes
    "/public-route", // Add your public routes here
    // Add more public routes if needed

    // Always run for API routes
    "/api/(.*)",
    "/trpc/(.*)",
  ],
};
