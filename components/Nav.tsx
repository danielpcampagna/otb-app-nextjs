import React from 'react'
import { signOut, signIn, useSession } from 'next-auth/react'

import styles from '../styles/Nav.module.scss'

export function Nav() {
    const { data: session } = useSession()

    return (
        <nav className={styles.nav}>
            <div>
                <img src='favicon-32x32.png' className={styles.logo}/>
                <h2 className={styles.title}>OTB: Upload database</h2>

                <div className={styles.right}>
                    <div className={styles.left}>
                        { session ? (
                            <>
                                <span>Signed in as { session.user?.email }</span>
                                <small><a href="#" onClick={() => signOut()}>Sign out</a></small>
                            </>
                        ) : (
                            <>
                                {/* <span>Not signed in</span> */}
                                <small><a href="#" onClick={() => signIn()}>Sign in</a></small>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}