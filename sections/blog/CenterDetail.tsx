import React from 'react';
import PopularPost from '../../components/PopularPost';
import { useRouter } from 'next/router';
import styles from '../../styles/sections/blog/center-detail.module.scss';
import { async } from '@firebase/util';

interface PropsInterface {
  title: string;
  body: string;
}

function CenterDetail({ title, body }: PropsInterface) {
  const router = useRouter();
  const _goDetail = async (id: string) => {
    await router.push({ pathname: `/blog/${id}` });
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h4>{title}</h4>
        <br />
        <div className={styles.detail}>
          <p>{body}</p>
        </div>
      </div>
      <div className={styles.right}>
        <PopularPost onClick={(id) => _goDetail(id)} />
      </div>
    </div>
  );
}

export default CenterDetail;
