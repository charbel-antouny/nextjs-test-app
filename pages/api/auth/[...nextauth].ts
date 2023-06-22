import NextAuth, { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? 'NOT_DEFINED',
      clientSecret: process.env.GITHUB_SECRET ?? 'NOT_DEFINED',
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
