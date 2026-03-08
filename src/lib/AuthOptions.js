import { SignInUser } from "@/app/action/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { Collections, dbConnect } from "./dbConnect";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        // username: { label: "Username", type: "text", placeholder: "jsmith" },
        // password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await SignInUser(credentials);
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // check user
      const isExist = await dbConnect(Collections.Users).findOne({
        email: user?.email,
        // provider: account?.provider,
      });
      if (isExist) {
        return true;
      }
      // create user
      const newUser = {
        provider: account?.provider,
        name: user?.name,
        email: user?.email,
        nid: user?.nid,
        phone: user?.phone,
        createdAt: new Date(),
      };
      const result = await dbConnect(Collections.Users).insertOne(newUser);
      return result.acknowledged;
    },

    async session({ session, user, token }) {
      if (token) {
        session.email = user?.email;
        session.nid = user?.nid;
        session.phone = user?.phone;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        if (account.provider == "google") {
          const dbUser = await dbConnect(Collections.Users).findOne({
            email: user?.email,
          });
          token.email = dbUser?.email;
          token.nid = dbUser?.nid;
          token.phone = dbUser?.phone;
        } else {
          token.email = user?.email;
          token.nid = user?.nid;
          token.phone = user?.phone;
        }
      }
      return token;
    },
  },
};
