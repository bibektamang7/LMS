import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
// Your own logic for dealing with plaintext password strings; be careful!
import bcrypt from "bcryptjs"
import UserModel from "@/models/user.model"
import dbConnect from "@/dbConfig/dbConfig"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {label: "Email", type: "email"},
        password: {label: "Password", type: "password"},
      },
      authorize: async (credentials: any): Promise<any> => {
        dbConnect();
        try {
          const user = await UserModel.findOne({
            $or: [
              {email: credentials.identifier},
              {username: credentials.identifier},
            ]
          })
          console.log(credentials);
          
          if (!user) {
            throw new Error("User not found.")
          }
          
          if (!user.isVerified) {
            throw new Error("Please verify your email before logging in");
          }
          const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

          if (!isPasswordCorrect) {
            throw new Error("Incorrect Password");
          }
          return user;
        } catch (error: any) {
          throw new Error(error)
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id?.toString(); // Convert ObjectId to string
        token.isVerified = user.isVerified;
        token.username = user.username;
        // token.userType = user.userType;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.isVerified = token.isVerified;
        session.user.username = token.username;
        // session.user.userType = token.userType;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
})