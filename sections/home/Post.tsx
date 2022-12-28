import React from 'react';
//COMPONENTS
import PopularPost from '../../components/PopularPost';
import PostCard from '../../components/PostCard';
import SectionContainer from '../../components/SectionContainer';
//UTILITY
import useFetch from '../../hooks/useFetch';
import { collection, limit, orderBy, query } from 'firebase/firestore';
import { firestore } from '../../utils/firebase';
import { useRouter } from 'next/router';
import { QueryInterface } from '../../utils/data';
//STYLE
import styles from '../../styles/sections/home/post.module.scss';
import moment from 'moment';

function Post() {
  const q = query(collection(firestore, 'articles'), limit(6), orderBy('created_at', 'desc'));

  const { data: lastPostData, isLoading } = useFetch(q);

  const router = useRouter();

  const _goDetail = (id: string) => router.push({ pathname: `/blog/${id}` });

  return (
    <SectionContainer>
      <div className={styles.container}>
        <div className={styles.popular}>
          <PopularPost onClick={(v: string) => _goDetail(v)} />
        </div>
        <div className={styles.latest}>
          <h4 className={styles.h4}>
            Latest<span className={styles.span}> Post</span>
          </h4>
          <div className={styles.flex_container}>
            {lastPostData?.map((item: QueryInterface, index: number) => {
              const time = moment(item.created_at).format('MMMM Do YYYY');
              return (
                <div key={index} className={styles.flex_item}>
                  <PostCard
                    href={`/blog/${item?.id}`}
                    img={item?.images[0]}
                    time={time}
                    title={item?.title}
                    category={item?.category?.name.toUpperCase()}
                    chipColor={item?.category?.id}
                    description={`${item?.body.slice(0, 100)}...`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Post;
