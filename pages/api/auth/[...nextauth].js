import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
console.log(process.env.GOOGLE_ID,process.env.GOOGLE_SECRET)
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  callbacks: {
    async signIn({ account, profile }) {
      console.log(account)

      return true // Do different verification for other providers that don't have `email_verified`
    },
  }
});