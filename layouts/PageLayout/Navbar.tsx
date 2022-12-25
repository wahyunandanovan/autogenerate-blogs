import Link from 'next/link'
import React from 'react'
import { MdMenu } from "react-icons/md";
import { UIContext } from '../../hooks/contexts/UIcontext';
import styles from '../../styles/layouts/navbar.module.scss'
import { navbarMenu, NavbarMenuType } from '../../utils/data'


function Navbar() {
    const { drawerWidth, setDrawerWidth } = React.useContext<any>(UIContext)

    const _openDrawer = () => setDrawerWidth('100%')

    return (
        <nav className={styles.wrapp}>
            <div className={styles.logo}>
                <h2>Logo</h2>
            </div>
            <div className={styles.iconmenu}>
                <MdMenu onClick={_openDrawer} color='red' size={24} />
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
        </nav>
    )
}

export default Navbar