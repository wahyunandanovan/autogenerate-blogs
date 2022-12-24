import React from 'react'
import PostComponent from '../../components/PostComponent'
import SectionContainer from '../../components/SectionContainer'
//STYLE
import styles from '../../styles/sections/home/post.module.scss'

function Post() {
    return (
        <SectionContainer>
            <div className={styles.container}>
                <div className={styles.popular}>
                    <PostComponent />
                </div>
                <div className={styles.latest}>a</div>
            </div>
        </SectionContainer>
    )
}

export default Post