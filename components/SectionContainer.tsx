import React from 'react'
import styles from '../styles/components/section-container.module.scss'

interface PropsInterface {
    children: React.ReactNode
}

export default function SectionContainer({ children }: PropsInterface) {
    return (
        <div className={styles.div} >{children}</div>
    )
}
