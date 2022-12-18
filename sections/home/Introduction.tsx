import React from 'react'
import SectionContainer from '../../components/SectionContainer'
//STYLE
import styles from '../../styles/sections/home/introduction.module.scss'

export default function Introduction() {
    return (
        <SectionContainer>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h4>Why Choose <span>Our Web?</span></h4>
                    <p>Our website provides a variety of interesting information and is currently being discussed by the public.</p>
                    <p>By using our site, you can easily get the information you want, of course, with clear and concise information</p>
                </div>
                <div className={styles.right}>q</div>
            </div>
        </SectionContainer>
    )
}
