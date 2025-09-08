import { authkitMiddleware } from '@workos-inc/authkit-nextjs';

export default authkitMiddleware({
    middlewareAuth: {
        enabled: true,
        unauthenticatedPaths: [
            "/",
            "/favicon.ico",
            "/brand/:path*",
            "/_next/static/:path*",
            "/_next/image/:path*",
        ],
    },
});

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|brand|icons|images).*)",
    ],
};