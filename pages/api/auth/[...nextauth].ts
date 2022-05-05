import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  
  console.log('>>> cookie:', req.cookies)

  return await NextAuth(req, res, {
    // Configure one or more authentication providers
    providers: [
      AzureADProvider({
        clientId: process.env.AZURE_AD_CLIENT_ID || '',
        clientSecret: process.env.AZURE_AD_CLIENT_SECRET || '',
        tenantId: process.env.AZURE_AD_TENANT_ID || '',
      }),
    ],
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        // console.log('> SighIn:', { user, account, profile, email, credentials })
        res.setHeader('next-auth.session-token', `${account.access_token}`)
        res.setHeader('session-token', `${account.access_token}`)
        res.setHeader('custom', `custom`)
        req.cookies['custom1'] = `custom1`
        // req.cookies
        return true
      },
      async redirect({ url, baseUrl }) {
        // console.log('> redirect:', {url, baseUrl})
        return baseUrl
      },
      async session({ session, user, token }) {
        // console.log('> session:', session, user, token)
        console.log('>>> session cookie:', { session, user, token })
        return session
      },
      async jwt({ token, user, account, profile, isNewUser }) {
        console.log('> jwt:', { token, user, account, profile, isNewUser })
        return token
      }
    },
    // jwt: {
    //   async encode(params: {
    //     token: JWT
    //     secret: string
    //     maxAge: number
    //   }): Promise<string> {
    //     // return a custom encoded JWT string
    //     return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    //   },
    //   async decode(params: {
    //     token: string
    //     secret: string
    //   }): Promise<JWT | null> {
    //     // return a `JWT` object, or `null` if decoding failed
    //     return {}
    //   },
    // }
  })
}
