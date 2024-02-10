// src/middleware.ts

export { default } from "next-auth/middleware";

// applies next-auth only to matching routes
export const config = { 
    // matcher: "/((?!api|static|authentication|.*\\..*|_next).*)"
    matcher: '/((?!api|authentication).*)'
};