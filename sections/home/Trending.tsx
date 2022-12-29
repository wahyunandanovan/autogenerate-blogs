import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import Cover from '../../components/Cover';
import NotFound from '../../components/NotFound';
import Pagination from '../../components/Pagination';
//UTILITY
import moment from 'moment';
import { getColor } from '../../utils';
import { collection, orderBy, query } from 'firebase/firestore';
import { firestore } from '../../utils/firebase';
import { usePagination } from 'use-pagination-firestore';
//STYLE
import styles from '../../styles/sections/home/trending.module.scss';

function Trending() {
  const {
    items: trendingItems,
    isLoading,
    isStart,
    isEnd,
    getPrev,
    getNext,
  } = usePagination(query(collection(firestore, 'articles'), orderBy('view', 'desc')), {
    limit: 3,
  });

  const arr1 = trendingItems[0];
  const arr2 = trendingItems[1];
  const arr3 = trendingItems[2];
  const time = (item: any) => moment(String(item?.created_at)).fromNow();

  return (
    <SectionContainer>
      <div className={styles.row}>
        <div>
          <h4>
            <span>Trending</span> Topics
          </h4>
        </div>
        <Pagination getPrev={getPrev} getNext={getNext} disabledPrev={isStart} disabledNext={isEnd} />
      </div>

      {isEnd ? (
        <NotFound />
      ) : (
        <div className={styles.content}>
          <div className={styles.left_column}>
            <Cover
              trending
              isLoading={isLoading}
              href={`/blog/${arr1?.id}`}
              image={arr1?.images[0]}
              category={arr1?.category.name.toUpperCase()}
              avatar="/images/wahyu.jpg"
              chipcolor={getColor(arr1?.category.id)}
              title={arr1?.title}
              authorname="Nahyu Nanda"
              time={time(arr1)}
              view={arr1?.view}
            />
          </div>
          <div className={styles.rigth_column}>
            <Cover
              trending
              isLoading={isLoading}
              href={`/blog/${arr2?.id}`}
              image={arr2?.images[0]}
              category={arr2?.category.name.toUpperCase()}
              avatar="/images/wahyu.jpg"
              chipcolor={getColor(arr2?.category.id)}
              title={arr2?.title}
              authorname="Wahyu Nanda"
              time={time(arr2)}
              view={arr2?.view}
            />
            <Cover
              trending
              isLoading={isLoading}
              href={`/blog/${arr3?.id}`}
              image={arr3?.images[0]}
              category={arr3?.category.name.toUpperCase()}
              avatar="/images/wahyu.jpg"
              chipcolor={getColor(arr3?.category.id)}
              title={arr3?.title}
              authorname="Nahyu Nanda"
              time={time(arr3)}
              view={arr3?.view}
            />
          </div>
        </div>
      )}
    </SectionContainer>
  );
}

export default Trending;
