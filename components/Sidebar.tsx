import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { UIContext } from '../hooks/contexts/UIcontext'
import styles from '../styles/components/sidebar.module.scss'

function Sidebar() {
    const { drawerWidth, setDrawerWidth } = React.useContext<any>(UIContext)

    const _closeDrawer = () => setDrawerWidth('0px')

    return (
        <div style={{
            transition: " width 0.5s ease 0s",
            width: drawerWidth,
            height: '100%',
            position: 'fixed',
            top: 0,
            zIndex: 1000,
            backgroundColor: '#212936',
            overflow: "hidden",
        }} >
            <div className={styles.row}>
                <AiOutlineClose onClick={_closeDrawer} color='#fff' width={50} height={50} />
            </div>
        </div>
    )
}

export default Sidebar