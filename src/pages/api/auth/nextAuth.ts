import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github"; // Example provider

export default NextAuth({
  providers: [
    // Example: GitHub Provider
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token, user }) {
      // Include user id and other details in the session
      return session;
    },
  },
});
