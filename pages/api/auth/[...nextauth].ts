import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import connnectDB from "../../../utils/connectDB";
import Users from "./../../../model/UserModel";
import bcrypt from "bcrypt";
//@ts-ignore
import clientPromise from "../../../lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { randomBytes, randomUUID } from "crypto";

connnectDB();
export const authOptions: NextAuthOptions = {
  // @ts-ignore
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
    generateSessionToken: () => {
      return (
        randomUUID?.() ?? randomBytes(32).toString("hex")
      );
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env
        .GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      // @ts-ignore
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user = await Users.findOne({ email });
        if (!user) {
          throw new Error("you haven't registered");
        }

        if (user) {
          return signUser({ password, user });
        }

        // if everything is fine
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
    async session({ session, user, token }) {
      return session;
    },
  },

};

interface signUserProps {
  password: string;
  user: {
    password: string;
  };
}

const signUser = async ({
  password,
  user,
}: signUserProps) => {
  if (!user.password) {
    throw new Error("please enter a password");
  }

  const isMatch = await bcrypt.compare(
    password,
    user.password
  );
  if (!isMatch) {
    throw new Error("password  mismatch");
  }
  return user;
};

export default NextAuth(authOptions);
