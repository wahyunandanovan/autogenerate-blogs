import React from 'react';
import styles from '../../styles/layouts/pagelayout.module.scss'
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from '../../components/Sidebar';
import { UIContext } from '../../hooks/contexts/UIcontext';


interface ChildrenProps {
    children: React.ReactNode
}

const PageLayout = ({ children }: ChildrenProps) => {
    const [drawerWidth, setDrawerWidth] = React.useState<string>('0%')

    return (
        <React.Fragment>
            <UIContext.Provider value={{ drawerWidth, setDrawerWidth }} >
                <div className={styles.body}>
                    <Sidebar />
                    <Navbar />
                    <div className={styles.container} >
                        {children}
                    </div>
                    <Footer />
                </div>
            </UIContext.Provider>
        </React.Fragment>
    );
};

export default PageLayout