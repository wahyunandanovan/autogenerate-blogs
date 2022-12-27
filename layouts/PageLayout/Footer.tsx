import React from 'react'
import styles from '../../styles/layouts/footer.module.scss'
import { footerData, FooterType, siteName } from '../../utils/data'

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.flex1}>
                <h2 className={styles.logo}>Logo</h2>
                <br />
                <p>A complete solution for the latest news for you which is always updated</p>
            </div>
            <div className={styles.flex2}>
                <p className={styles.title}>About Us</p>
                <p className={styles.subtitle}>Contact Us</p>
                <p className={styles.subtitle}>FAQ</p>
                <p className={styles.subtitle}>Privacy Policy</p>
                <p className={styles.subtitle}>Terms of Service</p>
            </div>
            <div className={styles.flex3}>
                <p className={styles.title}>Top Trending</p>
                <p className={styles.subtitle}>Sports</p>
                <p className={styles.subtitle}>Science</p>
                <p className={styles.subtitle}>Astronomi</p>
                <p className={styles.subtitle}>Music</p></div>
            <div className={styles.flex4}>
                <p className={styles.title}>Contact</p>
                <div className={styles.icon_wrapp}>
                    {footerData.map((item: FooterType, index: number) => {
                        return (
                            <img key={index} src={`./icons/${item.name}`} alt={`{item.name} - ${siteName}`} />
                        )
                    })}
                </div>
                <p className={styles.subtitle}>
                    2022 © NamaWebnya.com All right reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer