import User from '@/models/user';
import connectMongoDB from "@/libs/mongodb";
import NextAuth from 'next-auth/next';
import credentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt';

const authOptions = {
    providers: [
        credentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                try {
                    await connectMongoDB();
                    const { username, password } = credentials;
                    const user = await User.findOne({ username });
                    if (!user) { return Promise.resolve(null); }

                    const passwordsMatch = await bcrypt.compare(password, user.password);
                    if (!passwordsMatch) { return Promise.resolve(null); }

                    return Promise.resolve({
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        // ... add more fields as needed
                    });
                } catch (error) {
                    console.error('Authorization error:', error);
                    return Promise.resolve(null);
                }
            }
        }),
    ],
    session: {
        jwt: true,
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async session(session, user) {
            session.user = {...session.user, ...user};
            return session;
        },
        async jwt(token, user) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                // ... add more fields as needed
            }
            return token;
        },
    },
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST }