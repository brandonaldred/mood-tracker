import NextAuth from 'next-auth/next';
import credentialsProvider from 'next-auth/providers/credentials'

const authOptions = {
    providers: [
        credentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const user = { username: "brandonaldred"}
                return user
            }
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login"
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST }