import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@/utils/database";
// import User from "@models/user";

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Credentials({
    //   //HASH PASSWORD!!!!!!!!!!!!!!!
    //   credentials: {
    //     email: { label: "email", type: "email", required: true },
    //     password: { label: "password", type: "password", required: true },
    //   },
    //   //   async authorized(credentials) {
    //   //     if (!credentials?.email || !credentials.password) return null;
    //   //     await connectToDB();
    //   //     const userExist = await User.find({ email: credentials.email });
    //   //     if (userExist && userExist.password === credentials.password) {
    //   //       const { password, ...userDataWithoutPassword } = userExist;
    //   //       return userDataWithoutPassword;
    //   //     }
    //   //     return null;
    //   //   },
    // }),
  ],
  //   callbacks: {
  //     async session({ session }) {
  //       const sessionUser = await User.findOne({ email: session.user.email });
  //       session.user.id = sessionUser._id.toString();
  //       return session;
  //     },
  //     async signIn({ profile }) {
  //       try {
  //         await connectToDB();
  //         //check if exist
  //         const userExists = await User.findOne({ email: profile.email });

  //         //if not, create new user
  //         if (!userExists) {
  //           await User.create({
  //             email: profile.email,
  //             username: profile.name,
  //             image: profile.picture,
  //           });
  //         }
  //         return true;
  //       } catch (error) {
  //         console.log(error);
  //         return false;
  //       }
  //     },
  //   },
};
