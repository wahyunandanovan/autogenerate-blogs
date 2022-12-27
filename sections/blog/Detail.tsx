import React from 'react'
import Footer from '../../layouts/PageLayout/Footer'
import BottomDetail from './BottomDetail'
import CenterDetail from './CenterContent'
import TopDetail from './TopContent'
import styles from '../../styles/sections/blog/detail.module.scss'

function Detail() {
    const useWidth = () => {
        const [width, setWidth] = React.useState(0);
        const handleResize = () => setWidth(window.innerWidth);
        React.useEffect(() => {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, [handleResize]);
        return width;
    };
    const qwe = useWidth()

    return (
        <div>
            <TopDetail
                title='How to choose the right colors when creating a website?'
                imgWidth={Number(qwe)}
                imgHeight={500}
            />
            <p>{qwe}</p>
            <CenterDetail />
            <BottomDetail />
            <Footer />
        </div>
    )
}

export default Detail