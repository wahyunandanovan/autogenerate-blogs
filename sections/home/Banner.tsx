import React from 'react'
import { bannerData, BannerDataType } from '../../utils/data'
import Card from '../../components/Card'
import ImageGallery from 'react-image-gallery';
import styles from '../../styles/sections/home/banner.module.scss'
import "react-image-gallery/styles/scss/image-gallery.scss";

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

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
            <div className={styles.slider_wrapp}>
                <div className={styles.button_category}>
                    <p>Nature</p>
                </div>
                <ImageGallery items={images}
                    onClick={() => alert('banner')}
                    showNav={true}
                    slideInterval={5000}
                    disableSwipe={true}
                    showThumbnails={false}
                    showFullscreenButton={false}
                    lazyLoad={true}
                    autoPlay={true}
                    infinite={true} />

            </div>
        </div>
    )
}
