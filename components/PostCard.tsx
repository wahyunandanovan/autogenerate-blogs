import Image from 'next/image'
import React from 'react'
import styles from '../styles/components/post-card.module.scss'
import Chip from './Chip'
import { getColor } from '../utils'
import { blurDataURL, siteName } from '../utils/data'

interface PropsInterface {
    img: string
    title: string
    category?: string
    time?: string
    description?: string
}

function PostCard({ img, title, time, description, category }: PropsInterface) {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image
                    src={img}
                    alt={`${title} - ${siteName}`}
                    placeholder='blur'
                    blurDataURL={blurDataURL}
                    fill
                />
            </div>
            <div className={styles.content}>
                <div className={styles.row}>
                    <Chip title={category} backgroundColor={getColor(category)} />
                    <p>{time}</p>
                </div>
                <h5 className={styles.h5} >{title}</h5>
                <p className={styles.desc} >{description}</p>

            </div>
        </div>
    )
}

export default PostCard