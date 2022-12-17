import React from 'react'
import { bannerData, BannerDataType } from '../../utils/data'
import Card from '../../components/Card'
import styles from '../../styles/sections/home/banner.module.scss'



export default function Banner() {
    return (
        <div className={styles.container} >
            <div className={styles.card} >
                <div className={styles.card_container}>
                    <p >What we provide</p>
                    <h3 className={styles.provide}>We Provide Hot News That Is Being Talked About</h3>
                    <div className={styles.wrapper_map}>
                        {bannerData.map((v: BannerDataType, i: number) => {
                            return (
                                <Card key={i}>
                                    {v.icon}
                                    <p className={styles.wrapper_map_title}>{v.title}</p>
                                    <p>{v.description}</p>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* <Card>
                <p>tes</p>
            </Card> */}
        </div>
    )
}
