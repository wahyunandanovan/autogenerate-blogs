import React from 'react'
import styles from '../styles/components/card.module.scss'

interface PropsInterface {
    children: React.ReactNode
}
function Card({ children }: PropsInterface) {

    return (
        <div className={styles.card}>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}

export default Card