import NextAuth from "next-auth";
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
      profile (profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          password: null,
          image: profile.picture,
          role: 'client',
          provider: 'google',
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      },
    }),
    FacebookProvider({
      clientId: `${process.env.FACEBOOK_CLIENT_ID}`,
      clientSecret: `${process.env.FACEBOOK_CLIENT_SECRET}`,
      profile (profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          password: null,
          image: profile.picture.data.url,
          role: 'client',
          provider: 'facebook',
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      },
    }),
  ],
  callbacks: {
    async session ({ session, token, user }) {
      session.user = {
        ...session.user,
        role:  user.role,
        provider: user.provider,
        id: user.id,
      };
      return session;
    },
  },
  secret: `${process.env.NEXTAUTH_SECRET}`,
});