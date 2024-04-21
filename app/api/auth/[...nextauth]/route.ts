import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { requestLogin } from './loginAction';

const authOptions: NextAuthOptions = {
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
                userAgent: { type: "text" },
                deviceInfo: { type: "text" },
                locationInfo: { type: "text" }
            },
            async authorize(credentials, req) {
                console.log(credentials);
                
                const user = await requestLogin(credentials?.email ?? '', credentials?.password ?? '');

                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    pages: {
        signIn: "/login",
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };