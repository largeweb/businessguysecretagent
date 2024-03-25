import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const { auth, handlers: { GET, POST } } = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    secret: process.env.AUTH_SECRET,
    // add redirect to /
    callbacks: {
        async redirect(params) {
            const { url, baseUrl } = params;
            return url.startsWith(baseUrl) ? url : baseUrl;
        }
    }
})