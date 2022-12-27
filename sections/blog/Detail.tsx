import React from 'react';
import Footer from '../../layouts/PageLayout/Footer';
import BottomDetail from './BottomDetail';
import CenterDetail from './CenterContent';
import TopDetail from './TopContent';
import styles from '../../styles/sections/blog/detail.module.scss';
import useWindowDimensions from '../../hooks/useWindowDimension';

interface Dimension {
  width: number | any;
  height: number | any;
}

function Detail() {
  const { width, height }: Dimension = useWindowDimensions();

  return (
    <div>
      <TopDetail title="How to choose the right colors when creating a website?" />
      <CenterDetail />
      <BottomDetail />
      <Footer />
    </div>
  );
}

export default Detail;
