import type { NextPage } from 'next'
import { getToken } from "next-auth/jwt"

import { useSession, signIn, signOut, getSession } from "next-auth/react"
import { Dropzone } from '../components/Dropzone'
import { Layout } from '../components/layout'

const Home: NextPage = (props) => {
  const { data: session, status } = useSession()

  console.log({session, status, props})

  if (status === 'loading') {
    return <Layout><span>Loading...</span></Layout>
  }

  if (!session) {
    return (
      <Layout>
        <span>Not signed in</span>
        {/* <button onClick={() => signIn()}>Sign in</button> */}
      </Layout>
    )
  }

  return (
    <Layout>
      <Dropzone />
    </Layout>
  )
}

export default Home
