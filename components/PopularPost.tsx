import React from 'react';

//COMPONENTS
import Chip from './Chip';
//UTILITY
import moment from 'moment';
import useFetch from '../hooks/useFetch';
import { getColor } from '../utils';
import { firestore } from '../utils/firebase';
import { collection, limit, orderBy, query } from 'firebase/firestore';

//STYLES
import styles from '../styles/components/post.module.scss';

interface PropsInterface {
  onClick: (v: string) => void;
}

function PopularPost({ onClick }: PropsInterface) {
  const q = query(collection(firestore, 'articles'), limit(6), orderBy('view', 'desc'));

  const { data, isLoading } = useFetch(q);

  return (
    <div className={styles.container}>
      <h4 className={styles.h4}>
        Popular<span className={styles.span}> Post</span>
      </h4>
      <div>
        {data?.map((item: any, index: number) => {
          const time = moment(item.created_at).format('MMMM Do YYYY');
          return (
            <div key={index} className={styles.row}>
              <h1>0{index + 1}</h1>
              <div className={styles.detail}>
                <p onClick={() => onClick(item?.id)} className={styles.title}>
                  {item?.title}
                </p>
                <p className={styles.desc}>{time}</p>
                <Chip title={item?.category?.name} backgroundColor={getColor(item?.category?.id)} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PopularPost;
