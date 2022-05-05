import React from 'react'

import { Footer } from './footer'
import { Header } from './header'

import styles from '../styles/Home.module.scss'

interface Props {
    children: React.ReactElement
}

export function Layout({ children }: Props) {
    return (
        <div className={styles.container}>
            <Header/>

            <main className={styles.main}>
                { children }
            </main>
            
            <Footer />
        </div>
    )
}