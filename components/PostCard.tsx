import Image from 'next/image'
import React from 'react'
import styles from '../styles/components/post-card.module.scss'
import Chip from './Chip'
import { getColor } from '../utils'

function PostCard() {
    const img = 'https://img.freepik.com/free-photo/special-forces-soldier-holding-assault-rifle-with-laser-sight-aims-target-studio-photo-against-dark-textured-wall_613910-20341.jpg?w=740&t=st=1671857720~exp=1671858320~hmac=da018ba65869c8d9920dcce741c0fe884721951dfb8c8c6dad436ffe41e5d91f'
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image
                    src={img}
                    alt="Cover photo"
                    fill
                />
            </div>
            <div className={styles.content}>
                <div className={styles.row}>
                    <Chip title='SPORT' backgroundColor={getColor('SPORT')} />
                    <p>Nov 23, 2022</p>
                </div>
                <h5 className={styles.h5} >#2022 Trends Healthy Food</h5>
                <p className={styles.desc} >
                    Nullam non nisi est sit amet. Arcu vitae amet elementum curabitur vitae nunc. Ut tellus elementum
                </p>

            </div>
        </div>
    )
}

export default PostCard