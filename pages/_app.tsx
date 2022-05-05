import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'
// import { MemoryRouter } from "react-router-dom"

import '../styles/globals.scss'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      {/* <MemoryRouter initialEntries={["/input"]}> */}
        <Component {...pageProps} />
      {/* </MemoryRouter> */}
    </SessionProvider>
  )
}