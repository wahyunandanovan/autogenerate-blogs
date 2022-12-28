import React from 'react';
//COMPONENTS
import Cover from '../../components/Cover';
//UTILITY
import moment from 'moment';
import useFetch from '../../hooks/useFetch';
import { collection, limit, orderBy, query, where } from 'firebase/firestore';
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';
import { getColor } from '../../utils';
import { firestore } from '../../utils/firebase';
//STYLES
import styles from '../../styles/sections/blog/bottom-detail.module.scss';

interface PropsInterface {
  categoryId: string;
}

function BottomDetail({ categoryId }: PropsInterface) {
  const scrollRef: any = useHorizontalScroll();

  const q = query(collection(firestore, 'articles'), limit(6), where('category.id', '==', String(categoryId)));

  const { data, isLoading } = useFetch(q);

  const time = (item: any) => moment(String(item?.created_at)).fromNow();

  return (
    <div className={styles.container}>
      <h4 className={styles.h4}>
        <span className={styles.span}>You may</span> also like
      </h4>
      <div ref={scrollRef} className={styles.wrapper_map}>
        {data?.map((item: any, index: number) => {
          return (
            <div key={index} className={styles.item}>
              <Cover
                small
                href={`/blog/f`}
                image={item?.images[0]}
                category={item?.category.name.toUpperCase()}
                avatar="/images/wahyu.jpg"
                chipcolor={getColor(item?.category.id)}
                title={item?.title}
                authorname="Wahyu Nanda"
                time={time(item)}
                like={200}
                view={item?.view}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BottomDetail;
