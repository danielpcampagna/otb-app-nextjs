import React from 'react'
import Head from 'next/head'
import { Nav } from '../Nav'

export function Header() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
        </>
    )
}