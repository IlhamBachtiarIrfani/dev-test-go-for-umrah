// Importing NextAuth and CredentialsProvider from their respective modules
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { requestLogin } from './loginAction';

// Configuration options for NextAuth
const authOptions: NextAuthOptions = {
    // Secret key for signing and encrypting data
    secret: process.env.NEXT_AUTH_SECRET,
    // Providers configuration, including credentials provider for email/password authentication
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
            // Authorization logic for validating credentials and authenticating users
            async authorize(credentials, req) {
                console.log(credentials);
                
                // Authenticating the user using provided email and password
                const user = await requestLogin(credentials?.email ?? '', credentials?.password ?? '');

                // Returning the authenticated user or null if authentication fails
                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    // Pages configuration, customizing the sign-in page
    pages: {
        signIn: "/login",
    },
};

// Creating a NextAuth instance with the provided options
const handler = NextAuth(authOptions);

// Exporting the NextAuth instance as both GET and POST methods
export { handler as GET, handler as POST };
