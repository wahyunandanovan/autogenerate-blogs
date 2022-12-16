import React from 'react';
import styles from '../styles/layouts/pagelayout.module.scss'


interface ChildrenProps {
    children: React.ReactNode
}

const PageLayout = ({ children }: ChildrenProps) => (
    <div className={styles.container} >
        {children}
    </div>
);

export default PageLayout