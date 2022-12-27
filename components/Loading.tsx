import React from 'react'
import styles from '../styles/components/loading.module.scss'

function Loading() {
    return (
        <div className={styles.container} >
            <div className={styles.dots}></div>
        </div>
    )
}

export default Loading