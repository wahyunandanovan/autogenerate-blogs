import moment from 'moment';
import React from 'react';
import Cover from '../../components/Cover';
import { getColor } from '../../utils';
import styles from '../../styles/sections/blog/list.module.scss';
import { QueryInterface } from '../../utils/data';
import Pagination from '../../components/Pagination';

interface PropsInterface {
  data: any;
  isLoading?: boolean;
  indicatorPage: number;
  disabledNext: boolean;
  disabledPrev: boolean;
  getNext: () => void;
  getPrev: () => void;
}

export default function List({ data, isLoading, disabledNext, disabledPrev, getPrev, getNext, indicatorPage }: PropsInterface) {
  return (
    <React.Fragment>
      <div className={styles.container}>
        {isLoading &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number, idx: number) => {
            return (
              <div key={idx} className={styles.content}>
                <Cover isLoading={true} />
              </div>
            );
          })}
        {data?.map((item: QueryInterface, index: number) => {
          const time = moment(item.created_at).format('MMMM Do YYYY');
          return (
            <div key={index} className={styles.content}>
              <Cover
                href={`/blog/${item?.id}`}
                small
                image={item?.images[0]}
                category={item?.category?.name}
                avatar={'/images/wahyu.jpg'}
                chipcolor={getColor(item?.category?.id)}
                title={item?.title}
                authorname="Wahyu Nanda"
                time={time}
                // like={firstArr?.like + 20}
                view={Number(item?.view)}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.pagination}>
        <Pagination showIndicatorPage getPrev={getPrev} getNext={getNext} disabledNext={disabledNext} disabledPrev={disabledPrev} indicatorPage={indicatorPage} />
      </div>
    </React.Fragment>
  );
}
