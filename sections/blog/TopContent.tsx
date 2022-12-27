import Image from 'next/image';
import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import styles from '../../styles/sections/blog/top-detail.module.scss'
import { siteName } from '../../utils/data';

interface PropsInterface {
    title: string
    imgWidth: number
    imgHeight: number
}

function TopDetail({ title, imgHeight, imgWidth }: PropsInterface) {
    return (
        <div className={styles.container}>
            <IoMdArrowBack size={32} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.written}>Written by content writer {siteName}.</p>
            <Image src='https://picsum.photos/id/1018/1000/600/' alt='img' width={imgWidth} height={imgHeight} />
        </div>
    )
}

export default TopDetail