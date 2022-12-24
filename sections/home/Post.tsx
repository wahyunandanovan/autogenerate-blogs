import React from 'react'
import PopularPost from '../../components/PopularPost'
import PostCard from '../../components/PostCard'
import SectionContainer from '../../components/SectionContainer'
//STYLE
import styles from '../../styles/sections/home/post.module.scss'

function Post() {
    return (
        <SectionContainer>
            <div className={styles.container}>
                <div className={styles.popular}>
                    <PopularPost />
                </div>
                <div className={styles.latest}>
                    <h4 className={styles.h4}>
                        Latest<span className={styles.span}> Post</span>
                    </h4>
                    <div className={styles.flex_container}>
                        {[1, 2, 3, 4, 5, 6].map((item: any, index: number) => {
                            return (
                                <div key={index} className={styles.flex_item} >
                                    <PostCard />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}

export default Post