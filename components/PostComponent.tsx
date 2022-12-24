import React from 'react'
import styles from '../styles/components/post.module.scss'
import Chip from './Chip'

function PostComponent() {
    return (
        <div className={styles.container} >
            <h4 className={styles.h4}>
                Popular<span className={styles.span}> Post</span>
            </h4>
            <div>
                {[1, 2, 3, 4, 5, 6].map((item: number, index: number) => {
                    return (
                        <div key={index} className={styles.row}>
                            <h1 >0{index + 1}</h1>
                            <div className={styles.detail}>
                                <p className={styles.title}>Indonesia Is Perfect for First Time Solo Female Travelers</p>
                                <p className={styles.desc} >December 30, 2022</p>
                                <Chip title="TRAVEL" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PostComponent