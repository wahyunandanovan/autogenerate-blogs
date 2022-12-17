import React from 'react';
import styles from '../../styles/layouts/pagelayout.module.scss'
import Navbar from './Navbar';


interface ChildrenProps {
    children: React.ReactNode
}

const PageLayout = ({ children }: ChildrenProps) => (
    <React.Fragment>
        <div className={styles.container} >
            <Navbar />
            {children}
        </div>
    </React.Fragment>
);

export default PageLayout