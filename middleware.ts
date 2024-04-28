import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes: [
        '/',
        '/events/:id',
        '/api/webhook/clerk',
        'api/webhook/stripe',
        '/api/uploadthing',
        '/assets/images/EventScoop2.svg',
    ],
    ignoredRoutes: [
    '/api/webhook/clerk',
    'api/webhook/stripe',
    '/api/uploadthing'
    ]
    
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};