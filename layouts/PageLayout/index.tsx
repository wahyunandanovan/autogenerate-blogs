import React from 'react';
import styles from '../../styles/layouts/pagelayout.module.scss'
import Navbar from './Navbar';
import Footer from './Footer';


interface ChildrenProps {
    children: React.ReactNode
}

const PageLayout = ({ children }: ChildrenProps) => (
    <React.Fragment>
        <div className={styles.body}>
            <Navbar />
            <div className={styles.container} >
                {children}
            </div>
            <Footer />
        </div>
    </React.Fragment>
);

export default PageLayout