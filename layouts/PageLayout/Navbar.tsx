import Link from 'next/link'
import React from 'react'
import { MdMenu } from "react-icons/md";
import styles from '../../styles/layouts/navbar.module.scss'
import { navbarMenu, NavbarMenuType } from '../../utils/data'


function Navbar() {

    return (
        <div className={styles.container} >
            <div className={styles.wrapp}>
                <div className={styles.logo}>
                    <h2>Logo</h2>
                </div>
                <div className={styles.iconmenu}>
                    <MdMenu color='red' size={24} />
                </div>
                <div className={styles.linkWrapp}>
                    {navbarMenu.map((item: NavbarMenuType, idx: number) => {
                        return (
                            <div key={idx}>
                                <Link href={item.path} className={styles.link}>{item.name}</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Navbar