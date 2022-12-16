import React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';
import styles from '../styles/layouts/pagelayout.module.scss'


interface ChildrenProps {
    children: React.ReactNode
}

interface PropsInterface extends ChildrenProps, NextSeoProps { }

const PageLayout = ({ children, title, description, openGraph, twitter }: PropsInterface) => (
    <>
        <NextSeo
            title={title}
            description={description}
            openGraph={openGraph}
            twitter={twitter}
        />
        <div className={styles.container} >
            {children}
        </div>
    </>


);

export default PageLayout